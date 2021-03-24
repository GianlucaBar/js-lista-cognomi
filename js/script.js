var cognomeUtente = prompt("dimmi il tuo cognome");

var listaUtenti = ["Mazzini", "Rossi", "Bianchi", "Bianchini", "Brambilla", "Esposito", "Fumagalli"];


listaUtenti.push(cognomeUtente);

listaUtenti.sort();

var posizione = -1;

// con for 

  for ( var i=0; i < listaUtenti.length; i++){
     var thisElement = listaUtenti[i];
      if( thisElement == cognomeUtente ){
          posizione = i + 1;
      }
      document.getElementById('listaCognomi').innerHTML += '<li>' + thisElement + '</li>';
  }

// con while 

//  var i = 0;

//  while( i < listaUtenti.length ){

//     var thisElement = listaUtenti[i]; 

//      if ( thisElement == cognomeUtente ){

//          posizione = i + 1;
//          i = listaUtenti.length;
//      }

//     document.getElementById('listaCognomi').innerHTML += '<li>' + thisElement + '</li>'; 
//     i++;
//  }

document.getElementById('posizione-in-lista').innerHTML = 'Ti trovi alla posizione ' + posizione + ' in lista';

console.log(listaUtenti);

console.log(posizione);

