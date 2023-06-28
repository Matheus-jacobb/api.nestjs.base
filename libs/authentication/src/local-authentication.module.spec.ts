import { ILocalUserService } from '@common/authentication/interfaces/local-user.service.interface';
import { LocalAuthenticationModule } from '@common/authentication/local-authentication.module';
import { IRequestUser } from '@common/authentication/models/request.user.interface';
import { LocalStrategy } from '@common/authentication/strategies/local.strategy';
import { createMock } from '@golevelup/ts-jest';
import { DynamicModule, Injectable, Module } from '@nestjs/common';
import { Test } from '@nestjs/testing';

@Injectable()
export class TestLocalService implements ILocalUserService {
  constructor(
    protected readonly mock: IRequestUser,
  ) {}

  public getUser(username: string, password: string): Promise<IRequestUser> {
    return Promise.resolve(this.mock);
  }
}

@Module({})
class TestLocalModule {
  public static register(mock: IRequestUser): DynamicModule {
    return {
      module: TestLocalModule,
      providers: [
        { provide: TestLocalService, useValue: new TestLocalService(mock) },
      ],
      exports: [
        TestLocalService,
      ],
    }
  }
}

describe('LocalAuthenticationModule', () => {
  it('should resolve correctly the service passed on registerRoot', async () => {
    const mockUser = createMock<IRequestUser>();

    const moduleRef = await Test.createTestingModule({
      imports: [
        LocalAuthenticationModule.registerRoot({
          imports: [
            TestLocalModule.register(mockUser),
          ],
          service: TestLocalService,
        }),
      ],
    }).compile();

    await expect(moduleRef.get(LocalStrategy).validate('blabla', 'blabla')).resolves.toEqual(mockUser);
  });
});
