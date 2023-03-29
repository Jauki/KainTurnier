import axios from 'axios';

const API_URL = process.env.API_URL;

export class AuthService {

  public static async login(username: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      this.setAccessToken(response.data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }


  public static setAccessToken(access_token: string): void {
    localStorage.setItem('ACCESS_TOKEN',access_token);
  }

  public  static getAccessToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }
}
