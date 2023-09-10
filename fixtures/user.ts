import { User } from "../interfaces/user";

export const validUser: User = {
    displayName: "taliw",
    credential: {
        login: "taliw",
        password: "123456",
    },
};

const errorMessage: string = "ล็อกอินหรือรหัสผ่านไม่ถูกต้อง";
export const invalidUsers: User[] = [
    // {
    //     displayName: "talIw",
    //     credential: {
    //         login: "talIw",
    //         password: "654321",
    //     },
    //     errorMessage,
    // },
    // {
    //     displayName: "taliw",
    //     credential: {
    //         login: "taliw",
    //         password: "654321",
    //     },
    //     errorMessage,
    // },
    // {
    //     displayName: "taliw",
    //     credential: {
    //         login: "qwerty",
    //         password: "123456",
    //     },
    //     errorMessage,
    // },
    ...Array.from({ length: 100 }, (_, index) => ({
        displayName: `user${index}`,
        credential: {
            login: `user${index}`,
            password: "123456",
        },
        errorMessage,
    })),
    {
        displayName: "jomyut",
        credential: {
            login: "jomyut",
            password: "123456",
        },
        errorMessage: "ล็อกอินถูกระงับ",
    },
];

// export const invalidUsers: User[] = Array.from({ length: 10 }, (_, index) => ({
//     displayName: `user${index}`,
//     credential: {
//         login: `user${index}`,
//         password: "123456",
//     },
//     errorMessage,
// }));
