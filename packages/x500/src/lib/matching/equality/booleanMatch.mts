import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.1 `booleanMatch`.
 *
 * TRUE iff both BOOLEAN values are TRUE or both are FALSE.
 *
 * Each argument may be an `ASN1Element` or a JavaScript `boolean`.
 */
export
function booleanMatch (
    assertion: ASN1Element | boolean,
    value: ASN1Element | boolean,
): boolean {
    const presented = typeof assertion === "boolean" ? assertion : assertion.boolean;
    const stored = typeof value === "boolean" ? value : value.boolean;
    return presented === stored;
}

export default booleanMatch;
