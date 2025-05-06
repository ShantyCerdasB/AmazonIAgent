// ==UserScript==
// @name         Get Local API Message
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hace una petición GET a localhost y muestra el mensaje en consola
// @author       Tú
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    fetch('http://localhost:8000/api/message')
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta de la API:', data.message);
        })
        .catch(error => {
            console.error('Error obteniendo el mensaje:', error);
        });
})();
