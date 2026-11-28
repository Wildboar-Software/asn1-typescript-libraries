import {
    ASN1Construction,
    type ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { _decode_CirculationMember } from "@wildboar/x400/IPMSHeadingExtensions";

// Matches `@wildboar/asn1` `_parse_set`'s `components.length + 100` DoS cap
// (`CirculationMember` has 2 root SET components).
const MAX_CIRCULATION_MEMBER_ELEMENTS = 102;

// ITU-T Rec. X.420 (06/1999), §19.7.15: returns `true` iff `checked` is present
// on the stored `CirculationMember`. Lazily scans top-level elements with a
// single zero-copy `BERElement` (iterating all elements in constant-time mode).
export
const circulationMemberCheckmarkMatch: Matcher = createEqualityMatcher(
    _decode_CirculationMember,
    (_assertion, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean | undefined => {
        if (
            (value.tagClass !== ASN1TagClass.universal)
            || (value.tagNumber !== ASN1UniversalType.set)
            || (value.construction !== ASN1Construction.constructed)
        ) {
            return undefined;
        }
        const ct = flags & MATCH_FLAG_CONSTANT_TIME;
        let found = false;
        let hasRecipient = false;
        const bytes = value.value;
        const el = new BERElement();
        let i = 0;
        let count = 0;
        while (i < bytes.length) {
            if (++count > MAX_CIRCULATION_MEMBER_ELEMENTS) {
                return undefined;
            }
            i += el.fromBytes(bytes.subarray(i), true);
            if (el.tagClass === ASN1TagClass.universal) {
                if (
                    (el.tagNumber === ASN1UniversalType.set)
                    && (el.construction === ASN1Construction.constructed)
                ) {
                    hasRecipient = true;
                } else if (
                    (el.tagNumber === ASN1UniversalType.nill) // simple
                    || (el.tagNumber === ASN1UniversalType.generalizedTime) // timestamped
                    || (el.tagNumber === ASN1UniversalType.sequence) // signed
                ) {
                    found = true;
                }
                if (!ct && found && hasRecipient) {
                    return true;
                }
            }
        }
        if (!hasRecipient) {
            return undefined;
        }
        return found;
    },
);

export default circulationMemberCheckmarkMatch;
