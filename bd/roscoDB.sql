
create database roscoDB;
use roscoDB;

create table Usuario(
ci int not null, 
nombre varchar (30) not null,
apellido varchar (30) not null,
nickname varchar(30) not null,
pin int not null,
primary key (ci)
);

create table MailUser(
ci int not null, 
mail int not null,
primary key (ci, mail),
foreign key(ci) references Usuario (ci)
);

create table Administrador(
ci int not null,
primary key(ci) 
);

create table Jugador(
ci int not null,
nickname varchar(30) not null,
primary key(ci)
);

create table Categoria(
nombreCat varchar(30) not null,
primary key(nombreCat)
);


create table Palabra(
codigoPal int not null,
codigoEnJuego int not null,
letra char  CHARSET utf8 COLLATE utf8_spanish_ci ,
definicion varchar (100) not null,
palabra varchar(15)not null,
empieza boolean not null,
estaEnUso boolean not null,
nombreCat varchar(30) not null,
primary key(codigoPal)
);


create table Partida(
codigoPart int not null,
nickname varchar(30) not null,
finalizada boolean not null,
primary key(codigoPart)
);

create table Contiene(
codigoPart int not null,
codigoPal int not null,
primary key(codigoPart, codigoPal),
foreign key(codigoPart) references Partida(codigoPart),
foreign key(codigoPal) references Palabra(codigoPal)
);


create table Modifica(
codigoPart int  not null,
codigoPal int  not null, 
ci int  not null,
fecha datetime,
primary key(ci),
foreign key(ci) references Usuario(ci),
foreign key(codigoPart) references Partida(codigoPart),
foreign key(codigoPal) references Palabra(codigoPal)
);

create table Juega(
ci int not null,
codigoPar int not null,
puntaje int not null,
primary key(ci),
foreign key(ci) references Usuario(ci),
foreign key(codigoPar) references Partida(codigoPart)
);

insert into Palabra values(1,0, 'A', 'lugar en memoria en donde se guarda la informacion','almacenamiento', true,false, 'tecnicas');
insert into Palabra values(2,1, 'B', 'rango de direcciones ip logicas de una misma red','subredes',false,false, 'tecnicas');
insert into Palabra values(3,2, 'C', 'interfaz en blanco y negro que se usa para ver informacion','consola',true,false, 'tecnicas');
insert into Palabra values(4,3, 'D', 'sistema operativo basado en linux','debian',true,false, 'tecnicas' );
insert into Palabra values(5,4, 'E', 'cable que usamos para conectar el router a la computadora','ethernet',true,false, 'tecnicas' );
insert into Palabra values(6,5, 'F', 'sistema que prevé ataques de red en nuestro equipo ','firewall',true,false, 'tecnicas' );
insert into Palabra values(7,6, 'G', 'parte...de una computadora','logica',false,false, 'tecnicas' );
insert into Palabra values(8,7, 'H', 'partes fisicas de una computador','hardware',true,false, 'tecnicas' );
insert into Palabra values(9,8, 'I', 'siglas de internet de las cosas','iot',true,false, 'tecnicas' );
insert into Palabra values(10,9, 'J', 'hay que... comandos en las terminales','ejecutar',false,false, 'tecnicas' );
insert into Palabra values(11,10, 'L', 'comando para ver el contenido de la carpeta en el que estamos parados','ls',true,false, 'tecnicas' );
insert into Palabra values(12,11, 'M', 'distribucion de linux que es conocido por ser elegante y moderno','mint',true,false, 'tecnicas' );
insert into Palabra values(13,12, 'N', 'sistema operativo que se puede usar como base para crear otros sistemas operativos','linux',false,false, 'tecnicas' );
insert into Palabra values(14,13, 'Ñ', 'la memoria l1 del cache es la mas... de todas','pequeña ',false,false, 'tecnicas' );
insert into Palabra values(15,14, 'O', 'modelo de capa...es el modelo de referencia de las capas de red','osi',true,false, 'tecnicas' );
insert into Palabra values(16,15, 'P', 'es la unidad central de procesamiento de datos','procesador',true,false, 'tecnicas' );
insert into Palabra values(17,16, 'Q', '... de red, es lo que se manda por las redes','paquete',false,false, 'tecnicas' );
insert into Palabra values(18,17, 'R', 'comando para crear carpetas en linux/macOS','mkdir',false,false, 'tecnicas' );
insert into Palabra values(19,18, 'S', '...usuario, el administrador del sistema en bash','super',true,false, 'tecnicas' );
insert into Palabra values(20,19, 'T', 'capa de..., es el 4to nivel del modelo OSI','transporte',true,false, 'tecnicas' );
insert into Palabra values(21,20, 'U', '...de programacion','lenguaje',false,false, 'tecnicas' );
insert into Palabra values(22,21,'V', 'programa que se usa para hacer maquinas virtuales','virtualBox',true,false, 'tecnicas' );
insert into Palabra values(23,22, 'X', 'tipo de circuito logico que sirve para combinar muchas entradas en una salida','multiplexor',false,false, 'tecnicas');
insert into Palabra values(24,23, 'Y', '8 bits componen un...','byte',false,false, 'tecnicas' );
insert into Palabra values(25,24, 'Z', '.. de usuario, es lo que ve el usuario y con lo que interactua','interfaz',false,false, 'tecnicas' );

