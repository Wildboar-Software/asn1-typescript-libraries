import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { FilterItem_substrings } from "../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type EqualityMatcher from "./EqualityMatcher.mjs";

/**
 * A substrings matching rule, applied like an equality rule.
 *
 * `assertion` is an encoded assertion (`ASN1Element`) or a DAP
 * `FilterItem` substrings alternative. The rule's separately exported
 * `*FromFilter` converts that filter item into `SubstringAssertion` or
 * `OctetSubstringAssertion`; the match function accepts either form.
 * `undefined` means the filter item could not be converted.
 *
 * Pieces are matched in order and do not overlap.
 */
export type SubstringsMatcher = (
    assertion: ASN1Element | FilterItem_substrings,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
) => boolean | undefined;

export type { SubstringsMatcher as default };
