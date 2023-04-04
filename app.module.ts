import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/adminmodule.module';
import { SellerModule } from './sellerfile/seller.module';
import { ModeratorModule } from './moderatorfile/moderator.module';

@Module({
  imports: [AdminModule , SellerModule,ModeratorModule, TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'root',
     database: 'abc_ecommerce',
     autoLoadEntities: true,
     synchronize: true,
   }
   ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
