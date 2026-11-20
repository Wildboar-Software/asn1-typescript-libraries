import { ASN1ConstructionError, type ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_CirculationMember } from "@wildboar/x400/IPMSHeadingExtensions";
import { matchORDescriptorSingleElement } from "./oRDescriptorSingleElementMatch.js";
import {
    decodeORNameSingleElementAssertion,
    normalizeORNameSingleElementAssertion,
} from "./oRNameSingleElementMatch.js";

export
const circulationMemberSingleElementMatch: Matcher = createEqualityMatcher(
    decodeORNameSingleElementAssertion,
    (assertion: string, value: ASN1Element): boolean | undefined => {
        const v = _decode_CirculationMember(value);
        if (!v.circulation_recipient.recipient.formal_name) {
            throw new ASN1ConstructionError(
                "circulationMemberSingleElementMatch: formal-name is required in CirculationMember",
                value,
            );
        }
        return matchORDescriptorSingleElement(assertion, v.circulation_recipient.recipient);
    },
    undefined,
    true,
    normalizeORNameSingleElementAssertion,
);

export default circulationMemberSingleElementMatch;
