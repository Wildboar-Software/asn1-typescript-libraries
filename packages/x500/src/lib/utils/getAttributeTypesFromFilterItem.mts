import type { FilterItem } from "../modules/DirectoryAbstractService/FilterItem.ta.mjs";
import type { AttributeType } from "../modules/InformationFramework/AttributeType.ta.mjs";

/**
 * @summary Get the attribute types used in a `FilterItem`
 * @param {FilterItem} item the `FilterItem` whose attribute types are to be collected
 * @returns {AttributeType[]} the attribute types mentioned
 * @function
 */
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
