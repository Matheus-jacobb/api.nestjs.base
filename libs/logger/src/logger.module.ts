import { DynamicModule, FactoryProvider, Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerModule, Params } from 'nestjs-pino';

export type LoggerOptionsModule = Pick<DynamicModule, 'imports'> & Pick<FactoryProvider, 'inject'> & {
  useFactory: (...args: any[]) => Params & { prettyLog: boolean };
};

@Module({})
export class LoggerModule {
  static forRootAsync(options: LoggerOptionsModule): DynamicModule {
    return {
      module: LoggerModule,
      imports: [
        PinoLoggerModule.forRootAsync({
          inject: options.inject,
          useFactory: async (...args) => {
            const defaultOptions = options.useFactory(...args);
            const pinoPretty = await import('pino-pretty').then(m => m.default).catch(() => null);

            return {
              ...defaultOptions,
              pinoHttp: {
                ...defaultOptions.pinoHttp,
                ...defaultOptions.prettyLog && !!pinoPretty && {
                  stream: pinoPretty({
                    colorize: true,
                  }),
                },
                redact: ['*.authorization', '*.*.authorization', '*.cookie', '*.*.cookie'],
              },
            };
          },
        }),
      ],
    };
  }
}
