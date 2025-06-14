import type { Filter } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/Filter.ta.mjs";
import type { AttributeType } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta.mjs";
import getAttributeTypesFromFilterItem from "./getAttributeTypesFromFilterItem.mjs";

export
function getAttributeTypesFromFilter (filter: Filter): AttributeType[] {
    if ("item" in filter) {
        return getAttributeTypesFromFilterItem(filter.item);
    } else if ("and" in filter) {
        return filter.and.flatMap(getAttributeTypesFromFilter);
    } else if ("or" in filter) {
        return filter.or.flatMap(getAttributeTypesFromFilter);
    } else if ("not" in filter) {
        return getAttributeTypesFromFilter(filter.not);
    } else {
        return [];
    }
}

export default getAttributeTypesFromFilter;
