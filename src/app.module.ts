import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {AuthModule} from "./controllers/auth/auth.module";
import {BooksModule} from "./controllers/books/books.module";

@Module({
  imports: [
      AuthModule,
      BooksModule,
    MongooseModule.forRoot('mongodb://localhost:27017/book-store')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
