function signUp() {
  event.preventDefault(); // Evita que la página se recargue después de enviar el formulario

  const email = document.getElementById('email').value; // Obtiene el valor del campo de correo electrónico del formulario
  const username = document.getElementById('username').value; // Obtiene el valor del campo de nombre de usuario del formulario
  const pass = document.getElementById('pass').value; // Obtiene el valor del campo de contraseña del formulario

  var user = { // Crea un objeto de usuario con los valores del formulario
    email: email,
    username: username,
    pass: pass,
  };

  // Obtener los registros almacenados previamente del almacenamiento local
  var registros = JSON.parse(localStorage.getItem('registros')) || [];

  // Verifica si el correo electrónico ya está registrado en el almacenamiento local
  var emailRegistrado = registros.some(function (registro) {
    return registro.email === user.email;
  });

  // Si el correo electrónico ya está registrado, muestra una alerta y sale de la función
  if (emailRegistrado) {
    alert('El email ya está registrado.');
    return;
  }

  // Si el campo de nombre de usuario o contraseña está vacío, muestra una alerta y sale de la función
  if (user.username === '' || user.pass === '') {
    alert('No has llenado el campo de contrasenia o nombre de usuario');
    return;
  }

  // Agrega el nuevo objeto de usuario al array de registros
  registros.push(user);

  // Guarda el nuevo array de registros en el almacenamiento local
  localStorage.setItem('registros', JSON.stringify(registros));
}

function signIn() {
  event.preventDefault(); // Evita que la página se recargue después de enviar el formulario

  var userLogin = document.getElementById('emailLogin').value; // Obtiene el valor del campo de correo electrónico del formulario de inicio de sesión
  var passLogin = document.getElementById('passLogin').value; // Obtiene el valor del campo de contraseña del formulario de inicio de sesión

  var obj = localStorage.getItem("registros"); // Obtiene los registros del almacenamiento local y los almacena en una variable
  var json = JSON.parse(obj); // Convierte los registros de JSON a un objeto de JavaScript

  let objSeen = null; // Inicializa una variable que se usará para almacenar el objeto de usuario que coincide con el correo electrónico proporcionado

  // Busca en el array de registros el objeto de usuario que coincide con el correo electrónico proporcionado
  json.forEach(e => {
    if (e.email === userLogin) {
      objSeen = e;
    }
    return objSeen;
  });

  // Si el correo electrónico no coincide con ningún objeto de usuario almacenado, muestra una alerta y sale de la función
  if (objSeen === null) {
    alert('no estas registrado ');
    return;
  }

  // Si la contraseña coincide con la contraseña almacenada para el correo electrónico proporcionado, muestra un mensaje de confirmación
  if (passLogin === objSeen.pass) {
    location.replace('web.html');
  } else { // Si la contraseña no coincide, muestra una alerta
    alert('clave o correo equivocado ')
  }
}