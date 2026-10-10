import { External, ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeIA5String, _encodeUTF8String } from "@wildboar/asn1/functional";
import { describe, expect, it } from "vitest";
import { otherNameToString } from "./otherNameToString.mjs";

describe("otherNameToString", () => {
    it("prints a UPN and an XmppAddr", () => {
        expect(otherNameToString(new External(
            ObjectIdentifier.fromString("1.3.6.1.4.1.311.20.2.3"),
            undefined,
            undefined,
            _encodeUTF8String("user@example.com", BER),
        ))).toBe("UPN:user@example.com");
        expect(otherNameToString(new External(
            ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.5"),
            undefined,
            undefined,
            _encodeIA5String("user@example.com", BER),
        ))).toBe("XMPPAddr:user@example.com");
    });

    it("prints an unknown type as an OID and hex, and refuses a malformed one", () => {
        const value = _encodeUTF8String("hi", BER);
        const text = otherNameToString(new External(
            ObjectIdentifier.fromString("1.2.3"),
            undefined,
            undefined,
            value,
        ));
        expect(text.startsWith("1.2.3:0x")).toBe(true);
        expect(otherNameToString(new External(
            undefined,
            undefined,
            undefined,
            value,
        ))).toBe("[Cannot display malformed OTHER-NAME]");
    });
});