insert into Palabra values(26,0, 'A', 'las etiquetas html tienen...','atributos',true,false, 'desarrollo' );
insert into Palabra values(27,1, 'B', 'biblioteca de css y js para la creacion rapida de paginas web','boostrap',true,false, 'desarrollo' );
insert into Palabra values(28,2, 'C', 'en javascript se usan muchas... esto permite reciclar codigo','funciones',false,false, 'desarrollo' );
insert into Palabra values(29,3, 'D', 'numero de entidades con la cual se puede asociar, uno a uno ...etc','cardinalidad',false,false, 'desarrollo' );
insert into Palabra values(30,4, 'E', 'ide que usamos para programar en java','eclipse',true,false, 'desarrollo' );
insert into Palabra values(31,5, 'F', 'instruccion de iteracion que se ejecuta un numero determinado de veces','for',true,false, 'desarrollo' );
insert into Palabra values(32,6, 'G', 'nombre tecnico de las cadenas de caracteres','string',false,false, 'desarrollo' );
insert into Palabra values(33,7, 'H', 'propiedad que nos sirve para ajustar la altura en css','height',true,false, 'desarrollo' );
insert into Palabra values(34,8, 'I', 'instruccion condicional que si pasa algo entra en ese bloque de codigo','if',true,false, 'desarrollo' );
insert into Palabra values(35,9, 'J', 'lenguaje de programacion que esta implementado nativamente en los navegadores','javascript',true,false, 'desarrollo' );
insert into Palabra values(36,10, 'L', 'las entidades tienen... entre si','relaciones',false,false, 'desarrollo' );
insert into Palabra values(37,11, 'M', 'representacion de la base de datos visual, este es el primer paso para diseñar una base de datos','mer',true,false, 'desarrollo' );
insert into Palabra values(38,12, 'N', 'objeto unico que se esta controlando en la base de datos','entidad',false,false, 'desarrollo' );
insert into Palabra values(39,13, 'Ñ', 'el ... de una pagina web es tan importante como su funcionamiento','diseño',false,false, 'desarrollo' );
insert into Palabra values(40,14, 'O', 'java es un lenguaje de programacion orientado a...','objetos',true,false, 'desarrollo' );
insert into Palabra values(41,15, 'P', 'siglas de interfaz de programacion de aplicaciones','api',false,false, 'desarrollo' );
insert into Palabra values(42,16, 'Q', 'en html los bloques de codigo son...','',false,false, 'desarrollo' );
insert into Palabra values(43,17, 'R', 'las... son las restricciones que no podemos representar en el mer','rne',true,false, 'desarrollo' );
insert into Palabra values(44,18, 'S', 'estructura de seleccion que compara un valor con varios casos','switch',true,false, 'desarrollo' );
insert into Palabra values(45,19, 'T', 'variable en javascript que nunca cambia su valor','const',false,false, 'desarrollo' );
insert into Palabra values(46,20, 'U', 'valor que nos devuelve javascript si algo no esta definido','undefined',true,false, 'desarrollo' );
insert into Palabra values(47,21, 'V', 'dato que se guarda en memoria y que se le asigna un nombre','variable',true,false, 'desarrollo' );
insert into Palabra values(48,22, 'X', 'propiedad que se usa en css para editar las disposiciones de las cajas','flex',false,false, 'desarrollo' );
insert into Palabra values(49,23, 'Y', 'sentencia de la funcion que sirve para hacer asincrono un bloque de codigo','async',false,false, 'desarrollo' );
insert into Palabra values(50,24, 'Z', 'proceso que se hace para normalizar una base de datos','normalizacion',false,false, 'desarrollo' );

