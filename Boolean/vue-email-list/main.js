let app = new Vue({
  el: "#app",
  data: {
    emailList: [],
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          const email = resp.data.response;
          this.emailList.push(email);
        });
    }
  },
});
