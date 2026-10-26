import type { ASN1Element } from "@wildboar/asn1";

/**
 * Decoded substrings of one LDAP `SubstringFilter`, in assertion order.
 * `initial` is present only when it was the first component. `final` is
 * present only when it was the last. `any` preserves the order of the
 * `any` components between them.
 */
export
interface DecodedSubstrings {
    readonly initial?: ASN1Element;
    readonly any: readonly ASN1Element[];
    readonly final?: ASN1Element;
}

/**
 * @summary Match one stored value against a whole substring assertion.
 * @description
 *
 * LDAP substring-filter components use the equality assertion syntax.
 * `evaluateFilter` decodes every component and passes them together.
 * The matcher applies the substrings rule to that whole assertion.
 * Pieces are matched in order and do not overlap.
 *
 * @param assertion Every substring of the filter, already decoded.
 * @param value One stored attribute value, already decoded.
 * @returns Whether the assertion matches the value.
 */
export
type SubstringsFunction = (
    assertion: DecodedSubstrings,
    value: ASN1Element,
) => boolean;

export type { SubstringsFunction as default };
