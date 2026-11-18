import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import { _decode_SequenceNumber } from "@wildboar/x400/MSAbstractService";
import { _decode_IPMLocation } from "@wildboar/x400/IPMSMessageStoreAttributes";

export
const iPMLocationMatch: Matcher = createEqualityMatcher(
    _decode_SequenceNumber,
    (assertion, value): boolean => {
        const v = _decode_IPMLocation(value);
        if (!("stored" in v)) {
            return false;
        }
        const a = Number(assertion);
        for (const sn of v.stored) {
            if (a === Number(sn)) {
                return true;
            }
        }
        return false;
    },
);

export default iPMLocationMatch;
