import { Injectable } from "@angular/core";

@Injectable()
export class User
{
  _id!: number;
  username!: string;
  password!: string;
  email!: string;
  displayName!: string;
  constructor() { }
}
  