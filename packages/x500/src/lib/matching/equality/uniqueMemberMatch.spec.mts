import { FALSE_BIT, TRUE_BIT } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
} from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { commonName } from "../../modules/SelectedAttributeTypes/commonName.oa.mjs";
import {
    NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import uniqueMemberMatch from "./uniqueMemberMatch.mjs";

function dn (label: string): NameAndOptionalUID["dn"] {
    return [[
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ printableString: label }, DER),
        ),
    ]];
}

function member (label: string, uid?: Uint8ClampedArray) {
    return _encode_NameAndOptionalUID(new NameAndOptionalUID(dn(label), uid), DER);
}

const UID_A = new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT, TRUE_BIT ]);
const UID_B = new Uint8ClampedArray([ TRUE_BIT, FALSE_BIT, FALSE_BIT ]);
const UID_A_TRAILING_ZERO = new Uint8ClampedArray([
    TRUE_BIT, FALSE_BIT, TRUE_BIT, FALSE_BIT,
]);

describe("uniqueMemberMatch", () => {
    it("matches equal distinguished names when both uids are absent", () => {
        expect(uniqueMemberMatch(member("alice"), member("alice"))).toBe(true);
    });

    it("matches a presented uid against a stored value with no uid", () => {
        expect(uniqueMemberMatch(member("alice", UID_A), member("alice"))).toBe(true);
    });

    it("rejects a presented value with no uid when the stored uid is present", () => {
        expect(uniqueMemberMatch(member("alice"), member("alice", UID_A))).toBe(false);
    });

    it("matches when both uids are the same bit string", () => {
        expect(uniqueMemberMatch(
            member("alice", UID_A),
            member("alice", new Uint8ClampedArray(UID_A)),
        )).toBe(true);
    });

    it("rejects differing uids and treats trailing zero bits as significant", () => {
        expect(uniqueMemberMatch(member("alice", UID_A), member("alice", UID_B))).toBe(false);
        expect(uniqueMemberMatch(
            member("alice", UID_A),
            member("alice", UID_A_TRAILING_ZERO),
        )).toBe(false);
    });

    it("rejects differing distinguished names even when the stored uid is absent", () => {
        expect(uniqueMemberMatch(member("alice", UID_A), member("bob"))).toBe(false);
        expect(uniqueMemberMatch(member("alice"), member("bob"))).toBe(false);
    });
});
