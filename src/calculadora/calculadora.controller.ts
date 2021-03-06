import {Body, Controller, Get, Headers, HttpCode, Param, Post, Put, Query, Req, Res} from "@nestjs/common";

@Controller('calculadora')
export class CalculadoraController {
@Get('suma/')
@HttpCode(200)
suma(
    @Query()
parametrosQuery,
@Req()
request,
@Res({ passthrough: true })
response,

) {

    const resultado =
        parseInt(parametrosQuery.numeroUno) + parseInt(parametrosQuery.numeroDos);


    return resultado;

}


@Post('resta/')
@HttpCode(201)
resta(
    @Req()
request,
@Body()
bodyParametros,
@Res({passthrough: true})
response,
)
{
    const resultado = bodyParametros.numeroUno - bodyParametros.numeroDos;
    response.header('Resultado', resultado);
    return 'ok';
}

@Put('multiplicacion/:numeroUno/:numeroDos')
@HttpCode(200)
multiplicacion(
    @Param()
parametrosRuta,
@Res({passthrough: true})
response,
)
{
    console.log(parametrosRuta);

    //response.header('Resultado', parametrosRuta.numeroUno*parametrosRuta.numeroDos);
    //return 'Resultado'+parametrosRuta.numeroUno*parametrosRuta.numeroDos;
    const resultado =
        parseInt(parametrosRuta.numeroUno) * parseInt(parametrosRuta.numeroDos);
    return resultado;
}

@Get('division')


@HttpCode(201)
division(
    @Req()
request,
@Headers()
header,
@Res({passthrough: true})
response,
)
{
    console.log(header);

    const resultado = Number(header.numero1) / Number(header.numero2);

    return resultado;
}


@Get('setear-nombre/:nombre')
setearNombre(
    @Param()
parametrosRuta,
@Req()
request,
@Res({passthrough: true})
response
)
{
    response.cookie('nombreUsuario', parametrosRuta.nombre)
    return 'Cookie con nombre ' + parametrosRuta.nombre + ' seteada'
}
}