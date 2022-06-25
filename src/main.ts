import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan(':method :url :status content-length: :res[content-length] - :response-time ms'));
  app.enableCors();
  app.setGlobalPrefix('api');

  app.use(cookieParser());

  const swaggerConfig = new DocumentBuilder()
      .setTitle('Nikantipin api')
      .setDescription('The Bookini API description')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/swagger', app, document);

  await app.listen(3000);
}
bootstrap();
