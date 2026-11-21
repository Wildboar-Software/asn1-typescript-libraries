import {
    ASN1Construction,
    ASN1ConstructionError,
    type ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_CirculationMember,
    type CirculationMember,
} from "@wildboar/x400/IPMSHeadingExtensions";
import {
    oRDescriptorMatchTyped,
    validateORDescriptorAssertion,
} from "./oRDescriptorMatch.js";
import { findRecipientElement } from "./recipientSpecifierMatch.js";

export
function findCirculationRecipientElement (value: ASN1Element): ASN1Element | undefined {
    if (value.construction !== ASN1Construction.constructed) {
        return undefined;
    }
    const bytes = value.value;
    const el = new BERElement();
    let i = 0;
    while (i < bytes.length) {
        i += el.fromBytes(bytes.subarray(i), true);
        if (
            (el.tagClass === ASN1TagClass.universal)
            && (el.tagNumber === ASN1UniversalType.set)
        ) {
            return findRecipientElement(el);
        }
    }
    return undefined;
}

export
function decodeCirculationMemberAssertion (
    rule: string,
    substringMode: boolean = false,
): (el: ASN1Element) => CirculationMember {
    return (el: ASN1Element): CirculationMember => {
        const cm = _decode_CirculationMember(el);
        if (!cm.circulation_recipient.recipient.formal_name) {
            throw new ASN1ConstructionError(
                `${rule}: formal-name is required in CirculationMember assertion`,
                el,
            );
        }
        validateORDescriptorAssertion(cm.circulation_recipient.recipient, rule, substringMode);
        return cm;
    };
}

export
function circulationMemberMatchTyped (
    assertion: CirculationMember,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findCirculationRecipientElement(value);
    if (!recipient) {
        return undefined;
    }
    return oRDescriptorMatchTyped(
        assertion.circulation_recipient.recipient,
        recipient,
        getEqualityMatcher,
        flags,
    );
}

export
const circulationMemberMatch: Matcher = createEqualityMatcher(
    decodeCirculationMemberAssertion("circulationMemberMatch"),
    circulationMemberMatchTyped,
);

export default circulationMemberMatch;
