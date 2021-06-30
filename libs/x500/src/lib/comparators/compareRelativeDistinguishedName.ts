import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta";
import type { RelativeDistinguishedName } from "../modules/InformationFramework/RelativeDistinguishedName.ta";
import type EqualityMatcher from "../types/EqualityMatcher";
import compareAttributeTypeAndValue from "./compareAttributeTypeAndValue";

export default function compare(
    a: RelativeDistinguishedName,
    b: RelativeDistinguishedName,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (a.length !== b.length) {
        return false;
    }
    const avalues: Map<string, AttributeTypeAndValue> = new Map(
        a.map((atav) => [ atav.type_.toString(), atav ]),
    );
    for (let i = 0; i < a.length; i++) {
        const bvalue = b[i];
        const avalue: AttributeTypeAndValue | undefined = avalues.get(bvalue.type_.toString());
        if (!avalue) {
            return false;
        }
        if (!compareAttributeTypeAndValue(avalue, bvalue, getEqualityMatcher)) {
            return false;
        }
    }
    return true;
}
