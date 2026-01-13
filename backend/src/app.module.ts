import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeModule } from './home/home.module';

@Module({
  imports: [
    GithubModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    HomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
