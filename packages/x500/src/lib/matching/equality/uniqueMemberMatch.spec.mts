import { DER } from "@wildboar/asn1/functional";
import {
    NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import uniqueMemberMatch from "./uniqueMemberMatch.mjs";

function encode (uid?: Uint8ClampedArray) {
    return _encode_NameAndOptionalUID(new NameAndOptionalUID([], uid), DER);
}

describe("uniqueMemberMatch()", () => {
    it("matches when the stored uid is absent even if the presented uid is present", () => {
        const presented = encode(new Uint8ClampedArray([1, 0, 1]));
        const stored = encode();
        expect(uniqueMemberMatch(presented, stored)).toBe(true);
    });

    it("returns false when the stored uid is present and the presented uid is absent", () => {
        const presented = encode();
        const stored = encode(new Uint8ClampedArray([1, 0, 1]));
        expect(uniqueMemberMatch(presented, stored)).toBe(false);
    });

    it("matches equal uids and rejects unequal uids", () => {
        const a = encode(new Uint8ClampedArray([1, 0, 1]));
        const b = encode(new Uint8ClampedArray([1, 0, 1]));
        const c = encode(new Uint8ClampedArray([1, 1, 1]));
        expect(uniqueMemberMatch(a, b)).toBe(true);
        expect(uniqueMemberMatch(a, c)).toBe(false);
    });
});
