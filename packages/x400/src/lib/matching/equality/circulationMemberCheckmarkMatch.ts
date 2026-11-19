import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_CirculationMember } from "@wildboar/x400/IPMSHeadingExtensions";

// This matching rule has a defined assertion syntax, but it does not use it, it seems...
export
const circulationMemberCheckmarkMatch: Matcher = createEqualityMatcher(
    _decode_CirculationMember,
    (_assertion, value: ASN1Element): boolean => {
        return value.set.some((el) => (
            (el.tagClass === ASN1TagClass.universal)
            && (
                (el.tagNumber === ASN1UniversalType.nill) // simple
                || (el.tagNumber === ASN1UniversalType.generalizedTime) // timestamped
                || (el.tagNumber === ASN1UniversalType.sequence) // signed
            )
        ));
    },
);

export default circulationMemberCheckmarkMatch;
