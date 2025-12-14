import { Module } from "@/modules/module.class";
import type { PersonData } from "@/modules/person/person.schema";

export class PersonModule extends Module<PersonData> {
	constructor() {
		super(PersonModule.name);
	}
}
