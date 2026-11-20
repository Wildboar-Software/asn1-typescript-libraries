import {
    ASN1ConstructionError,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_Redirection,
    _decode_RedirectionHistory,
    _decode_RedirectionReason,
} from "@wildboar/x400/MTSAbstractService";

export
const redirectionReasonMatch: Matcher = createEqualityMatcher(
    _decode_RedirectionReason,
    (assertion, value): boolean => {
        if (
            (value.tagClass !== ASN1TagClass.universal)
            || (value.tagNumber !== ASN1UniversalType.sequence)
        ) {
            throw new ASN1ConstructionError("redirectionReasonMatch: expected SEQUENCE", value);
        }
        const seq = value.sequence;
        if (seq.length === 0) {
            throw new ASN1ConstructionError("redirectionReasonMatch: empty SEQUENCE", value);
        }
        // Single `Redirection` (`mt-redirection-history`, ITU-T Rec. X.413 §11.2.69)
        if (
            (seq.length >= 2)
            && (seq[0].tagClass === ASN1TagClass.universal)
            && (seq[0].tagNumber === ASN1UniversalType.sequence)
            && (seq[1].tagClass === ASN1TagClass.universal)
            && (seq[1].tagNumber === ASN1UniversalType.enumerated)
        ) {
            const r = _decode_Redirection(value);
            // Loose equality so a number matches the same bigint.
            return r.redirection_reason == assertion;
        }
        // `RedirectionHistory` (`SEQUENCE SIZE (1..ub-redirections) OF Redirection`)
        const v = _decode_RedirectionHistory(value);
        for (const rh of v) {
            if (rh.redirection_reason == assertion) {
                return true;
            }
        }
        return false;
    },
    undefined,
    true,
);

export default redirectionReasonMatch;
