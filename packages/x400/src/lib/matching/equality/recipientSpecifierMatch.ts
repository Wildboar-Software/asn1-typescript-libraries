import {
    ASN1Construction,
    type ASN1Element,
    ASN1TagClass,
    BERElement,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_RecipientSpecifier,
    type RecipientSpecifier,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    oRDescriptorMatchTyped,
    validateORDescriptorAssertion,
} from "./oRDescriptorMatch.js";

export
function findRecipientElement (value: ASN1Element): ASN1Element | undefined {
    if (value.construction !== ASN1Construction.constructed) {
        return undefined;
    }
    const bytes = value.value;
    const el = new BERElement();
    let i = 0;
    while (i < bytes.length) {
        i += el.fromBytes(bytes.subarray(i), true);
        if (
            (el.tagClass === ASN1TagClass.context)
            && (el.tagNumber === 0)
        ) {
            return el;
        }
    }
    return undefined;
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
function recipientSpecifierMatchTyped (
    assertion: RecipientSpecifier,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const recipient = findRecipientElement(value);
    if (!recipient) {
        return undefined;
    }
    return oRDescriptorMatchTyped(assertion.recipient, recipient, getEqualityMatcher, flags);
}

export
const recipientSpecifierMatch: Matcher = createEqualityMatcher(
    decodeNonEmptyRecipientSpecifierAssertion("recipientSpecifierMatch"),
    recipientSpecifierMatchTyped,
    undefined,
    false,
);

export default recipientSpecifierMatch;
