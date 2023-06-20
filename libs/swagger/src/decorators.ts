import { ApiOperation as ApiOperationSwagger, ApiOkResponse as ApiOkResponseSwagger } from '@nestjs/swagger';

export const ApiOperation = (summary: string) => ApiOperationSwagger({
  summary,
});

export const ApiOkResponse = (type?: any, isArray?: boolean) => ApiOkResponseSwagger({
  type,
  isArray,
});
