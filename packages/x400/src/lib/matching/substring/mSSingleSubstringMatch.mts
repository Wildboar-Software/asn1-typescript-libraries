import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import type { FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import {
    createSubstringsMatcher,
    type AssertedSubstring,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    _decode_MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "../equality/orAddressUtilities.mjs";

/**
 * One presented substring. An encoded `MSString` assertion is `any`
 * (the previous default when no substring selection was supplied).
 * `unrecognized` keeps the previous default branch, which did not match.
 */
type SingleSubstring =
    | AssertedSubstring<string>
    | { unrecognized: true };

function upperMSString(el: ASN1Element): string {
    return msStringToString(_decode_MSString(el)).toUpperCase();
}

function decodeSingleSubstring(el: ASN1Element): SingleSubstring[] {
    return [{ any_: upperMSString(el) }];
}

function singleSubstringFromFilter(
    items: FilterItem_substrings_strings_Item[],
): SingleSubstring[] {
    return items.map((item): SingleSubstring => {
        if (ASN1Element.isElement(item)) {
            return { unrecognized: true };
        }
        if ("initial" in item) {
            return { initial: upperMSString(item.initial) };
        }
        if ("any_" in item) {
            return { any_: upperMSString(item.any_) };
        }
        if ("final" in item) {
            return { final: upperMSString(item.final) };
        }
        return { unrecognized: true };
    });
}

export
function mSSingleSubstringMatchTyped(
    assertion: SingleSubstring[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    _flags?: number,
): boolean | undefined {
    const v: string = msStringToString(_decode_MSString(value)).toUpperCase();
    for (const sub of assertion) {
        if ("initial" in sub) {
            if (!v.startsWith(sub.initial)) {
                return false;
            }
        } else if ("any_" in sub) {
            if (!(v.indexOf(sub.any_) > -1)) {
                return false;
            }
        } else if ("final" in sub) {
            if (!v.endsWith(sub.final)) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

mSSingleSubstringMatchTyped satisfies TypedEquationFunction<SingleSubstring[]>;

export
const mSSingleSubstringMatch: Matcher = createSubstringsMatcher(
    decodeSingleSubstring,
    mSSingleSubstringMatchTyped,
    singleSubstringFromFilter,
);

export default mSSingleSubstringMatch;
