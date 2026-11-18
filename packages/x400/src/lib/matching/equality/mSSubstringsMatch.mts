import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import type { FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import {
    createSubstringsMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    _decode_MSString,
    _decode_SubstringAssertion,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "./orAddressUtilities.mjs";

type MSSubstring =
    | { initial: MSString }
    | { any_: MSString }
    | { final: MSString }
    | { unrecognized: true };

function decodeMSSubstrings(el: ASN1Element): MSSubstring[] {
    return _decode_SubstringAssertion(el);
}

function msSubstringsFromFilter(
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
function mSSubstringsMatchTyped(
    assertion: MSSubstring[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    _flags?: number,
): boolean | undefined {
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
}

mSSubstringsMatchTyped satisfies TypedEquationFunction<MSSubstring[]>;

export
const mSSubstringsMatch: Matcher = createSubstringsMatcher(
    decodeMSSubstrings,
    mSSubstringsMatchTyped,
    msSubstringsFromFilter,
);

export default mSSubstringsMatch;
