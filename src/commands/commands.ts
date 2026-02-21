import { getUsers } from "../lib/db/queries/users";
import { readConfig } from "../config";

export type CommandHandler = (
    cmdName: string,
    ...args: string[]
) => Promise<void>;

export type CommandsRegistry = Record<string, CommandHandler>;

export function registerCommand(
    registry: CommandsRegistry,
    cmdName: string,
    handler: CommandHandler,
): void {
    registry[cmdName] = handler;
}

export async function runCommand(
    registry: CommandsRegistry,
    cmdName: string,
    ...args: string[]
): Promise<void> {
    const handler = registry[cmdName];
    if (!handler) {
        throw new Error(`Unknown command: ${cmdName}`);
    }

    await handler(cmdName, ...args);
}

export async function handlerListUsers(_: string) {
    const users = await getUsers();
    const config = readConfig();

    for (let user of users) {
        if (user.name === config.currentUserName) {
            console.log(`* ${user.name} (current)`);
            continue;
        }
        console.log(`* ${user.name}`);
    }
}
