import type { ASN1Element } from "@wildboar/asn1";
import type { FilterItem_substrings } from "../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { EqualityMatcherGetter } from "./MatchFlags.mjs";

/**
 * A substrings matching rule, applied like an equality rule.
 *
 * `assertion` is an encoded assertion (`ASN1Element`) or a DAP
 * `FilterItem` substrings alternative. The rule's separately exported
 * `*FromFilter` converts that filter item into `SubstringAssertion` or
 * `OctetSubstringAssertion`; the match function accepts either form.
 * `undefined` means the filter item could not be converted.
 *
 * `flags` uses `MATCH_FLAG_ASSERTION_PREPPED` and
 * `MATCH_FLAG_VALUE_PREPPED`. When a bit is set, that side is already
 * prepared and the rule does not prepare it again.
 *
 * Pieces are matched in order and do not overlap.
 */
export type SubstringsMatcher = (
    assertion: ASN1Element | FilterItem_substrings,
    value: ASN1Element,
    getEqualityMatcher?: EqualityMatcherGetter,
    flags?: number,
) => boolean | undefined;

export type { SubstringsMatcher as default };
