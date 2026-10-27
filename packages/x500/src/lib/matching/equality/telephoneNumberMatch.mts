import type { ASN1Element } from "@wildboar/asn1";
import type { EqualityMatcherGetter } from "../../types/MatchFlags.mjs";
import {
    assertionAlreadyPrepped,
    valueAlreadyPrepped,
} from "../../types/MatchFlags.mjs";

function normalizeTelephoneNumber (telephoneNumber: string): string {
    return telephoneNumber.replace(/[- ]/g, "");
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.8 `telephoneNumberMatch`.
 *
 * Equality of `TelephoneNumber` (clause 6.7.1). Same as
 * `caseIgnoreMatch` except hyphens and spaces are insignificant
 * and are removed during insignificant-character removal.
 *
 * DEVIATION: We do not lowercase the telephone number, because it is forbidden
 * from containing alphabetic characters anyway.
 *
 * Each argument may be an `ASN1Element` or a string.
 * `TelephoneNumber` decodes to `PrintableString`.
 */
export
function telephoneNumberMatch (
    assertion: ASN1Element | string,
    value: ASN1Element | string,
    _getEqualityMatcher?: EqualityMatcherGetter,
    flags: number = 0,
): boolean {
    return telephoneNumberMatchTyped(
        typeof assertion === "string" ? assertion : assertion.printableString,
        typeof value === "string" ? value : value.printableString,
        flags,
    );
}

/**
 * `telephoneNumberMatch` on two numbers that already have hyphens
 * and spaces removed.
 *
 * @param assertion Prepared presented number.
 * @param value Prepared stored number.
 * @returns `true` when the numbers are equal.
 */
export
function telephoneNumberMatchPrepped (assertion: string, value: string): boolean {
    return assertion === value;
}

/**
 * `telephoneNumberMatch` on two telephone numbers. Hyphens and
 * spaces are removed here unless `flags` says that side is already
 * prepared.
 *
 * @param assertion Presented number.
 * @param value Stored number.
 * @param flags `MATCH_FLAG_ASSERTION_PREPPED` and
 *  `MATCH_FLAG_VALUE_PREPPED` skip hyphen and space removal of that side.
 * @returns `true` when the normalized numbers are equal.
 */
export
function telephoneNumberMatchTyped (
    assertion: string,
    value: string,
    flags: number = 0,
): boolean {
    const a = assertionAlreadyPrepped(flags) ? assertion : normalizeTelephoneNumber(assertion);
    const v = valueAlreadyPrepped(flags) ? value : normalizeTelephoneNumber(value);
    return telephoneNumberMatchPrepped(a, v);
}

export default telephoneNumberMatch;
