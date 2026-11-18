import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_MSString,
} from "@wildboar/x400/MSMatchingRules";
import { msStringToString } from "./orAddressUtilities.js";

export
const mSStringMatch: Matcher = createEqualityMatcher(
    _decode_MSString,
    (assertion, value): boolean => {
        const a = msStringToString(assertion);
        const v = msStringToString(_decode_MSString(value));
        return (
            a.trim().replace(/\s+/g, " ").toUpperCase()
            === v.trim().replace(/\s+/g, " ").toUpperCase()
        );
    },
);

export default mSStringMatch;
