import { Buffer } from "node:buffer";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_ContentCorrelator,
} from "@wildboar/x400/MTSAbstractService";
import { normalizeMSString } from "./orAddressUtilities.js";

// ContentCorrelator ::= CHOICE {ia5text  IA5String,
//     octets   OCTET STRING
// }

export
const contentCorrelatorMatch: Matcher = createEqualityMatcher(
    _decode_ContentCorrelator,
    (assertion, value): boolean => {
        const a = assertion;
        const v = _decode_ContentCorrelator(value);
        if (("octets" in a) && ("octets" in v)) {
            return !Buffer.compare(a.octets, v.octets);
        } else if (("ia5text" in a) && ("ia5text" in v)) {
            return (normalizeMSString(a.ia5text, false) === normalizeMSString(v.ia5text, false)); // case-sensitive.
        } else {
            return false;
        }
    },
);

export default contentCorrelatorMatch;
