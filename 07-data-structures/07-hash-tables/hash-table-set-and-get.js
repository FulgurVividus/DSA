"use strict";

// 2ND FILE

//? set
// Accepts a key and a value
// Hashes the key
// Stores the key-value pair in the hash table array via separate chaining

//? get
// Accepts a key
// Hashes the key
// Retrieves the key-value pair in the hash table
// If the key isn't found, returns undefined

//? keys
// Loops through the hash table array and returns an array of keys in the table

//? values
// Loops through the hash table array and returns an array of values in the table

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  //#
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  //#
  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // if not empty, just push to existing array
    this.keyMap[index].push([key, value]);

    return index;
  }

  //#
  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  //#
  values() {
    let valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }

    return new Set(valuesArr);
  }

  //#
  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }

    return new Set(keysArr);
  }
}

const ht = new HashTable(17);

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD"); // duplicate
ht.set("purple", "#DDA0DD"); // duplicate
ht.set("gray", "#DDA0DD"); // duplicate

ht.get("plum"); // DDA0DD is returned

ht.values(); // will return only unique values
// ["DDA0DD", "FA8072", "800000", "FFFF00", "808000", "F08080", "C71585"]

ht.keys(); // will return only unique keys
// ["plum", "salmon", "purple", "maroon", "yellow", "olive", "gray", "lightcoral", "mediumvioletred"]
