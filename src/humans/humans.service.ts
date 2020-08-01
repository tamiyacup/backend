import { Injectable } from "@nestjs/common";
export type User = any;
@Injectable()
export class HumansService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: "newnew1150",
                password: "genesis1",
            },
        ];
    }
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }

    async create(req: any) {
        return req.body;
    }
}
