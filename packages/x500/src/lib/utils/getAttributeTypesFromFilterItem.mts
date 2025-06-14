import type { FilterItem } from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/FilterItem.ta.mjs";
import type { AttributeType } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta.mjs";

export
function getAttributeTypesFromFilterItem (item: FilterItem): AttributeType[] {
    if ("equality" in item) {
        return [ item.equality.type_ ];
    }
    else if ("substrings" in item) {
        return [ item.substrings.type_ ];
    }
    else if ("greaterOrEqual" in item) {
        return [ item.greaterOrEqual.type_ ];
    }
    else if ("lessOrEqual" in item) {
        return [ item.lessOrEqual.type_ ];
    }
    else if ("present" in item) {
        return [ item.present ];
    }
    else if ("approximateMatch" in item) {
        return [ item.approximateMatch.type_ ];
    }
    else if ("extensibleMatch" in item) {
        // NOTE: This has no way of extracting the relevant attribute types to which the matching rules may apply.
        return item.extensibleMatch.type_
            ? [ item.extensibleMatch.type_ ]
            : [];
    }
    else if ("contextPresent" in item) {
        return [ item.contextPresent.type_ ];
    }
    else {
        return [];
    }
}

export default getAttributeTypesFromFilterItem;
