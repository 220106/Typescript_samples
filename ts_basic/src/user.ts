//typesモジュールのUserモジュールを読み込み
import { User } from '../types';

// var user: {
//     id: number;
//     email: string;
//     isActive: boolean;
// } = {
//     id: 1,
//     email: "test@test.com",
//     isActive: true,
// }
// user.id = "32";

var user:User = {
    id: 1,
    name: {
        first: "Taro",
        last: "Tokyo",
    },
    email: "test@test.com",
    isActive: true,
}
console.log(user);

