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
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_CirculationMember,
    type CirculationMember,
} from "@wildboar/x400/IPMSHeadingExtensions";
import { _decode_ORDescriptor } from "@wildboar/x400/IPMSInformationObjects";
import {
    matchPreparedORDescriptor,
    normalizePreparedORDescriptor,
    oRDescriptorMatchTyped,
    type PreparedORDescriptor,
    preparedORDescriptorFrom,
} from "./oRDescriptorMatch.mjs";
import { findRecipientElement } from "./recipientSpecifierMatch.mjs";

// Matches `@wildboar/asn1` `_parse_set`'s `components.length + 100` DoS cap
// (`CirculationMember` has 2 root SET components).
const MAX_CIRCULATION_MEMBER_ELEMENTS = 102;

export
function findCirculationRecipientElement (
    value: ASN1Element,
    flags: number = 0,
): ASN1Element | undefined {
    if (
        (value.tagClass !== ASN1TagClass.universal)
        || (value.tagNumber !== ASN1UniversalType.set)
        || (value.construction !== ASN1Construction.constructed)
    ) {
        return undefined;
    }
    const ct = flags & MATCH_FLAG_CONSTANT_TIME;
    const bytes = value.value;
    const el = new BERElement();
    let found: ASN1Element | undefined;
    let i = 0;
    let count = 0;
    while (i < bytes.length) {
        if (++count > MAX_CIRCULATION_MEMBER_ELEMENTS) {
            return undefined;
        }
        i += el.fromBytes(bytes.subarray(i), true);
        if (
            (el.tagClass === ASN1TagClass.universal)
            && (el.tagNumber === ASN1UniversalType.set)
        ) {
            const inner = findRecipientElement(el, flags);
            if (!ct) {
                return inner;
            }
            found = inner;
        }
    }
    return found;
}

export
function decodePreparedCirculationMemberAssertion (
    rule: string,
    substringMode: boolean = false,
): (el: ASN1Element) => PreparedORDescriptor {
    return (el: ASN1Element): PreparedORDescriptor => {
        const cm = _decode_CirculationMember(el);
        if (!cm.circulation_recipient.recipient.formal_name) {
            throw new ASN1ConstructionError(
                `${rule}: formal-name is required in CirculationMember assertion`,
                el,
            );
        }
        return preparedORDescriptorFrom(cm.circulation_recipient.recipient, rule, substringMode);
    };
}

export
function circulationMemberValueMatcher (
    extraFlags: number = 0,
): (
    assertion: PreparedORDescriptor,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
) => boolean | undefined {
    return (assertion, value, getEqualityMatcher, flags = 0): boolean | undefined => {
        const recipient = findCirculationRecipientElement(value, flags);
        if (!recipient) {
            return undefined;
        }
        const v = _decode_ORDescriptor(recipient);
        return matchPreparedORDescriptor(
            assertion,
            v,
            getEqualityMatcher,
            flags | extraFlags,
            true,
        );
    };
}

export
function circulationMemberMatchTyped (
    assertion: CirculationMember,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findCirculationRecipientElement(value, flags);
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
    decodePreparedCirculationMemberAssertion("circulationMemberMatch"),
    circulationMemberValueMatcher(0),
    undefined,
    false,
    normalizePreparedORDescriptor,
);

export default circulationMemberMatch;
