import Address from './Address';

/**
 * @class Person
 * @desc Object Domain
 **/

export default class Person {
  constructor(
    public readonly firstname: string,
    public readonly lastname: string,
    public readonly address: Address
  ) {}
}
