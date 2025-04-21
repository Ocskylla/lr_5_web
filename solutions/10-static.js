export default class Time {
  // BEGIN
  static fromString(value) {
    return new Time(Number(value.split(':')[0]), Number(value.split(':')[1]));
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
