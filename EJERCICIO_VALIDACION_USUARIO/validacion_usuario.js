const usersDatabase = [
  {
    username: "Bryan",
    password: "123",
  },
  {
    username: "Perla",
    password: "456",
  },
  {
    username: "Josefina",
    password: "789",
  },
];


const usersTimeline = [
  {
    username: "Bryan",
    timeline: "Me encata Javascript!",
  },
  {
    username: "Perla",
    timeline: "Bebeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeline: "A mi me gusta más el café que el té",
  }
];

const username = prompt("Cuál es tu usuario?");
const password = prompt("Cuál es tu contraseña?");


function mostrarMensaje(nombre){
    console.log('nombre',nombre)
    for( let  user  in usersTimeline  ){
        if( usersTimeline[user].username === nombre ){
             console.log(usersTimeline[user].timeline)
             alert(`${usersTimeline[user].timeline}`)
             
        }
    }
}

function validacion(username, password) {
  let usuarioValido = false;
  for (let user in usersDatabase) {
    if (
      usersDatabase[user].username === username &&
      usersDatabase[user].password === password
    ) {
      usuarioValido = true;
      mostrarMensaje(username);
      break;
    }
  }
  if (!usuarioValido) {
    alert("usuario o pass incorrecto");
  }
}
validacion(username, password) 
