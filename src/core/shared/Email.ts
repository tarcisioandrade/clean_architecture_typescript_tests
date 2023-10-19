const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export class Email {
  constructor(readonly value: string) {
    if (!EMAIL_REGEXP.test(value)) throw new Error("E-mail invalido");
  }
}
