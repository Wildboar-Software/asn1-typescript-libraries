import type { Filter } from "../modules/DirectoryAbstractService/Filter.ta.mjs";
import type { AttributeType } from "../modules/InformationFramework/AttributeType.ta.mjs";
import getAttributeTypesFromFilterItem from "./getAttributeTypesFromFilterItem.mjs";

/**
 * @summary Get the attribute types used in a `Filter`
 * @param {Filter} filter the `Filter` whose attribute types are to be collected
 * @returns {AttributeType[]} the attribute types mentioned
 * @function
 */
export
function getAttributeTypesFromFilter (
    filter: Filter,
    recursionTTL: number = 20,
): AttributeType[] {
    if (recursionTTL <= 0) {
        return [];
    }
    if ("item" in filter) {
        return getAttributeTypesFromFilterItem(filter.item);
    } else if ("and" in filter) {
        return filter.and
            .flatMap((sub) => getAttributeTypesFromFilter(sub, recursionTTL - 1));
    } else if ("or" in filter) {
        return filter.or
            .flatMap((sub) => getAttributeTypesFromFilter(sub, recursionTTL - 1));
    } else if ("not" in filter) {
        return getAttributeTypesFromFilter(filter.not, recursionTTL - 1);
    } else {
        return [];
    }
}

export default getAttributeTypesFromFilter;
