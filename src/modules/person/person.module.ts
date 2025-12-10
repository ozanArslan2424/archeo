import { Module } from "@/modules/module.class";
import type { PersonData } from "@/modules/person/person.schema";
import type { QueryModule } from "@/modules/query/query.module";

export class PersonModule extends Module<PersonData> {
	constructor(private readonly queryModule: QueryModule) {
		super(PersonModule.name);
	}
}
