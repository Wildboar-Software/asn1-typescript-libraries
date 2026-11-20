import {
    ASN1ConstructionError,
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import type { TypedEquationFunction } from "@wildboar/x500";
import {
    _decode_DLExpansion,
    _decode_Redirection,
} from "@wildboar/x400/MTSAbstractService";

// ORAddressAndOptionalDirectoryName is just an alias for ORName.
//
// Per ITU-T Rec. X.413 §§11.2.28 and 11.2.69, `mt-dl-expansion-history` and
// `mt-redirection-history` are multi-valued MS attributes whose individual
// values have syntax `DLExpansion` and `Redirection` respectively. We also
// accept `DLExpansionHistory` (`SEQUENCE SIZE (1..MAX) OF DLExpansion`) and
// `RedirectionHistory` (`SEQUENCE SIZE (1..MAX) OF Redirection`) in case an
// envelope field is evaluated directly.

function extractORNameElements (value: ASN1Element): ASN1Element[] {
    if (
        (value.tagClass !== ASN1TagClass.universal)
        || (value.tagNumber !== ASN1UniversalType.sequence)
    ) {
        throw new ASN1ConstructionError(
            "redirectionOrDLExpansionMatch: expected SEQUENCE",
            value,
        );
    }
    const seq = value.sequence;
    if (seq.length === 0) {
        throw new ASN1ConstructionError(
            "redirectionOrDLExpansionMatch: empty SEQUENCE",
            value,
        );
    }
    // Single `DLExpansion`: `SEQUENCE { dl [APPLICATION 0] ORName, dl-expansion-time Time }`
    if (
        (seq[0].tagClass === ASN1TagClass.application)
        && (seq[0].tagNumber === 0)
    ) {
        _decode_DLExpansion(value);
        return [ seq[0] ];
    }
    // Single `Redirection`: `SEQUENCE { intended-recipient-name IntendedRecipientName, redirection-reason RedirectionReason }`
    if (
        (seq.length >= 2)
        && (seq[0].tagClass === ASN1TagClass.universal)
        && (seq[0].tagNumber === ASN1UniversalType.sequence)
        && (seq[1].tagClass === ASN1TagClass.universal)
        && (seq[1].tagNumber === ASN1UniversalType.enumerated)
    ) {
        _decode_Redirection(value);
        return [ seq[0].sequence[0] ];
    }
    // `DLExpansionHistory` or `RedirectionHistory` (`SEQUENCE SIZE (1..MAX) OF ...`)
    if (
        (seq[0].tagClass === ASN1TagClass.universal)
        && (seq[0].tagNumber === ASN1UniversalType.sequence)
    ) {
        const firstInner = seq[0].sequence;
        if (firstInner.length === 0) {
            throw new ASN1ConstructionError(
                "redirectionOrDLExpansionMatch: empty history element",
                seq[0],
            );
        }
        if (
            (firstInner[0].tagClass === ASN1TagClass.application)
            && (firstInner[0].tagNumber === 0)
        ) {
            return seq.map((item) => {
                _decode_DLExpansion(item);
                return item.sequence[0];
            });
        }
        return seq.map((item) => {
            _decode_Redirection(item);
            return item.sequence[0].sequence[0];
        });
    }
    throw new ASN1ConstructionError(
        "redirectionOrDLExpansionMatch: unrecognized stored value structure",
        value,
    );
}

export
function matchRedirectionOrDLExpansionHistory<A> (
    inner: TypedEquationFunction<A>,
): TypedEquationFunction<A> {
    return (assertion, value, getEqualityMatcher, flags): boolean | undefined => {
        const targets = extractORNameElements(value);
        let sawUndefined = false;
        for (const target of targets) {
            const result = inner(assertion, target, getEqualityMatcher, flags);
            if (result === true) {
                return true;
            }
            if (result === undefined) {
                sawUndefined = true;
            }
        }
        return sawUndefined ? undefined : false;
    };
}

export default matchRedirectionOrDLExpansionHistory;
