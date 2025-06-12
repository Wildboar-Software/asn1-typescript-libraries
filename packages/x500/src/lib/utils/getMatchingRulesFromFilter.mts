import type {
    Filter,
} from "../modules/DirectoryAbstractService/Filter.ta.mjs";
import type { OBJECT_IDENTIFIER } from "asn1-ts";

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
