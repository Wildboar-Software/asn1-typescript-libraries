import {
    ASN1Construction,
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
    _decode_ORDescriptor,
    _decode_RecipientSpecifier,
    type RecipientSpecifier,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    matchPreparedORDescriptor,
    normalizePreparedORDescriptor,
    oRDescriptorMatchTyped,
    type PreparedORDescriptor,
    preparedORDescriptorFrom,
    validateORDescriptorAssertion,
} from "./oRDescriptorMatch.js";

// Matches `@wildboar/asn1` `_parse_set`'s `components.length + 100` DoS cap
// (`RecipientSpecifier` has 4 root SET components).
const MAX_RECIPIENT_SPECIFIER_ELEMENTS = 104;

export
function findRecipientElement (
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
    let found: BERElement | undefined;
    let i = 0;
    let count = 0;
    while (i < bytes.length) {
        if (++count > MAX_RECIPIENT_SPECIFIER_ELEMENTS) {
            return undefined;
        }
        i += el.fromBytes(bytes.subarray(i), true);
        if (
            (el.tagClass === ASN1TagClass.context)
            && (el.tagNumber === 0)
        ) {
            if (!ct) {
                return el;
            }
            const copy = new BERElement();
            copy.tagClass = el.tagClass;
            copy.construction = el.construction;
            copy.tagNumber = el.tagNumber;
            copy.value = el.value;
            found = copy;
        }
    }
    return found;
}

export
function decodeNonEmptyRecipientSpecifierAssertion (
    rule: string,
    substringMode: boolean = false,
): (el: ASN1Element) => RecipientSpecifier {
    return (el: ASN1Element): RecipientSpecifier => {
        const rs = _decode_RecipientSpecifier(el);
        validateORDescriptorAssertion(rs.recipient, rule, substringMode);
        return rs;
    };
}

export
function decodePreparedRecipientSpecifierAssertion (
    rule: string,
    substringMode: boolean = false,
): (el: ASN1Element) => PreparedORDescriptor {
    return (el: ASN1Element): PreparedORDescriptor => {
        const rs = _decode_RecipientSpecifier(el);
        return preparedORDescriptorFrom(rs.recipient, rule, substringMode);
    };
}

export
function recipientSpecifierValueMatcher (
    extraFlags: number = 0,
): (
    assertion: PreparedORDescriptor,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
) => boolean | undefined {
    return (assertion, value, getEqualityMatcher, flags = 0): boolean | undefined => {
        const recipient = findRecipientElement(value, flags);
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
function recipientSpecifierMatchTyped (
    assertion: RecipientSpecifier,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findRecipientElement(value, flags);
    if (!recipient) {
        return undefined;
    }
    return oRDescriptorMatchTyped(assertion.recipient, recipient, getEqualityMatcher, flags);
}

export
const recipientSpecifierMatch: Matcher = createEqualityMatcher(
    decodePreparedRecipientSpecifierAssertion("recipientSpecifierMatch"),
    recipientSpecifierValueMatcher(0),
    undefined,
    false,
    normalizePreparedORDescriptor,
);

export default recipientSpecifierMatch;
