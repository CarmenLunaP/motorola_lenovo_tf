
![Motorola_Logo](./src/assets/logo_Motorola.png)


# Reto Motorola Hackathon 2023 - Talent Fest Laboratoria 



**Herramienta de consulta y comparación para asignación de equipos**

CONTEXTO:

Motorola existe para desarrollar los smartphones más funcionales del planeta, mejorando las vidas de millones de personas.

¿Qué hacemos?

Creamos la industria de las comunicaciones móviles: inventamos la mayoría de los protocolos y tecnologías que hacen posible comunicarse, incluido el primer teléfono celular, las primeras radios de dos vías y casi todo lo que hay entre medio.
Hoy por hoy, combinamos ese espíritu innovador con un renovado sentido de compromiso hacia los consumidores. Es por ello que nuestros teléfonos utilizan el Sistema Operativo Android, el más popular del mundo. Es también por ello que estamos dedicados a ofrecer equipos al alcance de todo el mundo, sin comprometer la calidad, la experiencia ni el estilo.
Durante los últimos 90 años, nuestros ingenieros han progresado gracias a las invenciones de la marca y a las nuevas maneras de resolver problemas que fueron descubriendo. Y hoy, a través de la magia de la movilidad, continuamos buscando nuevas oportunidades para cambiar la vida de las personas.


La mejora continua de nuestro servicio es fundamental

Tenemos un equipo de servicio / soporte que se encarga de atender cualquier caso reportado por un cliente luego de adquirir su teléfono. Este servicio puede ser asistencia básica, reparación o inclusive cambio por garantía si así se llegara a determinar. Esto último, ocurre cuando no es posible reparar el equipo.  
Este cambio se hace por un equipo igual o de características iguales (o mejores) siempre dependiendo del inventario disponible. Encontrar el equipo adecuado muchas veces puede demorarse y por ende impacta en la experiencia del usuario. 

Lo que nos ayudaría mejorar los cambios por garantía

Hemos identificado la necesidad de tener una herramienta interna local que le permita al taller ver qué equipos hay en inventario para cambio por garantía, y en caso que no haya el mismo equipo, ver cuales tienen características iguales o en su defecto que sea apto para un upgrade. Hay unas características clave en la comparación de los equipos a tener en cuenta como:
* Precio sugerido al público
* Cantidad de SIM cards que soporta (1 o 2)
* Memoria RAM
* Memoria ROM
* Cantidad de lentes
* Capacidad de la batería
* Resolución del lente principal
* Resolución de cámara frontal
* Cantidad de núcleos del procesador
* Velocidad máxima del procesador

Esta sería una herramienta de consulta que utilizarían los técnicos del taller para encontrar/identificar más rápidamente la disponibilidad de equipos y así cumplir de la mejor manera con los cambios por garantía. 
Sería de gran ayuda que la herramienta haga una recomendación según características e inventario.
Así mismo, que permita generar comparaciones entre equipos.

Hoy en día existe una fuente pero que es global por tanto muchas veces la información no está alineada a las características reales con las que llegan los equipos a Colombia, además de tener una interfaz con oportunidades de ser más sencilla e intuitiva de usar. Por ello, tener una herramienta o fuente “propia” ayudaría mucho para tener información real y que se pueda controlar localmente. 

Requerimientos No Funcionales:

Web Responsive: La aplicación no tiene que ser 100% responsive, pero sí debería de asegurarse de que el texto sea legible, que el layout sea estable y no haya imágenes o textos fuera de los márgenes, que el contenido tenga un orden correcto y que en general la aplicación tenga un aspecto agradable y ordenado en al menos 2 tamaños de pantalla. (desktop y Tablet o desktop y móvil). Si esto se logra, sería un plus para el gerente de tienda. 

Diseño: 

Entendemos que como frontend developers no necesariamente se está familiarizado con el diseño de interfaces así que pueden emplear cualquier librería de UI y proponer libremente el diseño de la plataforma. Lo importante es seguir la guía de estilo de Motorola (adjuntamos paleta de colores y logotipos). 

Requerimientos Funcionales:

* HU1: Como técnico del área de servicio, puedo acceder a una plataforma web que me permite consultar el inventario de equipos para saber cuáles están disponibles.
* HU2: Como técnico de servicio, puedo comparar en la plataforma varias referencias entre sí para saber cuáles equipos tienen características similares o superiores.
* HU3: Como técnico de servicio, puedo obtenaer una recomendación de la plataforma sobre el equipo que debería elegir según las características que le indique que son las más importantes.  

Criterios de Aceptación 

Cada referencia de equipo debe mostrar mínimo una foto y las características definidas
La plataforma debe permitir solo hacer consultas, no editar nada del inventario
Debe permitir consulta por nombre comercial o código del equipo.
Debe haber una opción para reiniciar una consulta o comparación, y poder quitar equipos de la comparación
El filtrado de la información se tiene que hacer en el frontend
El filtrado se realiza luego que se ha digitado 5 caracteres
Al digitarse cualquier carácter se habilita el botón para iniciar la búsqueda

Recursos: 

La información de los equipos y sus características se encuentra en este Excel: 
El contenido es una muestra de aprox 20 equipos para probar la funcionalidad
La base tiene ejemplos de equipos con stock y sin stock

Nice to have:
Generar resumen para usuario según selección de upgrade
Entregables: 
Una vez desarrollada la solución, esperamos como entregables:
El repositorio del proyecto: Código versionado en gitlab/github
Un link al despliegue del proyecto
Todo lo que permita evolucionarlo posteriormente


# Equipo de Trabajo:

Frontend Developer:
* Isabel Roman. 
* Fabiana Hasu.
* Yohana Becerra.
* Carmen Luna.

UX/UI:
* Constanza Murcia.
* Geraldin Galvis.