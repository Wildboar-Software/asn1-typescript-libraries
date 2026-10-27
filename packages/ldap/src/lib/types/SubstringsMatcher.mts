import type { ASN1Element } from "@wildboar/asn1";
import type { SubstringFilter } from "../modules/Lightweight-Directory-Access-Protocol-V3/SubstringFilter.ta.mjs";

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
 * @param assertion Encoded assertion, or the substrings filter item.
 * @param value One stored attribute value, already decoded.
 * @returns Whether the assertion matches the value.
 */
export
type SubstringsFunction = (
    assertion: ASN1Element | SubstringFilter,
    value: ASN1Element,
) => boolean;

export type { SubstringsFunction as default };
