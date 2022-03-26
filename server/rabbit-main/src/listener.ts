import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://jipqxuca:JlQeNn0Wkgkk7lo3CJgDO8S0aofSeTH2@beaver.rmq.cloudamqp.com/jipqxuca'],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  // @ts-ignore
  app.listen(() => {
    console.log('Microservice is listening');
  });
}
bootstrap();
