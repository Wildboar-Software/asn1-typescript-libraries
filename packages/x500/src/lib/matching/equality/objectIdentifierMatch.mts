import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { ObjectIdentifierInput } from "../readValue.mjs";
import { readObjectIdentifier } from "../readValue.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.501 (10/2019), clause 13.5.2
 * `objectIdentifierMatch` (also 8.9.6).
 *
 * TRUE iff both OBJECT IDENTIFIER values have the same number of
 * integral components and each corresponding component is equal.
 *
 * @param assertion Presented object identifier.
 * @param value Stored object identifier, or that identifier already
 *  decoded. A dotted-decimal string is also accepted.
 */
export
function objectIdentifierMatchTyped (
    assertion: OBJECT_IDENTIFIER,
    value: ObjectIdentifierInput,
): boolean | undefined {
    return assertion.isEqualTo(readObjectIdentifier(value));
}

objectIdentifierMatchTyped satisfies TypedEquationFunction<OBJECT_IDENTIFIER>;

/**
 * `objectIdentifierMatch` as a `Matcher`.
 */
export
const objectIdentifierMatch: Matcher = createEqualityMatcher(
    (el) => el.objectIdentifier,
    objectIdentifierMatchTyped,
);

export default objectIdentifierMatch;
