import { ASN1Element, BERElement } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import {
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";

// DLExpansionHistory ::= SEQUENCE SIZE (1..ub-dl-expansions) OF DLExpansion

// DLExpansion ::= SEQUENCE {
//   dl                 ORAddressAndOptionalDirectoryName,
//   dl-expansion-time  Time
// }

// RedirectionHistory ::= SEQUENCE SIZE (1..ub-redirections) OF Redirection

// Redirection ::= SEQUENCE {
//   intended-recipient-name  IntendedRecipientName,
//   redirection-reason       RedirectionReason
// }

// IntendedRecipientName ::= SEQUENCE {
//   intended-recipient  ORAddressAndOptionalDirectoryName,
//   redirection-time    Time
// }

// ORAddressAndOptionalDirectoryName is just an alias for ORName.

// rule compares for equality a presented value with the OR-address-and-
// optional-directory-name component of attribute-values of type Redirection-history or DL-expansion-history.

// The rule returns true if, and only if, the presented value and at least one value of the attribute contains an OR-address-
// and-optional-directory-name which matches according to the OR-name-match rule.

export
function matchRedirectionOrDLExpansionHistory(
    inner: TypedEquationFunction<ASN1Element>,
): TypedEquationFunction<ASN1Element> {
    return (
        assertion: ASN1Element,
        value: ASN1Element,
        getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
        flags: number = 0,
    ): boolean | undefined => {
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
