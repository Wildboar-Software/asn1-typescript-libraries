import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../modules/InformationFramework/index.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../types/matching.mjs";
import compareElements from "../comparators/compareElements.mjs";

function anyTypeMatchInner (
    assertion: ASN1Element,
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    _flags: number = 0,
): boolean | undefined {
    return compareElements(assertion, value);
}

anyTypeMatchInner satisfies TypedEquationFunction<ASN1Element>;

// TODO: Document this more.
/**
 * @summary fallback matching rule to use if the proper matching is not known
 * @description
 * 
 * If a matching rule lookup fails, perhaps due to an unrecognized attribute
 * type or unrecognized matching rule, this matching rule may be used as a
 * fallback in some cases. It is very conservative: it only matches identical
 * values, after correcting for possible differences in encoding.
 * 
 * @author Jonathan M. Wilbur
 * @human
 */
export
const anyTypeMatch: Matcher = createEqualityMatcher(
    (el) => el,
    anyTypeMatchInner,
);

export default anyTypeMatch;
