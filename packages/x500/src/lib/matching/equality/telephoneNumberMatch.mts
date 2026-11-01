import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { stringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

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
 * @param assertion Presented number, with hyphens and spaces already removed.
 * @param value Stored `TelephoneNumber`, or that number already
 *  normalized. `MATCH_FLAG_VALUE_NORMALIZED` skips removal.
 */
export
function telephoneNumberMatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = typeof value === "string" ? value : value.printableString;
    const stored = (flags & MATCH_FLAG_VALUE_NORMALIZED) ? raw : normalizeTelephoneNumber(raw);
    return stringsEqual(assertion, stored, flags & MATCH_FLAG_CONSTANT_TIME);
}

telephoneNumberMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `telephoneNumberMatch` as a `Matcher`.
 */
export
const telephoneNumberMatch: Matcher = createEqualityMatcher(
    (el) => normalizeTelephoneNumber(el.printableString),
    telephoneNumberMatchTyped,
);

export default telephoneNumberMatch;
