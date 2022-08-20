/**
 * @class Player
 * @desc Object Domain
 **/

import Person from "./Person";

 export default class Player {
    constructor(
      public readonly positions: string,
      public readonly details: Person
    ) {}
  }
  