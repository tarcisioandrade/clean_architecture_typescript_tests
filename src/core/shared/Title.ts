export class Title {
  constructor(readonly value: string) {
    if (this.value.length < 10)
      throw new Error("O titulo não pode conter menos de 10 carácteres.");
    if (this.value.length > 25)
      throw new Error("O titulo não pode conter mais de 25 carácteres.");
  }
}
