import { z } from 'zod';

const usernameSchema = z.string().min(3).max(40);
const passwordSchema = z.string().min(5).max(25);

export const CreateUserSchema = z.object({
    username: usernameSchema,
    password: passwordSchema,
    name: z.string()
});

export const SigninSchema = z.object({
    username: usernameSchema,
    password: passwordSchema
})

export const createRoomSchema = z.object({
    name: z.string().min(3).max(20)
})