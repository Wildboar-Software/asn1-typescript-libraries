import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.1 `booleanMatch`.
 *
 * TRUE iff both BOOLEAN values are TRUE or both are FALSE.
 *
 * @param assertion Presented BOOLEAN.
 * @param value Stored BOOLEAN, or that boolean already decoded.
 */
export
function booleanMatchTyped (
    assertion: boolean,
    value: boolean | ASN1Element,
): boolean | undefined {
    const stored = typeof value === "boolean" ? value : value.boolean;
    return assertion === stored;
}

booleanMatchTyped satisfies TypedEquationFunction<boolean>;

/**
 * `booleanMatch` as a `Matcher`.
 */
export
const booleanMatch: Matcher = createEqualityMatcher(
    (el) => el.boolean,
    booleanMatchTyped,
);

export default booleanMatch;
