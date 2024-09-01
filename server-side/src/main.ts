/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const PORT = 5000;
	app.use(cookieParser());
	app.enableCors({
		origin: [process.env.CLIENT_URL],
		credentials: true,
		exposedHeaders: 'set-cookie',
	});
	await app.listen(PORT, () =>
		console.log(`Server Running on port: http://localhost:${PORT}`)
	);
}
bootstrap();
