import { DER } from "@wildboar/asn1/functional";
import { _encode_DistinguishedName } from "../../modules/InformationFramework/DistinguishedName.ta.mjs";
import { MATCH_FLAG_USED_FOR_NAME } from "../../types/matching.mjs";
import distinguishedNameMatch_ from "./distinguishedNameMatch.mjs";
import { onStoredValue } from "./onStoredValue.spec.mjs";

const distinguishedNameMatch = onStoredValue(distinguishedNameMatch_);

describe("distinguishedNameMatch", () => {
    it("cannot be used for name matching", () => {
        const root = _encode_DistinguishedName([], DER);

        expect(distinguishedNameMatch(root, root)).toBe(true);
        expect(distinguishedNameMatch(
            root,
            root,
            MATCH_FLAG_USED_FOR_NAME,
        )).toBeUndefined();
    });
});
