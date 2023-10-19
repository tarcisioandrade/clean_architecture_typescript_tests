import { randomUUID } from "crypto";

export class Entity<T extends { id?: string }> {
  readonly id: string;

  constructor(props: T) {
    this.id = props.id ? props.id : randomUUID();
  }
}
  