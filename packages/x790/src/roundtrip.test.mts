import * as $ from "@wildboar/asn1/functional";
import {
    PersonReach,
    _encode_PersonReach,
    _decode_PersonReach,
} from "./lib/modules/X790ASN1Module/PersonReach.ta.mjs";
import { PremisesAddress } from "./lib/modules/X790ASN1Module/PremisesAddress.ta.mjs";

describe("X.790 PersonReach", () => {
    test("round-trips a person reach value", () => {
        const loc = new PremisesAddress("1 Main St", "Springfield", "IL", "62701");
        const original = new PersonReach(
            "42",
            "Jane Doe",
            "+1-555-0100",
            loc,
            "jane@example.com",
            "+1-555-0101",
            "Manager"
        );
        const el = _encode_PersonReach(original, $.BER);
        const decoded = _decode_PersonReach(el);
        expect(decoded).toEqual(original);
        expect(decoded.number_).toBe("42");
        expect(decoded.name).toBe("Jane Doe");
        expect(decoded.phone).toBe("+1-555-0100");
        expect(decoded.loc?.civicAddress).toBe("1 Main St");
        expect(decoded.loc?.city).toBe("Springfield");
    });
});
