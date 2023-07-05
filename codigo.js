

let carrito = 0;
function sumacarrito(precioProducto){
   carrito = carrito + precioProducto;
}

let iva = 0;
function PrecioIva(totaliva){
  iva = totaliva * 0.21;
}


let total = 0;
function precioTotal(precioFinal){
   total = carrito + iva;
}

let producto = prompt('1- Taza ...  $3500\n2- Remera Negra Game of Thrones... $7000$\n3- Libro 1 ... $6200\n4- Libro 2 ... $6200\n0- Para finalizar');

while(producto != '0'){
   switch(producto){
      case '1':
         alert('agregaste  taza Game of Trhones al carrito...$3500');
         sumacarrito(3500)
         break
      case '2':
         alert('agregaste Remera negra Game of Thrones al carrito ... $7000');
         sumacarrito(7000)
         break
      case '3':
         alert('agregaste Libro 1 al carrito ... $6200');
         sumacarrito(6200);
         break
      case '4':
         alert('agregaste Libro 1 al carrito ... $6200');
         sumacarrito(6200);
         break

      default:
         alert('Codigo erroneo , ingrese uno valido');
         break
   }
   producto = prompt('1- Taza ...  $3500\n2- Remera Negra ... $7000$\n3- Libro 1 ... $6200\n4- Libro 2 ... $6200\n0- Para finalizar');
}

PrecioIva(carrito)
precioTotal(carrito)
alert('Subtotal $ '+carrito);
alert('Impuesto $ ' +iva)
alert('Total $ ' + total)
