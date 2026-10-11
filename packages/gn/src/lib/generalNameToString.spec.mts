import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodePrintableString, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/dn";
import {
    BuiltInStandardAttributes,
    ORAddress,
} from "@wildboar/or-address";
import { describe, expect, it } from "vitest";
import { EDIPartyName } from "./EDIPartyName.ta.mjs";
import { External } from "@wildboar/asn1";
import { generalNameToString } from "./generalNameToString.mjs";
import { hexToBytes } from "./hex.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");

describe("generalNameToString", () => {
    it("prints each text alternative as alternative:value", () => {
        expect(generalNameToString({ rfc822Name: "User@Example.com" }))
            .toBe("rfc822Name:User@Example.com");
        expect(generalNameToString({ dNSName: "Example.COM" }))
            .toBe("dNSName:Example.COM");
        expect(generalNameToString({
            uniformResourceIdentifier: "HTTPS://Example.com/A",
        })).toBe("uniformResourceIdentifier:HTTPS://Example.com/A");
        expect(generalNameToString({
            registeredID: ObjectIdentifier.fromString("1.2.3"),
        })).toBe("registeredID:1.2.3");
    });

    it("prints a directory name in RFC 4514 form", () => {
        const text = generalNameToString({
            directoryName: {
                rdnSequence: [[
                    new AttributeTypeAndValue(
                        commonName,
                        _encodePrintableString("Bob", BER),
                    ),
                ]],
            },
        });
        expect(text).toBe("directoryName:cn=Bob");
    });

    it("prints an IP address and a name-constraint prefix", () => {
        expect(generalNameToString({ iPAddress: new Uint8Array([192, 0, 2, 1]) }))
            .toBe("iPAddress:192.0.2.1");
        expect(generalNameToString({ iPAddress: hexToBytes("c0000200ffffff00") }))
            .toBe("iPAddress:192.0.2.0/24");
    });

    it("prints an EDI party name and an X.400 address", () => {
        expect(generalNameToString({
            ediPartyName: new EDIPartyName(undefined, { printableString: "Acme" }),
        })).toBe('ediPartyName:{ partyName:"Acme" }');
        const address = new ORAddress(new BuiltInStandardAttributes(
            { iso_3166_alpha2_code: "US" },
            undefined,
            undefined,
            undefined,
            undefined,
            "Wildboar",
        ));
        expect(generalNameToString({ x400Address: address }))
            .toBe(`x400Address:${address.toString()}`);
    });

    it("prints a UPN otherName without doubling the prefix", () => {
        const text = generalNameToString({
            otherName: new External(
                ObjectIdentifier.fromString("1.3.6.1.4.1.311.20.2.3"),
                undefined,
                undefined,
                _encodeUTF8String("user@example.com", BER),
            ),
        });
        expect(text).toBe("otherName:UPN:user@example.com");
    });
});
