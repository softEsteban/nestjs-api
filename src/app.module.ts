import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { ApiController } from './api/api.controller';
import { ApiService } from './api/api.service';
import { RequestService } from './request/request.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CatsController, ApiController],
  providers: [AppService, CatsService, ApiService, RequestService],
})
export class AppModule { }
