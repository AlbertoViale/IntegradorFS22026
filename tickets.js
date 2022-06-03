
const valorTicket=200;

function boton(){
  let descuento=0;

  const nombre=document.querySelector('#inombre').value;
  const apellido=document.querySelector('#iapellido').value;
  const correo=document.querySelector('#mail').value
  if(nombre!='' && apellido!='' && correo!=''){

    let ticketCant=document.getElementById('idInputCantidad').value;
    const selector=document.getElementById('inputState').value;
    //console.log(selector);
    if(selector=='Estudiante'){
       descuento=valorTicket*parseInt(ticketCant)* 0.80;
    }
    else if(selector=='Junior'){
      descuento=valorTicket*parseInt(ticketCant)* 0.15;

    }
    else
       descuento=valorTicket*parseInt(ticketCant)* 0.50;
  
    let suPago=parseInt(ticketCant)*valorTicket-descuento;
    document.getElementById('idtotal').innerHTML='Su pago es $:'+suPago;
  }
  else{
    document.getElementById('idtotal').innerHTML='Faltan algunos datos';
  }
}  
  function borrar(){
    document.querySelector('#iform').reset()
    document.getElementById('idtotal').innerHTML='Total a pagar: $';
  }
 


///console.log(ticketCant)
  //console.log(typeof(ticketCant));
  //console.log(suPago);
  //console.log(typeof(suPago));
  
 
