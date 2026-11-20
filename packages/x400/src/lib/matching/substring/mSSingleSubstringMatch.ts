import { ASN1Element } from "@wildboar/asn1";
import {
    createSubstringsMatcher,
    type AssertedSubstring,
    type Matcher,
} from "@wildboar/x500";
import type { FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import { decodeMSStringElement } from "../equality/orAddressUtilities.js";

type SingleSubstring =
    | AssertedSubstring<string>
    | { unrecognized: true };

function msStringElementToString (el: ASN1Element): string {
    return decodeMSStringElement(el);
}

function normalizeSingleSubstrings (assertion: SingleSubstring[]): SingleSubstring[] {
    return assertion.map((item): SingleSubstring => {
        if ("initial" in item) {
            return { initial: item.initial.toUpperCase() };
        }
        if ("any_" in item) {
            return { any_: item.any_.toUpperCase() };
        }
        if ("final" in item) {
            return { final: item.final.toUpperCase() };
        }
        return item;
    });
}

export
const mSSingleSubstringMatch: Matcher = createSubstringsMatcher(
    (el: ASN1Element): SingleSubstring[] => [{ any_: msStringElementToString(el) }],
    (assertion: SingleSubstring[], value): boolean => {
        const v: string = decodeMSStringElement(value).normalize("NFC").toUpperCase();
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
                return { initial: msStringElementToString(item.initial) };
            }
            if ("any_" in item) {
                return { any_: msStringElementToString(item.any_) };
            }
            if ("final" in item) {
                return { final: msStringElementToString(item.final) };
            }
            return { unrecognized: true };
        });
    },
    normalizeSingleSubstrings,
);

export default mSSingleSubstringMatch;
