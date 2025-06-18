import type ATVAC from "../types/AttributeTypeValueAndContextsTuple.mjs";
import type {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta.mjs";

/**
 * @summary Get type-value-context tuples for an attribute
 * @param {Attribute} attr The attribute whose type-value-context tuples are queried
 * @returns type-value-context tuples for each value in the attribute
 * @function
 */
export
function getValueTuplesFromAttribute (attr: Attribute): ATVAC[] {
    return [
        ...attr.values
            .map((value): ATVAC => [ attr.type_, value, [] ]),
        ...(attr.valuesWithContext ?? [])
            .map((vwc): ATVAC => [ attr.type_, vwc.value, vwc.contextList ]),
    ];
}

export default getValueTuplesFromAttribute;
