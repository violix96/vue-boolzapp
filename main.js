const { createApp } = Vue;
createApp({
    data(){
        return {
            newMessage: '', 
            autoResponse: 'Ok', 
            activeContact: null,
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 16:26',
                    visible: true,
                    messages: [
                        {
                            date: '16:26',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            fromMe: true,
                        },
                        {
                            date: '15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            fromMe: true,
                        },
                        {
                            date: '16:15',
                            message: 'Tutto fatto!',
                            status: 'received',
                            fromMe: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 16:30',
                    visible: true,
                    messages: [
                        {
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            fromMe: true
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            fromMe: true
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 10:10',
                    visible: true,
                    messages: [
                        {
                            date: '10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            fromMe: true
                        },
                        {
                            date: '16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 15:30',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            fromMe: true
                        },
                        {
                            date: '15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 15:30',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            fromMe: true
                        },
                        {
                            date: '15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 15:50',
                    visible: true,
                    messages: [
                        {
                            date: '15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            fromMe: true
                        },
                        {
                            date: '15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            fromMe: true
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 15:50',
                    visible: true,
                    messages: [
                        {
                            date: '15:50',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            fromMe: true
                        },
                        {
                            date: '15:50',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 15:50',
                    visible: true,
                    messages: [
                        {
                            date: '15:50',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            fromMe: true
                        },
                        {
                            date: '15:51',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    lastSeen: 'Ultimo accesso oggi alle 16:30',
                    visible: true,
                    messages: [
                        {
                            date: '16:30',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            fromMe: true
                        },
                        {
                            date: '16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            fromMe: true
                        }
                    ],
                },
            ]
        }
    },
    methods: {
        selectContact(contact) {
            this.activeContact = contact;
        },
        activeContactLastSeen() {
            if (this.activeContact) {
                return this.activeContact.lastSeen;
            }
        },
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                this.activeContact.messages.push({ message: this.newMessage, status: 'sent', fromMe: true});
                setTimeout(() => {
                    this.activeContact.messages.push({message: this.autoResponse, status: 'received', fromMe: false});
                }, 1000);
                this.newMessage = '';
            }
        }
    },
    mounted() {
        if (this.contacts.length > 0) {
            this.selectContact(this.contacts[0]);
        }
    }
}).mount("#app");
