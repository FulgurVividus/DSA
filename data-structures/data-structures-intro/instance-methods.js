"use strict";

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.lateComings = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.lateComings += 1;
    if (this.lateComings >= 3) {
      return `You are expelled!!!`;
    }

    return `${this.firstName} ${this.lastName} has been late ${
      this.lateComings
    } ${this.lateComings > 1 ? "times" : "time"}`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calcAverage() {
    if (this.scores.length === 0) return 0;

    let sum = this.scores.reduce((a, b) => a + b, 0);
    return sum / this.scores.length;
  }
}

let student1 = new Student("Mike", "Brown", 3);
