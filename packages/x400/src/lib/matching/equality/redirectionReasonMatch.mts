import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    _decode_RedirectionReason,
} from "@wildboar/x400/MTSAbstractService";
import {
    _decode_RedirectionHistory,
} from "@wildboar/x400/MTSAbstractService";

export
function redirectionReasonMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    const a = _decode_RedirectionReason(assertion);
    const v = _decode_RedirectionHistory(value);
    for (const rh of v) {
        if (rh.redirection_reason === a) {
            return true;
        }
    }
    return false;
}

redirectionReasonMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const redirectionReasonMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    redirectionReasonMatchTyped,
);

export default redirectionReasonMatch;
