export default class User{
  id: number;
  token: String;
  firstname: String;
  lastname: String;
  address: String;
  email: String;
  password:String;
  role_id: number;
  role_name: String;
  idKorpe: number;

  constructor(){
    this.id = 0;
    this.token = "";
    this.firstname = "";
    this.lastname = "";
    this.address = "";
    this.email = "";
    this.password = "";
    this.role_name = "";

  }
}