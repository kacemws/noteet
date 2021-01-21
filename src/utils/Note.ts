import { makeid } from "./random";

export class Note {
  id: string;
  color: string;
  note: string;
  date: Date;
  constructor(color: string, note: string) {
    this.id = makeid();
    this.color = color;
    this.note = note;
    this.date = new Date();
  }
}
