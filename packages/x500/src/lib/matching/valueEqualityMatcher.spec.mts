import { ObjectIdentifier } from "@wildboar/asn1";
import { DER, _encodeInteger } from "@wildboar/asn1/functional";
import type { Matcher } from "../types/matching.mjs";
import { MATCH_FLAG_DEBUG, MATCH_FLAG_USED_FOR_NAME } from "../types/matching.mjs";
import { valueEqualityMatcher } from "./valueEqualityMatcher.mjs";

describe("valueEqualityMatcher", () => {
    it("marks nested equality comparisons as name matching", () => {
        const type_ = ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]);
        const assertion = _encodeInteger(1, DER);
        const value = _encodeInteger(1, DER);
        let receivedFlags = 0;
        let receivedLookup: unknown;
        const matcher: Matcher = (
            _assertion,
            _value,
            getEqualityMatcher,
            flags = 0,
        ) => {
            receivedFlags = flags;
            receivedLookup = getEqualityMatcher;
            return true;
        };
        const lookup = () => matcher;

        expect(valueEqualityMatcher(lookup, MATCH_FLAG_DEBUG)?.(type_)?.(assertion, value)).toBe(true);
        expect(receivedFlags & MATCH_FLAG_USED_FOR_NAME).toBeTruthy();
        expect(receivedFlags & MATCH_FLAG_DEBUG).toBeTruthy();
        expect(receivedLookup).toBe(lookup);
    });
});
