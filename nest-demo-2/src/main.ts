/* eslint-disable prettier/prettier */

import { Body, Controller, Get , Module, Param, Post } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller('/users')
class UserController {
  
    @Get('/all')
    getAllUser() {
        
    }

    @Post('/add')
    addUser(@Body() body: any) {
      console.log(body);
    }

    @Get('/:id')
    getOneUser(@Param('id') id: string) {
      console.log(id);
    }
}

@Module({
  controllers: [UserController],
})
class UserModule {}

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3000);
}
bootstrap();