insert into Palabra values(51,0, 'A', 'intensidad de la corriente','amperio',true,false, 'ciencias' );
insert into Palabra values(52,1, 'B', 'punto que divide a la recta en dos segmentos iguales  ','baricentro',true,false, 'ciencias' );
insert into Palabra values(53,2, 'C', 'resultado de la division de dos numeros','cociente',true,false, 'ciencias' );
insert into Palabra values(54,3, 'D', 'la... entre dos cosas puede variar si movemos el punto','distancia',true,false, 'ciencias' );
insert into Palabra values(55,4, 'E', 'linea que se extiende en una sola direccion','recta',false,false, 'ciencias' );
insert into Palabra values(56,5, 'F', 'lugar geometrico en la que todos sus puntos equidistan del centro ','circunferencia',false,false, 'ciencias' );
insert into Palabra values(57,6, 'G', 'conjunto de fenomenos fisicos mediados por un campo magnetico','magnetismo',false,false, 'ciencias' );
insert into Palabra values(58,7, 'H', 'formula que usamos cuando queremos determinar las raices de un polinomio segundo grado','bhaskara',false,false, 'ciencias' );
insert into Palabra values(59,8, 'I', 'triangulo que tiene al menos dos lados iguales','isosceles',true,false, 'ciencias' );
insert into Palabra values(60,9, 'J', 'unidad de medida de la fuerza de trabajo','joules',true,false, 'ciencias' );
insert into Palabra values(61,10, 'L', 'unidad de medida de la induccion magnetica','tesla',false,false, 'ciencias' );
insert into Palabra values(62,11, 'M', 'siglas de movimiento rectilineo uniforme','mru',true,false, 'ciencias' );
insert into Palabra values(63,12, 'N', 'las rectas estan... con el punto O','alineadas',false,false, 'ciencias' );
insert into Palabra values(64,13, 'Ñ', 'el... del triangulo no siempre modifica sus angulos','tamaño',false,false, 'ciencias' );
insert into Palabra values(65,14, 'O', 'numero en la division que es dividido por otro','dividendo',false,false, 'ciencias' );
insert into Palabra values(66,15, 'P', 'cantidad de trabajo efectuado por unidad de tiempo','potencia',true,false, 'ciencias' );
insert into Palabra values(67,16, 'Q', 'cuando decimos que dos rectas estan a la misma distancia decimos que...','equidistan',false,false, 'ciencias' );
insert into Palabra values(68,17, 'R', 'forma geometrica que tiene dos pares de lados iguales','rectangulo',true,false, 'ciencias' );
insert into Palabra values(69,18, 'S', 'rectas que estan a la misma distancia una de la otra','paralelas',false,false, 'ciencias' );
insert into Palabra values(70,19,'T', 'unidad que usamos para medir la potencia de algo electrico','watt',false,false, 'ciencias' );
insert into Palabra values(71,20, 'U', 'cantidad medible de un sistema fisico','magnitud',false,false, 'ciencias' );
insert into Palabra values(72,21, 'V', 'en fisica el... se representa como una flecha','vector',true,false, 'ciencias' );
insert into Palabra values(73,22, 'X', 'el... de una potencia indica el numero de veces que se multiplica la base','exponente',false,false, 'ciencias' );
insert into Palabra values(74,23, 'Y', 'las... de newton se siguen usando hoy en dia','leyes',false,false, 'ciencias' );
insert into Palabra values(75,24, 'Z', 'linea recta perpendicular a dicho segmento trazada por su punto medio','mediatriz',false,false, 'ciencias' );

