var mis_tareas = []; //creo mi array

//funcion para añadir tarea cuando pulsas el boton
function anadir() {
	//control de errores
	if (document.getElementById("caja1").value == ""){
		alert("Insertar una tarea valida");
	} else {
		//creamos un elemento <li>
		var pacman = document.createElement("li");
		//creamos un elemento input
		var fantasma = document.createElement("input")
		//al elemento input, le ponemos de tipo checkbox
		fantasma.setAttribute("type", "checkbox");
		//le ponemos una clase al <input type="checkbox">
		fantasma.className= "chk";
		//cogemos el valor de caja1 y lo hacemos nodo
		var tarea = document.createTextNode(document.getElementById("caja1").value);
		//metemos en el <li> el valor que habiamos cogido de caja1. Esto es "pacman = <li>caja1</li>"
		//appendChild se utiliza con los nodos.
		pacman.appendChild(tarea);

		//añadimos la tarea de la caja al array
		mis_tareas.push(document.getElementById("caja1").value);
		//borramos el contenido de la caja
		document.getElementById("caja1").value = "";

		/*//cogemos el elemento <ul> en la variable llamada lista
		var lista = document.getElementById("lista");
		//añadimos el checkbox a la lista
		lista.appendChild(fantasma);
		//añadimos el valor de pacman a la lista
		lista.appendChild(pacman);*/
	    
		//Recojemos en una variable el primer elemento de la lista
		var lis = document.getElementById('lista').getElementsByTagName('li')[0];
		//Insertamos en la primera posicion de la lista nuetro nueva tarea
		document.getElementById('lista').insertBefore(pacman,lis);
		document.getElementById('lista').insertBefore(fantasma,lis);
	}
}

//funcion para añadir tarea cuando pulsas intro
function trece() {
	//si la tecla pulsada es "Intro" entramos al if
	if (event.which == 13){
		//control de errores
		if (document.getElementById("caja1").value == ""){
			alert("Insertar una tarea valida");
		} else {
			//creamos un elemento <li>
			var pacman = document.createElement("li");
			//creamos un elemento input
			var fantasma = document.createElement("input")
			//al elemento input, le ponemos de tipo checkbox
			fantasma.setAttribute("type", "checkbox");
			//le ponemos una clase al <input type="checkbox">
			fantasma.className= "chk";
			//cogemos el valor de caja1 y lo hacemos nodo
			var tarea = document.createTextNode(document.getElementById("caja1").value);
			//metemos en el <li> el valor que habiamos cogido de caja1. Esto es "pacman = <li>caja1</li>"
			//appendChild se utiliza con los nodos.
			pacman.appendChild(tarea);

			//añadimos la tarea de la caja al array
			mis_tareas.push(document.getElementById("caja1").value);
			//borramos el contenido de la caja
			document.getElementById("caja1").value = "";
		    
			//Recojemos en una variable el primer elemento de la lista
			var lis = document.getElementById('lista').getElementsByTagName('li')[0];
			//Insertamos en la primera posicion de la lista nuestro nueva tarea
			document.getElementById('lista').insertBefore(pacman,lis);
			//Insertamos en la primera posicion de la lista nuestro nuevo textbox
			document.getElementById('lista').insertBefore(fantasma,lis);
		}
	}
}

//funcion para borrar toda la lista
function borrar() {
	//recogemos los elementos del ul que sean <li> en un array
	var lista = document.getElementsByTagName("li");
	//recogemos los elementos del ul que tengan la clase <chk>, es decir, los checkbox en un array
	var chk = document.getElementsByClassName("chk");
	//recorremos uno de los arrays del ultimo elemento al primero
	//solo recorremos uno de los dos arrays pues ambos tienen la misma longitud
	for (var i = lista.length - 1; i>=0; i--){
		//borramos ambos arrays para limpiar la lista entera
		lista[i].remove();
		chk[i].remove();
	}
}

//funcion para borrar uno o varios elementos de la lista
function borrartarea(){
	//recogemos los elementos del ul que sean <li> en un array
	var lista = document.getElementsByTagName("li");
	//recogemos los elementos del ul que tengan la clase <chk>, es decir, los checkbox en un array
	var chk = document.getElementsByClassName("chk");
	//recorremos uno de los arrays del ultimo elemento al primero
	//solo recorremos uno de los dos arrays pues ambos tienen la misma longitud
	for (var i = lista.length - 1; i>=0; i--){
		//si el elemento checkbox en el que estamos de array esta chequeado borramos esos elementos.
		if (chk[i].checked == true){
			lista[i].remove();
			chk[i].remove();
		}
	}
}

/*function inet() {
  //obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }
 
  // Preparar la funcion de respuesta
  peticion_http.onreadystatechange = muestraContenido;
 
  // Realizar peticion HTTP
  peticion_http.open('GET', 'http://www.ironhack.com:3000/resources/todosample.json', true);
  peticion_http.send(null);
 
  function muestraContenido() {
    if(peticion_http.readyState == 4) {
      if(peticion_http.status == 200) {
        alert(peticion_http.responseText);
      }
    }
  }
}*/