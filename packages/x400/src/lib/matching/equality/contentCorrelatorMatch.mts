import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import {
    _decode_ContentCorrelator,
} from "@wildboar/x400/MTSAbstractService";

// ContentCorrelator ::= CHOICE {ia5text  IA5String,
//     octets   OCTET STRING
// }

export
function contentCorrelatorMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
): boolean | undefined {
    const a = _decode_ContentCorrelator(assertion);
    const v = _decode_ContentCorrelator(value);
    if (("octets" in a) && ("octets" in v)) {
        return !Buffer.compare(a.octets, v.octets);
    } else if (("ia5text" in a) && ("ia5text" in v)) {
        return (a.ia5text.trim().replace(/\s+/g, " ") === v.ia5text.trim().replace(/\s+/g, " ")); // case-sensitive.
    } else {
        return false;
    }
}

contentCorrelatorMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const contentCorrelatorMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    contentCorrelatorMatchTyped,
);

export default contentCorrelatorMatch;
