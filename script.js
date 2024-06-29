function invertirReordenamiento() {
    const cadenaReordenada = prompt("Introduce la cadena reordenada:");
    const cortes = prompt("Introduce el n�mero de cortes usados originalmente:");

    // Convertimos la cadena reordenada a un array de n�meros
    let numeros = cadenaReordenada.split(',').map(numero => numero.trim());

    // Verificamos que el n�mero de cortes tenga al menos 2 d�gitos
    if (cortes.length < 2) {
        alert("El n�mero de cortes debe tener al menos 2 d�gitos.");
        return;
    }

    let nuevaCadena = [...numeros]; // Inicializamos la nueva cadena con la cadena reordenada

    // Iteramos hacia atr�s, desde el final hasta el inicio de la cadena de cortes
    for (let i = cortes.length - 2; i >= 0; i -= 2) {
        // Extraemos los d�gitos para los cortes en esta iteraci�n
        const corte1 = parseInt(cortes[i], 10);
        const corte2 = parseInt(cortes[i + 1], 10);

        // Verificamos si el primer n�mero de cada par es mayor
        if (corte1 > corte2) {
            // Salteamos este par y avanzamos al siguiente par
            continue;
        }

        // Realizamos los cortes de acuerdo a las especificaciones originales
        const medio = nuevaCadena.slice(0, corte2 - corte1);
        const inicio = nuevaCadena.slice(corte2 - corte1, corte2);
        const final = nuevaCadena.slice(corte2);

        // Creamos la nueva cadena con los elementos reordenados en el orden original
        nuevaCadena = inicio.concat(medio, final);
    }

    // Mostramos el resultado en la p�gina
    const resultado = `Cadena original: ${nuevaCadena.join(', ')}`;
    document.getElementById('resultado').innerText = resultado;
}

// Llamamos a la funci�n para que se ejecute cuando se carga la p�gina
invertirReordenamiento();
