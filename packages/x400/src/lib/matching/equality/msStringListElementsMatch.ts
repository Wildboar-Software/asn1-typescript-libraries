import {
    ASN1CharactersError,
    ASN1ConstructionError,
    ASN1TagClass,
    ASN1UniversalType,
    type ASN1Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    decodeMSStringElement,
    normalizeMSString,
    prepareMSStringValue,
} from "./orAddressUtilities.js";

const decodeMSStringSequence = $._decodeSequenceOf<string>(() => decodeMSStringElement);

function normalizeCaseIgnoreElement (text: string): string {
    return normalizeMSString(text, true);
}

function decodeMSStringList (el: ASN1Element): string[] {
    if (
        (el.tagClass !== ASN1TagClass.universal)
        || (el.tagNumber !== ASN1UniversalType.sequence)
    ) {
        throw new ASN1ConstructionError("mSStringListElementsMatch: expected SEQUENCE", el);
    }
    return decodeMSStringSequence(el).map((str) => {
        if (str.length === 0) {
            throw new ASN1CharactersError("mSStringListElementsMatch: empty MSString", el);
        }
        return str;
    });
}

function normalizeCaseIgnoreList (assertion: string[]): string[] {
    return assertion.map(normalizeCaseIgnoreElement);
}

export
const mSStringListElementsMatch: Matcher = createEqualityMatcher(
    decodeMSStringList,
    (assertion, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean => {
        if (
            (value.tagClass !== ASN1TagClass.universal)
            || (value.tagNumber !== ASN1UniversalType.sequence)
        ) {
            throw new ASN1ConstructionError("mSStringListElementsMatch: expected SEQUENCE", value);
        }
        const vElements = value.sequenceOf;
        if (assertion.length > vElements.length) {
            return false;
        }
        for (let i = 0; i < assertion.length; i++) {
            const raw = decodeMSStringElement(vElements[i]);
            if (raw.length === 0) {
                // This is required by type constraints of the MSString type.
                throw new ASN1CharactersError("mSStringListElementsMatch: empty MSString", vElements[i]);
            }
            const vi = prepareMSStringValue(raw, true, flags);
            if (assertion[i] !== vi) {
                return false;
            }
        }
        return true;
    },
    undefined,
    true,
    normalizeCaseIgnoreList,
);

export default mSStringListElementsMatch;
