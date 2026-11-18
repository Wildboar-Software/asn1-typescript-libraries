import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_RedirectionReason,
} from "@wildboar/x400/MTSAbstractService";
import {
    _decode_RedirectionHistory,
} from "@wildboar/x400/MTSAbstractService";

export
const redirectionReasonMatch: Matcher = createEqualityMatcher(
    _decode_RedirectionReason,
    (assertion, value): boolean => {
        const v = _decode_RedirectionHistory(value);
        for (const rh of v) {
            if (rh.redirection_reason === assertion) {
                return true;
            }
        }
        return false;
    },
);

export default redirectionReasonMatch;
