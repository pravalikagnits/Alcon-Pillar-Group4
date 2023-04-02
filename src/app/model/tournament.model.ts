import { Injectable } from "@angular/core";

@Injectable()
export class Tournament {

  public _id!: number;
  public title!: string;
  public owner!: string;
  public sportType!: string;
  public location!: string;
  public teamCount!: number;
  constructor() { }
}
  