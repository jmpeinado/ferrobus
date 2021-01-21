App de login que contabiliza el tiempo transcurrido desde el último Login


REQUISITOS:

Instalar las dependencias (npm install)


USADO:
	
He usado express para simular la parte Backend
Html + css + js nativo para la parte Frontend (contenidos en la carpeta static)
He usado la libreria momentjs para tratar las fechas


FUNCIONAMIENTO:
	
Al hacer login se crea una cookie se sesion con el usuario, la fecha actual de login y fecha de último acceso (creada esta última con un random para darle algo de dinamismo a la app)
Si el Login es correcto se navega a la home donde se recuperan los datos de la cookie y se tratan las fechas de acceso para mostrar el tiempo transcurrido desde el último login
	Si se hace logout, se elimina la cookie y se vuelve a la pantalla de Login


Usuario de prueba:

user: jmpeinado
pass: 123456

