const app = Vue.createApp({
  data() {
    return {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@gmail.com',
      gender: 'female',
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

     // console.log(results)

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
    },
  },
})

app.mount('#app')