import add from "./add"
import list from "./list"
import remove from "./remove"
import update from "./update"
import summary from "./summary"

import init from "./init" // TODO: Remove this line after automatically initializing the database

export default [add, list, remove, update, summary, init] as const
