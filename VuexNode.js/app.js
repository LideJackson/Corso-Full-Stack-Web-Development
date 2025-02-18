// richiamo app di vue.js
const app = Vue.createApp({

    //recupero i dati
    data(){
        return{
            // creao una array e la scorro con v-for
            books:[

                { titolo:"Promessi Sposi", autore:"Manzoni",
                    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/I_promessi_sposi-008.jpg/229px-I_promessi_sposi-008.jpg"
                },
                { titolo:"Decameron", autore:"Boccaccio",
                    img:"https://italianostoriablogsite.wordpress.com/wp-content/uploads/2017/06/waterhouse_decameron.jpg?w=685"
                },
                { titolo:"Divina Commedia", autore:"Dante",
                    img:"https://cdn.studenti.stbm.it/images/2021/11/23/struttura-della-divina-commedia_600x400.jpeg"
                },
                
            ],
            /*
            titolo:"Promessi sposi",
            autore:"Manzoni"
            
            */
            numerolettori: 8,
            showBook: true,
            x: 0 ,
            y: 0 
        }
    },
    // cambio un valore
    methods:{
        CambiaTitolo(){

            //this.variabile lo uso per cambiare valore
            this.titolo='Lesgosky'
        },

        ToggleShowBook(){
            // dico di fare il contrario di quello che è showBook 
            // se è vero diventa falso oppure se è false diventa vero
            this.showBook =! this.showBook
        },

        handleEvent(){
            console.log('Ciao');
        },

        handleEventmove(e){
            //posizione del mouse use e per avere una c che mi mantiene i dati
            this.x=e.offsetX;
            this.y=e.offsetY;

        }
        
    },



})

app.mount('#app')