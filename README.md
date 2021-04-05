# ac_geek-final_back

## Objetivo:

Desarrollar un sistema que permita la simulación de la venta de artículos, la generación de un pequeño informe y el almacenamiento en base de datos, empleando Javascript, AJAX, HTML5, CSS3 (Se recomienda implementar ReactJS para el frontend y ExpresJS para el backend), objetos JSON y una base de datos SQL (MySQL O PostgreSQL).

El sistema debe ofrecer `una página de inicio que indica el nombre del desarrollador del proyecto` y le ofrece al usuario dos opciones:

### `Realizar compra:`

Dirige al usuario a una página que permite el ingreso de una nueva compra.


### `Total compras:`

Es una página web que muestra una cuadricula con el numero de orden, el subtotal, total del IVA y el total de todas las compras realizadas que se encuentran almacenadas en la base de datos, la parte visual se realiza con Javascript y para la extracción de datos se debe generar un JSON mediante NodeJS que envíe al frontend los datos necesarios para este informe.