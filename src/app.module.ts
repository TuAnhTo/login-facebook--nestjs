import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { FacebookStrategy } from "./facebook-auth/facebook.strategy";
import { FacebookAuthController } from './facebook-auth/facebook-auth.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'dev123456',
      database: 'dev',
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }),
    UserModule
  ],
  controllers: [AppController, FacebookAuthController],
  providers: [AppService, FacebookStrategy],
})
export class AppModule { }
