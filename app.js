new Vue({
  el: '#app',
  data() {
    return {
      nombre: '',
      pantalla: 'inicio',
      indice: 0,
      puntaje: 0,
      respuesta: null,
      preguntas: [
        {
          texto: '¿𝐐𝐮𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞 𝐞𝐬 𝐞𝐬𝐭𝐞 𝐝𝐞 𝐬𝐭𝐫𝐞𝐞𝐭 𝐟𝐢𝐠𝐡𝐭𝐞𝐫?',
          imagen: 'img/dhalslm.png',
          opciones: [
            { texto: 'dhalslm', valor: 2 },
            { texto: 'Guile', valor: 0 },
            { texto: 'Zangief', valor: 0 }
          ]
        },
        {
          texto: '¿𝐄𝐧 𝐪𝐮𝐞 𝐚ñ𝐨 𝐬𝐚𝐥𝐢𝐨 𝐠𝐚𝐥𝐚𝐠𝐚?',
          imagen: 'img/galaga.png',
          opciones: [
            { texto: '1991', valor: 0 },
            { texto: '1981', valor: 2 },
            { texto: '1986', valor: 0 }
          ]
        },
         {
          texto: '¿𝐐𝐮𝐢𝐞𝐧 𝐞𝐬 𝐞𝐬𝐭𝐞 𝐩𝐨𝐤𝐞𝐦𝐨𝐨𝐨𝐧?',
          imagen: 'img/lapras.jpg',
          opciones: [
            { texto: 'lapras', valor: 2 },
            { texto: 'gyarados', valor: 0 },
            { texto: 'Dragonair', valor: 0 }
          ]
        },
         {
          texto: 'Que juego es este',
          imagen: 'img/undertale.jpg',
          opciones: [
            { texto: 'Megalovania', valor: 2 },
            { texto: 'Undartale', valor: 0 },
            { texto: 'Sans', valor: 0 }
          ]
        },
         {
          texto: '¿𝐄𝐧 𝐪𝐮𝐞 𝐚ñ𝐨 𝐬𝐚𝐥𝐢𝐨 𝐥𝐚 𝐍𝐢𝐧𝐭𝐞𝐧𝐝𝐨 𝐍𝐄𝐒?',
          imagen: 'img/nintendo.png',
          opciones: [
            { texto: '1987', valor:0 },
            { texto: '1982', valor: 0 },
            { texto: '1983', valor: 2 }
          ]
        }
        
      ]
    }
  },
  methods: {
    empezarTest() {
      if (this.nombre === '') {
        alert('Escribe tu nombre');
        return;
      }
      this.pantalla = 'preguntas';
    },
    siguientePregunta() {
      if (this.respuesta === null) {
        alert('Selecciona una opción');
        return;
      }

      this.puntaje += this.respuesta;
      this.respuesta = null;

      if (this.indice < this.preguntas.length - 1) {
        this.indice++;
      } else {
        this.pantalla = 'resultado';
      }
    },
    reiniciar() {
      this.pantalla = 'inicio';
      this.indice = 0;
      this.puntaje = 0;
      this.nombre = '';
    }
  }
});
