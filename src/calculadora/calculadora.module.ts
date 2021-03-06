import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CalculadoraController} from './calculadora.controller';

@Module({
    imports: [ // Modulos



],
controllers: [ // Controladores
    CalculadoraController

],
    providers: [ // Servicios DECLARADOS


  ],
    exports: [ // Servicios EXPORTADOS

   ],
})

export class CalculadoraModule {

}