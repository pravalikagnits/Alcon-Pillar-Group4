import { Injectable } from "@angular/core";

@Injectable()
export class Tournament {

  public _id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public displayName!: string;
  public created!: Date;
  public update!: Date;
  constructor() { }
}
  