/*/ En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente, 
    3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F 
    - M). 
    Considerando que los datos de los profesores se cargan en un array de objetos (Ej. 
    estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que 
    retorne el porcentaje de profesores de un sexo y una categoría dada. /*/
    let profesores = [
        {categoria: 1, nombre: 'Ana', sexo: 'F'},
        {categoria: 2, nombre: 'Juan', sexo: 'M'},
        {categoria: 3, nombre: 'Pedro', sexo: 'M'},
        {categoria: 4, nombre: 'Maria', sexo: 'F'},
        {categoria: 5, nombre: 'Luis', sexo: 'M'},
    ];
    let profesorescategoria =(profesores,sexo, categoria) => {
        let porcentaje = 0;
        let total = 0;
        for (let i = 0; i < profesores.length; i++) {
            if (profesores[i].sexo == sexo && profesores[i].categoria == categoria) {
                total += 1;
            }
        }
        porcentaje = (total / profesores.length) * 100;
        return porcentaje.toFixed(2);

    }
    let salida = document.getElementById('salida');
    salida.innerHTML = "El porcentaje de profesores de sexo M y categoria 5 es:" + JSON.stringify(profesorescategoria(profesores, 'M', 5))+ "%" +"<br>";
    salida.innerHTML += "El porcentaje de profesores de sexo F y categoria 1 es:" + JSON.stringify(profesorescategoria(profesores, 'F', 1))+ "%"+ "<br>";
    salida.innerHTML += "El porcentaje de profesores de sexo M y categoria 3 es:" + JSON.stringify(profesorescategoria(profesores, 'M', 3))+ "%"+ "<br>";
    salida.innerHTML += "El porcentaje de profesores de sexo F y categoria 4 es:" + JSON.stringify(profesorescategoria(profesores, 'F', 4))+ "%"+ "<br>";
        
