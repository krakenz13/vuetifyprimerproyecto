export default interface AuthState {
  status: {
    loggedIn: boolean
  }
  user: {
    accessToken: string
  }
}
