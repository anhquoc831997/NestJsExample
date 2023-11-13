import { Controller, Get, Post } from '@nestjs/common';

@Controller(`users`)
export class UserController {
  @Get()
  getAllUser() {
    return [
      {
        name: 'quoc',
        age: 10,
      },
      {
        name: 'anh',
        age: 11,
      },
    ];
  }
  @Post()
  createUser() {
    return {
      name: 'quoc',
      age: 27,
    };
  }
}
