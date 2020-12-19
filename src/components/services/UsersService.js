export default class UsersService {
    url = 'https://jsonplaceholder.typicode.com/users'

    async getUsersFromAPI() {
        return await fetch(this.url).then(value => value.json())
    }

    async getChosenUserFromAPI(id) {
        return await fetch(this.url + `/${id}`).then(value => value.json())
    }
}