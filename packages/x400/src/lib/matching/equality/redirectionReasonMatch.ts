import {
    ASN1Construction,
    ASN1ConstructionError,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_RedirectionReason } from "@wildboar/x400/MTSAbstractService";

function readRedirectionReasonFromElement (redirectionEl: BERElement): number | bigint {
    if (
        (redirectionEl.tagClass !== ASN1TagClass.universal)
        || (redirectionEl.tagNumber !== ASN1UniversalType.sequence)
        || (redirectionEl.construction !== ASN1Construction.constructed)
    ) {
        throw new ASN1ConstructionError("redirectionReasonMatch: expected Redirection SEQUENCE", redirectionEl);
    }
    const bytes = redirectionEl.value;
    const el = new BERElement();
    const secondOffset = el.fromBytes(bytes, true);
    if (secondOffset >= bytes.length) {
        throw new ASN1ConstructionError("redirectionReasonMatch: truncated Redirection", redirectionEl);
    }
    el.fromBytes(bytes.subarray(secondOffset), true);
    return el.enumerated;
}

export
const redirectionReasonMatch: Matcher = createEqualityMatcher(
    _decode_RedirectionReason,
    (assertion, value): boolean => {
        if (
            (value.tagClass !== ASN1TagClass.universal)
            || (value.tagNumber !== ASN1UniversalType.sequence)
            || (value.construction !== ASN1Construction.constructed)
        ) {
            throw new ASN1ConstructionError("redirectionReasonMatch: expected SEQUENCE", value);
        }
        const bytes = value.value;
        if (bytes.length === 0) {
            throw new ASN1ConstructionError("redirectionReasonMatch: empty SEQUENCE", value);
        }
        const first = new BERElement();
        const secondOffset = first.fromBytes(bytes, true);
        if (secondOffset < bytes.length) {
            const second = new BERElement();
            second.fromBytes(bytes.subarray(secondOffset), true);
            // Single `Redirection` (`mt-redirection-history`, ITU-T Rec. X.413 §11.2.69)
            if (
                (second.tagClass === ASN1TagClass.universal)
                && (second.tagNumber === ASN1UniversalType.enumerated)
            ) {
                return second.enumerated == assertion;
            }
        }
        // `RedirectionHistory` (`SEQUENCE SIZE (1..ub-redirections) OF Redirection`)
        const item = new BERElement();
        let i = 0;
        while (i < bytes.length) {
            i += item.fromBytes(bytes.subarray(i), true);
            if (readRedirectionReasonFromElement(item) == assertion) {
                return true;
            }
        }
        return false;
    },
    undefined,
    true,
);

export default redirectionReasonMatch;
