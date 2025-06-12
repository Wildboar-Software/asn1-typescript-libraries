import type ATVAC from "../types/AttributeTypeValueAndContextsTuple.mjs";
import type {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta.mjs";

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
