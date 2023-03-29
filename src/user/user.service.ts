import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePathUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";


@Injectable( )
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

    async create({email, name, password}: CreateUserDTO){

      return await this.prisma.user.create({
        data:{
          email,
          name,
          password
        },
      } );

  } 
    async list( ) {
       return this.prisma.user.findMany( );
    }

    async show (id: number) {
      return this.prisma.user.findUnique({
        where: {
          id
        },
      });
    }

    async update ( id: number, {email, name, password, birthAt}: UpdatePutUserDTO){

      await this.exists(id);

      return this.prisma.user.update({
        data: {email, name, password, birthAt: birthAt ? new Date(birthAt) : null},
        where:{
          id
        },
      });
    }

    async updatePartil (id: number, {email, name, password, birthAt}: UpdatePathUserDTO){

      await this.exists(id);

      const data: any = { }
      
      if(birthAt){
        data.birthAt = new Date(birthAt);
      }

      if(email){
        data.email = email;
      }

      if(name){
        data.name = name;
      }

      if(password){
        data.password = password;
      }

      return this.prisma.user.update({
        data,
        where:{
          id
        },
      });
     }

      async delete (id: number){
        
       await this.exists(id);

        return this. prisma.user.delete({
          where: {
            id
          }
          
        });
     
    }

    async exists(id: number){

      if(!(await this.show(id))){
        throw new NotFoundException(`O usuário ${id} não existe`)
      }

    }



}