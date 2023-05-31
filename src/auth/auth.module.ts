import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [JwtModule.register({
    secret: `&fee8&hg34@dqw!hdgf,dsh&8&654kdh`
  }),
    UserModule,
    PrismaModule
],
  controllers: [AuthController]
  
})

export class AuthModule{
}