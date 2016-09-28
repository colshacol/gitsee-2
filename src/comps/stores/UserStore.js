import { observable } from 'mobx'

class UserStore {
  @observable loggedIn = false
  @observable user = {
    id: 0,
    name: '',
    username: '',
    email: ''
  }
}

const userStore = new UserStore

export default userStore
