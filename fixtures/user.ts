import { User } from "../interfaces/user";

export const validUser: User = {
    displayName: "taliw",
    credential: {
        login: "taliw",
        password: "123456",
    },
};

export const invalidUser: User = {
    displayName: "talIw",
    credential: {
        login: "talIw",
        password: "654321",
    },
};
