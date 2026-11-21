import {
    ASN1Construction,
    type ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_CirculationMember } from "@wildboar/x400/IPMSHeadingExtensions";

// ITU-T Rec. X.420 (06/1999), §19.7.15: returns `true` iff `checked` is present
// on the stored `CirculationMember`. Lazily scans top-level elements with a
// single zero-copy `BERElement` and returns immediately on the checkmark tag.
export
const circulationMemberCheckmarkMatch: Matcher = createEqualityMatcher(
    _decode_CirculationMember,
    (_assertion, value: ASN1Element): boolean | undefined => {
        if (value.construction !== ASN1Construction.constructed) {
            return undefined;
        }
        const bytes = value.value;
        const el = new BERElement();
        let i = 0;
        while (i < bytes.length) {
            i += el.fromBytes(bytes.subarray(i), true);
            if (
                (el.tagClass === ASN1TagClass.universal)
                && (
                    (el.tagNumber === ASN1UniversalType.nill) // simple
                    || (el.tagNumber === ASN1UniversalType.generalizedTime) // timestamped
                    || (el.tagNumber === ASN1UniversalType.sequence) // signed
                )
            ) {
                return true;
            }
        }
        return false;
    },
);

export default circulationMemberCheckmarkMatch;
