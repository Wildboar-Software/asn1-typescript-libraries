import { ASN1Element } from "@wildboar/asn1";
import {
    createSubstringsMatcher,
    type AssertedSubstring,
    type Matcher,
} from "@wildboar/x500";
import type { FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import {
    _decode_MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "../equality/orAddressUtilities.js";

type SingleSubstring =
    | AssertedSubstring<string>
    | { unrecognized: true };

function upperMSString (el: ASN1Element): string {
    return msStringToString(_decode_MSString(el)).toUpperCase();
}

export
const mSSingleSubstringMatch: Matcher = createSubstringsMatcher(
    (el: ASN1Element): SingleSubstring[] => [{ any_: upperMSString(el) }],
    (assertion: SingleSubstring[], value): boolean => {
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
    },
    (items: FilterItem_substrings_strings_Item[]): SingleSubstring[] => {
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
    },
);

export default mSSingleSubstringMatch;
