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
    return booleanMatchTyped(
        typeof assertion === "boolean" ? assertion : assertion.boolean,
        typeof value === "boolean" ? value : value.boolean,
    );
}

/**
 * `booleanMatch` on two booleans.
 *
 * @param assertion Presented boolean.
 * @param value Stored boolean.
 * @returns `true` when both are TRUE or both are FALSE.
 */
export
function booleanMatchTyped (assertion: boolean, value: boolean): boolean {
    return assertion === value;
}

export default booleanMatch;
