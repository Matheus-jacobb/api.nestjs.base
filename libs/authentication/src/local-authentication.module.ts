import { AuthenticationModule } from '@common/authentication/authentication.module';
import { LocalController } from '@common/authentication/controllers/local.controller';
import { ILocalUserService, LocalUserServiceSymbol } from '@common/authentication/interfaces/local-user.service.interface';
import { LocalStrategy } from '@common/authentication/strategies/local.strategy';
import { DynamicModule, Module, Type } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface';

export type LocalAuthenticationOptions = {
  imports?: ModuleMetadata['imports'],
  providers?: ModuleMetadata['providers'],
  service: Type<ILocalUserService>,
};

@Module({})
export class LocalAuthenticationModule {
  public static registerRoot({ imports, service, providers }: LocalAuthenticationOptions): DynamicModule {
    return {
      module: LocalAuthenticationModule,
      imports: [
        AuthenticationModule,
        ...(imports || []),
      ],
      providers: [
        LocalStrategy,
        { provide: LocalUserServiceSymbol, useExisting: service },
        ...(providers || []),
      ],
      controllers: [
        LocalController,
      ],
    };
  }
}
