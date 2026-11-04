import type { ListResult } from "../modules/DirectoryAbstractService/ListResult.ta.mjs";
import type { ListResultData_listInfo_subordinates_Item } from "../modules/DirectoryAbstractService/ListResultData-listInfo-subordinates-Item.ta.mjs";
import { getOptionallyProtectedValue } from "./getOptionallyProtectedValue.mjs";

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
    yield* walk(result, new Set());
}

function* walk (
    result: ListResult,
    stack: Set<ListResult>,
): Generator<ListResultData_listInfo_subordinates_Item, void, undefined> {
    if (stack.has(result)) {
        return;
    }
    stack.add(result);
    try {
        const data = getOptionallyProtectedValue(result);
        if ("listInfo" in data) {
            yield* data.listInfo.subordinates;
        } else if ("uncorrelatedListInfo" in data) {
            for (const inner of data.uncorrelatedListInfo) {
                yield* walk(inner, stack);
            }
        }
    } finally {
        stack.delete(result);
    }
}

export default iterateListResultSubordinates;
