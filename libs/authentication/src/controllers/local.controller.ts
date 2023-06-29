import { JwtTokenProxy } from '@common/authentication/models/jwt-token.proxy';
import { LocalLoginPayload } from '@common/authentication/models/local-login.payload';
import { IRequestUser } from '@common/authentication/models/request.user.interface';
import { AuthenticationService } from '@common/authentication/services/authentication.service';
import { CurrentUser } from '@common/authentication/decorators/user.decorator';
import { ApiOkResponse, ApiOperation } from '@common/swagger';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class LocalController {
  constructor(
    protected readonly service: AuthenticationService,
  ) {}

  @ApiOperation('Authenticate the user by local strategy.')
  @ApiOkResponse(JwtTokenProxy)
  @UseGuards(AuthGuard('local'))
  @Post('local')
  @ApiBody({ type: LocalLoginPayload })
  public getJWTFromLocalAuthentication(@CurrentUser() requestUser: IRequestUser): Promise<JwtTokenProxy> {
    return this.service.getJWTFromRequestUser(requestUser);
  }
}
