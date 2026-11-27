import type { Filter } from "@wildboar/x500/DirectoryAbstractService";
import { objectClass } from "@wildboar/x500/InformationFramework";

type RecursionFlag = { recursionLimitReached: boolean };

function isMatchAllFilterEx(
    filter: Filter,
    recursionTTL: number,
    recursionFlag: RecursionFlag
): boolean {
    if (recursionFlag.recursionLimitReached) {
        return false;
    }
    if (recursionTTL <= 0) {
        recursionFlag.recursionLimitReached = true;
        return false;
    }
    if ("item" in filter) {
        return (("present" in filter.item)
            && filter.item.present.isEqualTo(objectClass["&id"]));
    } else if ("and" in filter) {
        return filter.and.every((subfilter) => isMatchAllFilterEx(
            subfilter,
            recursionTTL - 1,
            recursionFlag,
        ));
    } else if ("or" in filter) {
        return filter.or.some((subfilter) => isMatchAllFilterEx(
            subfilter,
            recursionTTL - 1,
            recursionFlag,
        ));
    } else {
        return false;
    }
}

/**
 * @summary Determine whether a filter is a "match-all" filter
 * @description
 *
 * This function returns a boolean indicating whether a filter will match all
 * entries. Examples of such filters include `and:{}`.
 *
 * @param filter The filter to be evaluated
 * @returns A boolean indicating whether the filter will match all entries, or
 *  `null` if the filter is too recursive to determine.
 *
 * @function
 * @author Jonathan M. Wilbur
 */
export
function isMatchAllFilter (filter?: Filter): boolean | null {
    if (!filter) {
        return true;
    }
    const flag: RecursionFlag = { recursionLimitReached: false };
    const result = isMatchAllFilterEx(filter, 100, flag);
    if (!result && flag.recursionLimitReached) {
        // `null` only takes precedence over `false`.
        // If `true`, we already know one of the subfilters will always match.
        return null;
    }
    return result;
}

export default isMatchAllFilter;
