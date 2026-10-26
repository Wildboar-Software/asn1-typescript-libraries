import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { FilterItem_substrings } from "../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { OctetSubstringAssertion } from "../modules/SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";
import type { SubstringAssertion } from "../modules/SelectedAttributeTypes/SubstringAssertion.ta.mjs";
import type EqualityMatcher from "./EqualityMatcher.mjs";

/**
 * A substrings matching rule, applied like an equality rule.
 *
 * Call the function with an assertion that is already in the rule's
 * assertion syntax (`SubstringAssertion` or `OctetSubstringAssertion`,
 * encoded). Call `fromFilter` first when the input is a DAP
 * `FilterItem` substrings alternative: those components use the
 * attribute syntax, not the substrings assertion syntax.
 *
 * Pieces are matched in order and do not overlap.
 */
export type SubstringsMatcher = ((
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
) => boolean) & {
    fromFilter: (
        item: FilterItem_substrings,
    ) => ASN1Element | SubstringAssertion | OctetSubstringAssertion | undefined;
};

export type { SubstringsMatcher as default };
