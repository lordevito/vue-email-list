`use strict`;

const { createApp } = Vue;

  createApp({
    data() {
      return {
            emailList: [],
      };
    },
    methods: {},
    mounted: function(){
        for(let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result)=> {
                this.email = result.data.response;
                this.emailList.push(this.email);
            });
        };
    },
  }).mount('#app');