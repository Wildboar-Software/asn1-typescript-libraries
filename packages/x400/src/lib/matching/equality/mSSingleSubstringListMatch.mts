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
import {
    decodeMSStringElement,
    matchMSSubstring,
    normalizeMSString,
    prepareMSStringValue,
} from "./orAddressUtilities.mjs";

const decodeMSStringSequence = $._decodeSequenceOf<string>(() => decodeMSStringElement);

function decodeMSStringList (el: ASN1Element): string[] {
    if (
        (el.tagClass !== ASN1TagClass.universal)
        || (el.tagNumber !== ASN1UniversalType.sequence)
    ) {
        throw new ASN1ConstructionError("mSSingleSubstringListMatch: expected SEQUENCE", el);
    }
    return decodeMSStringSequence(el).map((str) => {
        if (str.length === 0) {
            throw new ASN1CharactersError("mSSingleSubstringListMatch: empty MSString", el);
        }
        return str;
    });
}

function normalizeCaseIgnoreList (assertion: string[]): string[] {
    return assertion.map((text) => {
        const normalized = normalizeMSString(text, true);
        if (normalized.length === 0) {
            throw new ASN1CharactersError("mSSingleSubstringListMatch: substring reduced to empty after normalization");
        }
        return normalized;
    });
}

function matchSubstringListFast (
    assertion: readonly string[],
    vElements: readonly ASN1Element[],
    flags: number,
): boolean {
    if (assertion.length !== vElements.length) {
        return false;
    }
    for (let i = 0; i < assertion.length; i++) {
        const raw = decodeMSStringElement(vElements[i]);
        if (raw.length === 0) {
            throw new ASN1CharactersError("mSSingleSubstringListMatch: empty MSString", vElements[i]);
        }
        const vi = prepareMSStringValue(raw, true, flags);
        if (vi.indexOf(assertion[i]) < 0) {
            return false;
        }
    }
    return true;
}

function matchSubstringListConstantTime (
    assertion: readonly string[],
    vElements: readonly ASN1Element[],
    flags: number,
): boolean {
    let matched = assertion.length === vElements.length;
    const count = Math.max(assertion.length, vElements.length);
    for (let i = 0; i < count; i++) {
        let vi = "";
        if (i < vElements.length) {
            const raw = decodeMSStringElement(vElements[i]);
            if (raw.length === 0) {
                // Just to waste time.
                matchMSSubstring(assertion[i] ?? "", assertion[i] ?? "", flags);
                continue;
            }
            vi = prepareMSStringValue(raw, true, flags);
        }
        if (i < assertion.length) {
            if (!matchMSSubstring(vi, assertion[i], flags)) {
                matched = false;
            }
        } else {
            matchMSSubstring(vi, " ", flags);
        }
    }
    return matched;
}

export
const mSSingleSubstringListMatch: Matcher = createEqualityMatcher(
    decodeMSStringList,
    (assertion, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean => {
        if (
            (value.tagClass !== ASN1TagClass.universal)
            || (value.tagNumber !== ASN1UniversalType.sequence)
        ) {
            throw new ASN1ConstructionError("mSSingleSubstringListMatch: expected SEQUENCE", value);
        }
        const vElements = value.sequenceOf;
        return (flags & MATCH_FLAG_CONSTANT_TIME)
            ? matchSubstringListConstantTime(assertion, vElements, flags)
            : matchSubstringListFast(assertion, vElements, flags);
    },
    undefined,
    true,
    normalizeCaseIgnoreList,
);

export default mSSingleSubstringListMatch;
