import type { ListResult } from "../modules/DirectoryAbstractService/ListResult.ta.mjs";
import type { ListResultData_listInfo_subordinates_Item } from "../modules/DirectoryAbstractService/ListResultData-listInfo-subordinates-Item.ta.mjs";
import { getOptionallyProtectedValue } from "./getOptionallyProtectedValue.mjs";

/**
 * Outermost result plus contained results on one path. The 100th result
 * is still walked; a 101st contained result is not entered.
 */
const MAX_RECURSION: number = 100;

/**
 * @summary Yield subordinate entries from a `ListResult`
 * @description
 *
 * Yields each `listInfo.subordinates` item. When the result is
 * `uncorrelatedListInfo` (a `SET OF ListResult` from DSAs whose results
 * were not merged), each contained `ListResult` is walked the same way,
 * depth-first, in array order. Signed and unsigned results are both
 * unwrapped.
 *
 * An unrecognized `ListResultData` alternative yields nothing. A
 * `ListResult` already on the current path is skipped, so a cyclic
 * in-memory graph ends. The same object reached by two different paths
 * is yielded again.
 *
 * Nesting is capped at 100 `ListResult`s on one path, counting the
 * outermost result. Entries at that depth are still yielded. A deeper
 * contained result is not entered, which keeps a long chain from
 * exhausting the call stack.
 *
 * `subordinates` is a `SET OF`. Order is insignificant unless the list
 * was paged or sorted; this generator keeps the array order it was given.
 *
 * @param {ListResult} result The list result to walk.
 * @returns {Generator} Subordinate entries from this result and from
 *  contained results.
 * @generator
 */
export
function* iterateListResultSubordinates (
    result: ListResult,
): Generator<ListResultData_listInfo_subordinates_Item, void, undefined> {
    yield* walk(result, new Set(), MAX_RECURSION);
}

function* walk (
    result: ListResult,
    stack: Set<ListResult>,
    remaining: number,
): Generator<ListResultData_listInfo_subordinates_Item, void, undefined> {
    if (remaining <= 0 || stack.has(result)) {
        return;
    }
    stack.add(result);
    try {
        const data = getOptionallyProtectedValue(result);
        if ("listInfo" in data) {
            yield* data.listInfo.subordinates;
        } else if ("uncorrelatedListInfo" in data) {
            for (const inner of data.uncorrelatedListInfo) {
                yield* walk(inner, stack, remaining - 1);
            }
        }
    } finally {
        stack.delete(result);
    }
}

export default iterateListResultSubordinates;
