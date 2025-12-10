import z from "zod";

export enum PersonRoleEnum {
	super_admin = "super_admin",
	admin = "admin",
	user = "user",
}

export const PersonDataSchema = z.object({
	id: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
	name: z.string(),
	email: z.string(),
	image: z.string().nullish(),
	role: z.enum(PersonRoleEnum),
	userId: z.string(),
});

export type PersonData = z.infer<typeof PersonDataSchema>;
