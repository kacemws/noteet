export class Note {
  color: string;
  note: string;
  date: Date;
  constructor(color: string, note: string) {
    this.color = color;
    this.note = note;
    this.date = new Date();
  }
}
