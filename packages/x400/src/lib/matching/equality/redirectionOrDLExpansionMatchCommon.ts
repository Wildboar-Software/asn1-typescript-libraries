import {
    ASN1Construction,
    ASN1ConstructionError,
    type ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import type { TypedEquationFunction } from "@wildboar/x500";

// ORAddressAndOptionalDirectoryName is just an alias for ORName.
//
// Per ITU-T Rec. X.413 §§11.2.28 and 11.2.69, `mt-dl-expansion-history` and
// `mt-redirection-history` are multi-valued MS attributes whose individual
// values have syntax `DLExpansion` and `Redirection` respectively. We also
// accept `DLExpansionHistory` (`SEQUENCE SIZE (1..MAX) OF DLExpansion`) and
// `RedirectionHistory` (`SEQUENCE SIZE (1..MAX) OF Redirection`) in case an
// envelope field is evaluated directly.

function firstChildElement (parent: ASN1Element): BERElement {
    if (parent.construction !== ASN1Construction.constructed) {
        throw new ASN1ConstructionError(
            "redirectionOrDLExpansionMatch: expected constructed element",
            parent,
        );
    }
    const bytes = parent.value;
    if (bytes.length === 0) {
        throw new ASN1ConstructionError(
            "redirectionOrDLExpansionMatch: empty constructed element",
            parent,
        );
    }
    const child = new BERElement();
    child.fromBytes(bytes, true);
    return child;
}

function* extractORNameElements (value: ASN1Element): Generator<ASN1Element> {
    if (
        (value.tagClass !== ASN1TagClass.universal)
        || (value.tagNumber !== ASN1UniversalType.sequence)
        || (value.construction !== ASN1Construction.constructed)
    ) {
        throw new ASN1ConstructionError(
            "redirectionOrDLExpansionMatch: expected SEQUENCE",
            value,
        );
    }
    const bytes = value.value;
    const first = firstChildElement(value);
    // Single `DLExpansion`: `SEQUENCE { dl [APPLICATION 0] ORName, dl-expansion-time Time }`
    if (
        (first.tagClass === ASN1TagClass.application)
        && (first.tagNumber === 0)
    ) {
        yield first;
        return;
    }
    if (
        (first.tagClass !== ASN1TagClass.universal)
        || (first.tagNumber !== ASN1UniversalType.sequence)
    ) {
        throw new ASN1ConstructionError(
            "redirectionOrDLExpansionMatch: unrecognized stored value structure",
            value,
        );
    }
    const innerFirst = firstChildElement(first);
    // Single `Redirection`: `SEQUENCE { intended-recipient-name SEQUENCE { [APPLICATION 0] ORName, ... }, redirection-reason ENUMERATED }`
    // Check second element's tag only if `innerFirst` is `[APPLICATION 0]`, because
    // `DLExpansionHistory` ALSO starts with `SEQUENCE { [APPLICATION 0] ORName, Time }`!
    if (
        (innerFirst.tagClass === ASN1TagClass.application)
        && (innerFirst.tagNumber === 0)
    ) {
        const el = new BERElement();
        const secondOffset = el.fromBytes(bytes, true);
        if (secondOffset < bytes.length) {
            const second = new BERElement();
            second.fromBytes(bytes.subarray(secondOffset), true);
            if (
                (second.tagClass === ASN1TagClass.universal)
                && (second.tagNumber === ASN1UniversalType.enumerated)
            ) {
                yield innerFirst;
                return;
            }
        }
        // `DLExpansionHistory`: `SEQUENCE OF DLExpansion`
        let i = 0;
        while (i < bytes.length) {
            const item = new BERElement();
            i += item.fromBytes(bytes.subarray(i), true);
            yield firstChildElement(item);
        }
        return;
    }
    // `RedirectionHistory`: `SEQUENCE OF Redirection`
    let i = 0;
    while (i < bytes.length) {
        const item = new BERElement();
        i += item.fromBytes(bytes.subarray(i), true);
        yield firstChildElement(firstChildElement(item));
    }
}

export
function matchRedirectionOrDLExpansionHistory<A> (
    inner: TypedEquationFunction<A>,
): TypedEquationFunction<A> {
    return (assertion, value, getEqualityMatcher, flags): boolean | undefined => {
        let sawUndefined = false;
        for (const target of extractORNameElements(value)) {
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
