import { ASN1Element, BERElement, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Matcher } from "@wildboar/x500";

// ORAddressAndOptionalDirectoryName is just an alias for ORName.
//
// The rule returns true if, and only if, the presented value and at least one
// value of the attribute contains an OR-address-and-optional-directory-name
// which matches according to the supplied OR-name rule.

export
function matchRedirectionOrDLExpansionHistory<A> (
    inner: (
        assertion: A,
        value: ASN1Element,
        getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
        flags?: number,
    ) => boolean | undefined,
): (
    assertion: A,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
) => boolean {
    return (assertion, value, getEqualityMatcher, flags): boolean => {
        return value.sequenceOf.some((el) => {
            const v = new BERElement();
            v.fromBytes(el.value); // This decodes just the first element of the SEQUENCE.

            // First, assume that the evaluated value is of type
            // `DLExpansionHistory`. Therefore, `el`, as we have decoded it,
            // should be of type `DLExpansion` and `v` should be the `dl`
            // field of that `DLExpansion`.
            try {
                if (inner(assertion, v, getEqualityMatcher, flags)) {
                    return true;
                }
            } catch {}
            // ...If that failed, maybe the evaluated value is actually of type
            // `RedirectionHistory`, in which case, `el` is of type
            // `Redirection` and `v` is of type `IntendedRecipientName`, so we
            // have to evaluate its first encoded component.
            try {
                if (inner(assertion, v.sequence[0], getEqualityMatcher, flags)) {
                    return true;
                }
            } catch {}
            return false;
        });
    };
}

export default matchRedirectionOrDLExpansionHistory;
