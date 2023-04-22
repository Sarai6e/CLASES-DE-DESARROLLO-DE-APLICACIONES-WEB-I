// objeto date
(function(){

    var fecha = new Date ();
    document.write(fecha);
// console
    console.log(fecha.getHours()-12);
    console.log(fecha.getMinutes());
    console.log(fecha.getUTCSeconds());

     var semana  = ['Domingo' , 'Lunes' , 'Martes' , 'Miercoles' , 'Jueves', 'Viernes' , 'Sabado']

    console.log(fecha.getDay());
    console.log(fecha.getDate());
    console.log(fecha.getMonth());
    console.log(fecha.getFullYear());
    
    

    }())

