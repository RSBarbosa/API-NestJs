import { Body, Controller, Get, Param, Patch, Post, Put, Delete, ParseIntPipe, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePathUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";

// @UseInterceptors(LogInterceptor )
@Controller('users')
export class UserController{

  constructor (private readonly userService: UserService){ }

 
  @Post( )
  async create(@Body( ) data: CreateUserDTO) {
    return this.userService.create(data)
  }

  @Get( )
  async list( ){
    return this.userService.list( )
  }

  @Get(':id')
  async readonly(@Param('id', ParseIntPipe) id: number){
    return this.userService.show(id );
  }

  @Put( ':id')
    async update (@Body( ) data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number ) {
      return this.userService.updatePartil(id, data)
    } 

    @Patch(':id')
    async upadatePartial (@Body( ) data: UpdatePathUserDTO, @Param('id', ParseIntPipe) id: number) {
      return this.userService.updatePartil(id, data)
    }

      @Delete(':id')
      async delete (@Param('id', ParseIntPipe)  id: number) {
        return this.userService.delete(id);
    }
    

}

