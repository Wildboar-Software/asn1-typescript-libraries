import {
    ASN1CharactersError,
    ASN1ConstructionError,
    ASN1TagClass,
    ASN1UniversalType,
    type ASN1Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { ctStringsEqual } from "../constantTime.js";
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

function matchListElementsFast (
    assertion: readonly string[],
    vElements: readonly ASN1Element[],
    flags: number,
): boolean {
    if (assertion.length > vElements.length) {
        return false;
    }
    for (let i = 0; i < assertion.length; i++) {
        const raw = decodeMSStringElement(vElements[i]);
        if (raw.length === 0) {
            throw new ASN1CharactersError("mSStringListElementsMatch: empty MSString", vElements[i]);
        }
        if (assertion[i] !== prepareMSStringValue(raw, true, flags)) {
            return false;
        }
    }
    return true;
}

function matchListElementsConstantTime (
    assertion: readonly string[],
    vElements: readonly ASN1Element[],
    flags: number,
): boolean {
    let matched = assertion.length <= vElements.length;
    const count = Math.max(assertion.length, vElements.length);
    for (let i = 0; i < count; i++) {
        let vi = "";
        if (i < vElements.length) {
            const raw = decodeMSStringElement(vElements[i]);
            if (raw.length === 0) {
                // Just to waste time.
                ctStringsEqual(assertion[i] ?? "", assertion[i] ?? "");
                continue;
            }
            vi = prepareMSStringValue(raw, true, flags);
        }
        if (i < assertion.length) {
            if (!ctStringsEqual(assertion[i], vi)) {
                matched = false;
            }
        } else {
            ctStringsEqual("", vi);
        }
    }
    return matched;
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
        return (flags & MATCH_FLAG_CONSTANT_TIME)
            ? matchListElementsConstantTime(assertion, vElements, flags)
            : matchListElementsFast(assertion, vElements, flags);
    },
    undefined,
    true,
    normalizeCaseIgnoreList,
);

export default mSStringListElementsMatch;
