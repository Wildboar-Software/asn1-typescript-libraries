import { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import type { FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import { _decode_MSString, _decode_SubstringAssertion } from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "./orAddressUtilities.js";

type MSSubstring =
    | { initial: string }
    | { any_: string }
    | { final: string }
    | { unrecognized: true };

function substringFromMSString (
    element: ASN1Element,
): string {
    return msStringToString(_decode_MSString(element));
}

function decodeMSSubstrings (el: ASN1Element): MSSubstring[] {
    return _decode_SubstringAssertion(el).map((item): MSSubstring => {
        if ("initial" in item) {
            return { initial: msStringToString(item.initial) };
        }
        if ("final" in item) {
            return { final: msStringToString(item.final) };
        }
        if ("any_" in item) {
            return { any_: msStringToString(item.any_) };
        }
        return { unrecognized: true };
    });
}

function msSubstringsFromFilter (
    items: FilterItem_substrings_strings_Item[],
): MSSubstring[] {
    return items.map((item): MSSubstring => {
        if (ASN1Element.isElement(item)) {
            return { unrecognized: true };
        }
        if ("initial" in item) {
            return { initial: substringFromMSString(item.initial) };
        }
        if ("any_" in item) {
            return { any_: substringFromMSString(item.any_) };
        }
        if ("final" in item) {
            return { final: substringFromMSString(item.final) };
        }
        return { unrecognized: true };
    });
}

function normalizeMSSubstrings (assertion: MSSubstring[]): MSSubstring[] {
    return assertion.map((item): MSSubstring => {
        if ("initial" in item) {
            return { initial: item.initial.toUpperCase() };
        }
        if ("final" in item) {
            return { final: item.final.toUpperCase() };
        }
        if ("any_" in item) {
            return { any_: item.any_.toUpperCase() };
        }
        return item;
    });
}

export
const mSSubstringsMatch: Matcher = createEqualityMatcher(
    decodeMSSubstrings,
    (assertion, value: ASN1Element): boolean => {
        const v: string = msStringToString(_decode_MSString(value))
            .trim()
            .replace(/\s+/g, " ")
            .toUpperCase();
        let lastAnyMatch: number = -1;
        for (const sa of assertion) {
            if ("initial" in sa) {
                if (!v.startsWith(sa.initial)) {
                    return false;
                }
            } else if ("final" in sa) {
                if (!v.endsWith(sa.final)) {
                    return false;
                }
            } else if ("any_" in sa) {
                const nextMatch = v.indexOf(sa.any_, lastAnyMatch + 1);
                if (nextMatch < 0) {
                    return false;
                }
                lastAnyMatch = nextMatch;
            } else {
                return false;
            }
        }
        return true;
    },
    msSubstringsFromFilter,
    true,
    normalizeMSSubstrings,
);

export default mSSubstringsMatch;
