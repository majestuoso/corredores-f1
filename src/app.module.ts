import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorredoresService } from './corredores/corredores.service';
import { CorredoresController } from './corredores/corredores.controller';

@Module({
  imports: [],
  controllers: [AppController, CorredoresController],
  providers: [AppService, CorredoresService],
})
export class AppModule {}
