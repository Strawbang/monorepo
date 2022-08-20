import Person from './Person';

/**
 * @class User
 * @desc Object Domain
 **/

export default class User {
  constructor(
    public readonly username: string,
    public readonly password: string,
    public readonly details: Person
  ) {}
}
