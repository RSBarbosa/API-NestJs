import { Body, Controller, Get, Param, Patch, Post, Put, Delete } from "@nestjs/common";

@Controller('users')
export class UserController{

  @Post( )
  async create(@Body( ) body) {
    return {body}
  }

  @Get( )
  async read( ){
    return{users:[]}
  }

  @Get(':id')
  async readonly(@Param( ) params){
    return{user:{ }, params}
  }

  @Put( ':id')
    async update (@Body( ) body, @Param( ) params ) {
      return{
        method: 'put',
        body,
        params
      }      
    } 

    @Patch(':id')
    async upadatePartial (@Body( ) body, @Param( ) params){
      return{
        method: 'patch',
        body,
        params
      } 
    }

      @Delete(':id')
      async delete (@Param( )  params ){
        return{
          params

        
      }
    }
    

}
