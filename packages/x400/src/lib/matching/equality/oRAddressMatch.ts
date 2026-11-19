import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_ORAddress,
} from "@wildboar/x400/MTSAbstractService";
import { orAddressesMatch } from "./orAddressUtilities.js";

export
const oRAddressMatch: Matcher = createEqualityMatcher(
    _decode_ORAddress,
    (assertion, value): boolean => {
        const v = _decode_ORAddress(value);
        return orAddressesMatch(assertion, v);
    },
);

export default oRAddressMatch;
