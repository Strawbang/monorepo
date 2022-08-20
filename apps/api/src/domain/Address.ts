/**
 * @class Address
 * @desc Object Domain
 **/

export default class Address {
  constructor(
    public readonly street: string,
    public readonly city: string,
    public readonly department: number,
    public readonly streetNumber: number,
    public readonly area: string,
    public readonly zipcode: number
  ) {}
}
