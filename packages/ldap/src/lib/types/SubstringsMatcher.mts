import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { SubstringFilter } from "../modules/Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta.mjs";
import type EqualityMatcher from "./EqualityMatcher.mjs";

/**
 * @summary Match one stored value against a whole substring assertion.
 * @description
 *
 * `assertion` is an encoded assertion (`ASN1Element`) or the LDAP
 * substrings filter (`SubstringFilter`). That filter is the LDAP
 * counterpart of X.500 `FilterItem_substrings`: its components use the
 * equality assertion syntax, and the matcher applies them in order
 * without overlap.
 *
 * `getEqualityMatcher` has the same role as on `EqualityMatcher`.
 * `flags` carries `MATCH_FLAG_ASSERTION_PREPPED` and
 * `MATCH_FLAG_VALUE_PREPPED`.
 *
 * @param assertion Encoded assertion, or the substrings filter item.
 * @param value One stored attribute value, already decoded.
 * @param getEqualityMatcher Equality rule for a nested attribute type.
 * @param flags Preparation bits. See `MatchFlags`.
 * @returns Whether the assertion matches the value.
 */
export
type SubstringsFunction = (
    assertion: ASN1Element | SubstringFilter,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
    flags?: number,
) => boolean;

export type { SubstringsFunction as default };
