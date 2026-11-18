import { ASN1Element } from "@wildboar/asn1";
import { createSubstringsMatcher, type Matcher } from "@wildboar/x500";
import type { FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import {
    _decode_MSString,
    _decode_SubstringAssertion,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "./orAddressUtilities.js";

type MSSubstring =
    | { initial: MSString }
    | { any_: MSString }
    | { final: MSString }
    | { unrecognized: true };

function msSubstringsFromFilter (
    items: FilterItem_substrings_strings_Item[],
): MSSubstring[] {
    return items.map((item): MSSubstring => {
        if (ASN1Element.isElement(item)) {
            return { unrecognized: true };
        }
        if ("initial" in item) {
            return { initial: _decode_MSString(item.initial) };
        }
        if ("any_" in item) {
            return { any_: _decode_MSString(item.any_) };
        }
        if ("final" in item) {
            return { final: _decode_MSString(item.final) };
        }
        return { unrecognized: true };
    });
}

export
const mSSubstringsMatch: Matcher = createSubstringsMatcher(
    _decode_SubstringAssertion,
    (assertion: MSSubstring[], value): boolean => {
        const v: string = msStringToString(_decode_MSString(value))
            .trim()
            .replace(/\s+/g, " ")
            .toUpperCase();
        let lastAnyMatch: number = -1;
        for (const sa of assertion) {
            if ("initial" in sa) {
                const initial = msStringToString(sa.initial).toUpperCase();
                if (!v.startsWith(initial)) {
                    return false;
                }
            } else if ("final" in sa) {
                const final = msStringToString(sa.final).toUpperCase();
                if (!v.endsWith(final)) {
                    return false;
                }
            } else if ("any_" in sa) {
                const any_ = msStringToString(sa.any_).toUpperCase();
                const nextMatch = v.indexOf(any_, lastAnyMatch + 1);
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
);

export default mSSubstringsMatch;
