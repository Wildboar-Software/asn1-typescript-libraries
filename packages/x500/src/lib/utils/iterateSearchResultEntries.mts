import type { SearchResult } from "../modules/DirectoryAbstractService/SearchResult.ta.mjs";
import type { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import { getOptionallyProtectedValue } from "./getOptionallyProtectedValue.mjs";

/**
 * Outermost result plus contained results on one path. The 100th result
 * is still walked; a 101st contained result is not entered.
 */
const MAX_RECURSION: number = 100;

/**
 * @summary Yield entries from a `SearchResult`
 * @description
 *
 * Yields each `searchInfo.entries` item. When the result is
 * `uncorrelatedSearchInfo` (a `SET OF SearchResult` from DSAs whose
 * results were not merged), each contained `SearchResult` is walked the
 * same way, depth-first, in array order. Signed and unsigned results
 * are both unwrapped.
 *
 * An unrecognized `SearchResultData` alternative yields nothing. A
 * `SearchResult` already on the current path is skipped, so a cyclic
 * in-memory graph ends. The same object reached by two different paths
 * is yielded again.
 *
 * Nesting is capped at 100 `SearchResult`s on one path, counting the
 * outermost result. Entries at that depth are still yielded. A deeper
 * contained result is not entered, which keeps a long chain from
 * exhausting the call stack.
 *
 * `entries` is a `SET OF`. Order is insignificant unless the search
 * was paged or sorted; this generator keeps the array order it was given.
 *
 * @param {SearchResult} result The search result to walk.
 * @returns {Generator} Entries from this result and from contained
 *  results.
 * @generator
 */
export
function* iterateSearchResultEntries (
    result: SearchResult,
): Generator<EntryInformation, void, undefined> {
    yield* walk(result, new Set(), MAX_RECURSION);
}

function* walk (
    result: SearchResult,
    stack: Set<SearchResult>,
    remaining: number,
): Generator<EntryInformation, void, undefined> {
    if (remaining <= 0 || stack.has(result)) {
        return;
    }
    stack.add(result);
    try {
        const data = getOptionallyProtectedValue(result);
        if ("searchInfo" in data) {
            yield* data.searchInfo.entries;
        } else if ("uncorrelatedSearchInfo" in data) {
            for (const inner of data.uncorrelatedSearchInfo) {
                yield* walk(inner, stack, remaining - 1);
            }
        }
    } finally {
        stack.delete(result);
    }
}

export default iterateSearchResultEntries;
