import type {
    Filter,
} from "../modules/DirectoryAbstractService/Filter.ta.mjs";
import type { OBJECT_IDENTIFIER } from "asn1-ts";

/**
 * @summary Get the OIDs of matching rules used in a `Filter`
 * @description
 * 
 * This function returns the object identifiers of all matching rules used in an
 * asserted X.500 directory `Filter`.
 *
 * @param {Filter} filter The filter whose matching rules are to be extracted
 * @returns {OBJECT_IDENTIFIER[]} The object identifiers of the matching rules
 *   present in the filter.
 * @function
 */
export
function getMatchingRulesFromFilter (filter: Filter): OBJECT_IDENTIFIER[] {
    if ("and" in filter) {
        return filter.and.flatMap((sub) => getMatchingRulesFromFilter(sub));
    } else if ("or" in filter) {
        return filter.or.flatMap((sub) => getMatchingRulesFromFilter(sub));
    } else if ("not" in filter) {
        return getMatchingRulesFromFilter(filter.not);
    } else if ("item" in filter) {
        if ("extensibleMatch" in filter.item) {
            const item = filter.item.extensibleMatch;
            return item.matchingRule ?? [];
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export default getMatchingRulesFromFilter;
