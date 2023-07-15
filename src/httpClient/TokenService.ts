class TokenService {
    getLocalRefreshToken(): string | null {
      const token = JSON.parse(sessionStorage.getItem('token') || 'null');
      return token !== null && token !== undefined && token.refresh_token !== undefined ? token.refresh_token : null;
    }
  
    getLocalAccessToken(): string | null {
      const token = JSON.parse(sessionStorage.getItem('token') || 'null');
      return token !== null && token !== undefined && token.access_token !== undefined ? token.access_token : null;
    }
  
    updateLocalAccessToken(newToken: { access_token: string, refresh_token: string }): void {
      let token = JSON.parse(sessionStorage.getItem('token') || 'null');
      token.access_token = newToken.access_token;
      token.refresh_token = newToken.refresh_token;
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  
    getToken(): any {
      return JSON.parse(sessionStorage.getItem('token') || 'null');
    }
  
    setToken(token: any): void {
      sessionStorage.setItem('token', JSON.stringify(token));
    }
  
    removeToken(): void {
      sessionStorage.removeItem('token');
    }
  }
  
  export default new TokenService();
  