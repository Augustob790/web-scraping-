class GetToken {
  private token: string;

  constructor() {
    const objectToken = localStorage.getItem('token');
    this.token = String(objectToken);
  }

  get(): string {
    return this.token;
  }
}

export default GetToken;
