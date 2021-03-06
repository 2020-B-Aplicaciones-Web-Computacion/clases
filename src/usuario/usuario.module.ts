import {Module} from '@nestjs/common';
import {UsuarioController} from './usuario.controller';
import {UsuarioEntity} from "./usuario.entity";
import {UsuarioService} from "./usuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";
// @Decorador()
@Module({
    imports: [ // Modulos
        TypeOrmModule.forFeature(
         [UsuarioEntity],
           'default'
        )

    ],
    controllers: [ // Controladores
      UsuarioController
    ],
    providers: [ // Servicios DECLARADOS
        UsuarioService
    ],
    exports: [ // Servicios EXPORTADOS
        UsuarioService
    ],
})
export class UsuarioModule {

}