insert into Palabra values(76,0,'A','tambien se le llaman a las personas que tienen trabajo','ocupados',false,false,'economia');
insert into Palabra values(77,1,'B','... inferior y superior son los limites en que pone el banco central al dolar','banda',true,false,'economia');
insert into Palabra values(78,2,'C','es el tipo de desempleo que esta ligado a los cambios de la economia','ciclico',true,false,'economia');
insert into Palabra values(79,3,'D','son las personas que como no consiguieron trabajo dejaron de buscarlo','desalentados',true,false,'economia');
insert into Palabra values(80,4,'E','es el tipo de desempleo que esta ligado a los cambios de la economia','estructural',true,false,'economia');
insert into Palabra values(81,5,'F','es el tipo de desempleo que se da cuando la economia de un pais esta en su mejor momento','friccional',true,false,'economia');
insert into Palabra values(82,6,'G','hay muchos tipos de..., estan los salarios, los alquileres, etc','ingresos',false,false,'economia');
insert into Palabra values(83,7,'H','adam... fue uno de los economistas mas importantes en el mundo','smith',false,false,'economia');
insert into Palabra values(84,8,'I','aumento generalizado y continuo de los precios','inflacion',true,false,'economia');
insert into Palabra values(85,9,'J','personas que cuando se retiran tienen un ingreso de transferencia corriente','jubilados',true,false,'economia');
insert into Palabra values(86,10,'L','termino formal para las personas que trabajan en negro','informales',false,false,'economia');
insert into Palabra values(87,11,'M','es la cantidad de bienes y servicios que se pueden adquirir','demanda',false,false,'economia');
insert into Palabra values(88,12,'N','sinonimo de devaluacion','depreciacion',false,false,'economia');
insert into Palabra values(89,13,'Ñ','la inflacion se mide cada...','año',false,false,'economia');
insert into Palabra values(90,14,'O','cantidad de bienes y servicios que los oferentes estan dispuestos a poner en venta','oferta',true,false,'economia');
insert into Palabra values(91,15,'P','personas que trabajan en condiciones de poca seguridad','precarios',true,false,'economia');
insert into Palabra values(92,16,'Q','el tipo de ingreso que se recibe al... un bien inmueble se llama alquiler','alquilar',false,false,'economia');
insert into Palabra values(93,17,'R','sinonimo de apreciacion','revaluacion',true,false,'economia');
insert into Palabra values(94,18,'S','uruguay tiene un regimen de flotacion...','sucia',true,false,'economia');
insert into Palabra values(95,19,'T','siglas de poblacion en edad de trabajar','pet',false,false,'economia');
insert into Palabra values(96,20,'U','siglas del organizmo que regula otros bancos','bcu',false,false,'economia');
insert into Palabra values(97,21,'V','sinonimo de la moneda extranjera','divisa',false,false,'economia');
insert into Palabra values(98,22,'X','persona que manda bienes o servicios al exterior','exportador',false,false,'economia');
insert into Palabra values(99,23,'Y','friedrich... fue un economista austriaco, ganador del premio nobel','hayek',false,false,'economia');
insert into Palabra values(100,24,'Z','es cuando hay pocos bienes en comparacion a las necesidades','escasez',false,false,'economia');



insert into Categoria values('ciencias');
insert into Categoria values('tecnicas');
insert into Categoria values('desarrollo');
insert into Categoria values('economia');



