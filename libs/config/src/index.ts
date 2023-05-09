import { isUndefined } from '@nestjs/common/utils/shared.utils';
import { ConfigService } from '@nestjs/config';

// ref: https://github.com/nestjs/config/issues/245#issuecomment-1246791013
ConfigService.prototype.get = function (
  propertyPath: any,
  defaultValueOrOptions?: any,
  options?: any,
): any {
  // @ts-ignore
  const validatedEnvValue = this.getFromValidatedEnv(propertyPath);

  if (!isUndefined(validatedEnvValue))
    return validatedEnvValue;

  const defaultValue =
    // @ts-ignore
    this.isGetOptionsObject(defaultValueOrOptions) && !options
      ? undefined
      : defaultValueOrOptions;

  // @ts-ignore
  const internalValue = this.getFromInternalConfig(propertyPath);

  if (!isUndefined(internalValue))
    return internalValue;

  // @ts-ignore
  const processEnvValue = this.getFromProcessEnv(propertyPath, defaultValue)
  if (!isUndefined(processEnvValue))
    return processEnvValue


  return defaultValue;
};
