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
import { _decode_SequenceNumber } from "@wildboar/x400/MSAbstractService";

// IPMLocation ::= CHOICE {
//     stored  SET OF SequenceNumber,
//     absent  NULL,
//     ...
// }
export
const iPMLocationMatch: Matcher = createEqualityMatcher(
    _decode_SequenceNumber,
    (assertion, value: ASN1Element, _getEqualityMatcher, flags = 0): boolean | undefined => {
        if (value.tagClass !== ASN1TagClass.universal) {
            // Unrecognized future `CHOICE` extension.
            return undefined;
        }
        if (value.tagNumber === ASN1UniversalType.nill) {
            return false;
        }
        if (
            (value.tagNumber !== ASN1UniversalType.set)
            || (value.construction !== ASN1Construction.constructed)
        ) {
            return undefined;
        }
        const ct = flags & MATCH_FLAG_CONSTANT_TIME;
        let matched = false;
        const bytes = value.value;
        const el = new BERElement();
        let i = 0;
        while (i < bytes.length) {
            i += el.fromBytes(bytes.subarray(i), true);
            // Loose equality so a number matches the same bigint.
            if (el.integer == assertion) {
                if (!ct) {
                    return true;
                }
                matched = true;
            }
        }
        return matched;
    },
    undefined,
    true,
);

export default iPMLocationMatch;
