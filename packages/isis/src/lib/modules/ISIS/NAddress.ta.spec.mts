import { describe, expect, it } from "vitest";
import * as $ from "@wildboar/asn1/functional";
import { sNPADTEAddress } from "@wildboar/nlm";
import {
    type NAddress,
    _decode_NAddress,
    _encode_NAddress,
} from "./NAddress.ta.mjs";
import {
    SNPAAddress,
    _decode_SNPAAddress,
    _encode_SNPAAddress,
} from "./SNPAAddress.ta.mjs";

describe("NAddress", () => {
    it("round-trips an NSAP-sized octet string", () => {
        const value: NAddress = new Uint8Array([0x47, 0x00, 0x11]);
        const decoded = _decode_NAddress(_encode_NAddress(value, $.BER));
        expect(Array.from(decoded)).toEqual(Array.from(value));
    });
});

describe("SNPAAddress", () => {
    it("round-trips type and address from NLM", () => {
        const value = new SNPAAddress(sNPADTEAddress, new Uint8Array([0x12, 0x34]));
        const decoded = _decode_SNPAAddress(_encode_SNPAAddress(value, $.BER));
        expect(decoded.type_.toString()).toBe(sNPADTEAddress.toString());
        expect(Array.from(decoded.address)).toEqual([0x12, 0x34]);
    });
});
