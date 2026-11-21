import {
    ASN1Construction,
    type ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
} from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_SequenceNumber } from "@wildboar/x400/MSAbstractService";

// IPMLocation ::= CHOICE {
//     stored  SET OF SequenceNumber,
//     absent  NULL,
//     ...
// }
export
const iPMLocationMatch: Matcher = createEqualityMatcher(
    _decode_SequenceNumber,
    (assertion, value: ASN1Element): boolean | undefined => {
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
        const bytes = value.value;
        const el = new BERElement();
        let i = 0;
        while (i < bytes.length) {
            i += el.fromBytes(bytes.subarray(i), true);
            // Loose equality so a number matches the same bigint.
            if (el.integer == assertion) {
                return true;
            }
        }
        return false;
    },
    undefined,
    true,
);

export default iPMLocationMatch;
