/* eslint-disable prettier/prettier */

import { Controller, Get, Post } from '@nestjs/common';

@Controller('/users')
export class UserController {
  
    @Get('/all')
    getAllUser() {
        return 'world'
    }

    @Post('/add')
    addUser(){
        return {
            'a':'no'
        }
    }
}
