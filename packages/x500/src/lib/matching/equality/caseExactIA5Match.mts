import type { ASN1Element } from "@wildboar/asn1";
import { prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.1
 * `caseExactIA5Match` (LDAP-defined).
 *
 * Compares IA5String values after string preparation (clause 7.2).
 * TRUE iff the prepared strings have the same number of characters
 * and corresponding characters have the same code point. Case is
 * significant.
 *
 * Each argument may be an `ASN1Element` or a string.
 */
export
function caseExactIA5Match (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
): boolean {
    return caseExactIA5MatchTyped(
        typeof assertion === "string" ? assertion : assertion.ia5String,
        typeof value === "string" ? value : value.ia5String,
    );
}

/**
 * `caseExactIA5Match` on two IA5 strings.
 *
 * @param assertion Presented string.
 * @param value Stored string.
 * @returns `true` when the prepared strings are equal.
 */
export
function caseExactIA5MatchTyped (assertion: string, value: string): boolean {
    const a: string | undefined = prepString(assertion);
    const v: string | undefined = prepString(value);
    if (a === undefined) {
        return false;
    }
    if (v === undefined) {
        return false;
    }
    return (a === v);
}

export default caseExactIA5Match;
