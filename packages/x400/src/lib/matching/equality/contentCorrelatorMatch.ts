import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { bytesEqual, stringsEqual } from "../constantTime.js";
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
        const ct = flags & MATCH_FLAG_CONSTANT_TIME;
        if (("octets" in a) && ("octets" in v)) {
            return bytesEqual(a.octets, v.octets, ct);
        }
        if (("ia5text" in a) && ("ia5text" in v)) {
            const vText = prepareMSStringValue(v.ia5text, false, flags);
            return stringsEqual(a.ia5text, vText, ct);
        }
        return false;
    },
    undefined,
    false,
    normalizeContentCorrelator,
);

export default contentCorrelatorMatch;
