import { Buffer } from "node:buffer";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    type ContentCorrelator,
    _decode_ContentCorrelator,
} from "@wildboar/x400/MTSAbstractService";
import { normalizeMSString, prepareMSStringValue } from "./orAddressUtilities.js";

function normalizeContentCorrelator (assertion: ContentCorrelator): ContentCorrelator {
    if ("ia5text" in assertion) {
        return { ia5text: normalizeMSString(assertion.ia5text, false) };
    }
    return assertion;
}

export
const contentCorrelatorMatch: Matcher = createEqualityMatcher(
    _decode_ContentCorrelator,
    (assertion, value, _getEqualityMatcher, flags = 0): boolean => {
        const a = assertion;
        const v = _decode_ContentCorrelator(value);
        if (("octets" in a) && ("octets" in v)) {
            return !Buffer.compare(a.octets, v.octets);
        } else if (("ia5text" in a) && ("ia5text" in v)) {
            return (a.ia5text === prepareMSStringValue(v.ia5text, false, flags)); // case-sensitive.
        } else {
            return false;
        }
    },
    undefined,
    false,
    normalizeContentCorrelator,
);

export default contentCorrelatorMatch;
