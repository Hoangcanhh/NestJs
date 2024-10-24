import { Controller, Get, Req, Post, Header, Redirect, Query, Body, Put, Param, Delete } from '@nestjs/common';
import { Request } from 'express';

import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { DeleteAppDto} from './dto/delete-app.dto';

@Controller('app')
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Post()
  create(@Body() createAppDto: CreateAppDto) {
    return 'This action adds a new item';  
  }
  //decorator header method 
  //@Header('cache-control', 'none')
  //create(): string { return 'this action adds a new item'; }

  //   @Get('docs')
  //   @Redirect('http://nestjs.com', 302)
  //   getDocs(@Query('version') version ){
  //     if(version && version  === '5'){
  //       return{url: 'http://nestjs.com/v5/'}
  //   }
  // }
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all';
  // }
  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAppDto: UpdateAppDto) {
    return `This action updates a #${id}`;
  }

  @Delete(':id')
deleteApp(@Param('id') id: string, @Body() deleteAppDto: DeleteAppDto) {
  return `This action deletes item with id #${id}. Reason: ${deleteAppDto.reason || 'No reason provided'}`;
}
}
