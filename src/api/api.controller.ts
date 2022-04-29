import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiService } from './api.service';

@ApiTags('HttpService')
@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('nasa-api')
  getNasaApi() {
    this.apiService.getNasaApi();
  }

  @Get('github-api/:username')
  @ApiOperation({ summary: 'Gets info from Github API by username' })
  getGithub(@Param('username') username: string) {
    return this.apiService.getGithubApi(username);
  }
}
