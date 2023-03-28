import { Body, Controller, Get, Param, Patch, Post, Put, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePathUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";

@Controller('users')
export class UserController{

  @Post( )
  async create(@Body( ) {name, email, password}: CreateUserDTO) {
    return {name, email, password}
  }

  @Get( )
  async read( ){
    return{users:[]}
  }

  @Get(':id')
  async readonly(@Param('id', ParseIntPipe) id: number){
    return{user:{ }, id}
  }

  @Put( ':id')
    async update (@Body( ) {name, email, password}: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number ) {
      return{
        method: 'put',
        name, email, password,
        id
      }      
    } 

    @Patch(':id')
    async upadatePartial (@Body( ) {name, email, password}: UpdatePathUserDTO, @Param('id', ParseIntPipe) id: number) {
      return{
        method: 'patch',
        name, email, password,
        id,
      } 
    }

      @Delete(':id')
      async delete (@Param('id', ParseIntPipe)  id: number) {
        return{
          id

        
      }
    }
    

}

