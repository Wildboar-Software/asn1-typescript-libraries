import { External, ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodePrintableString, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/dn";
import { describe, expect, it } from "vitest";
import { EDIPartyName } from "./EDIPartyName.ta.mjs";
import { generalNameToASN1String } from "./generalNameToASN1String.mjs";

describe("generalNameToASN1String", () => {
    it("quotes IA5 alternatives and doubles quotes", () => {
        expect(generalNameToASN1String({ rfc822Name: 'a"b@example.com' }))
            .toBe('rfc822Name : "a""b@example.com"');
        expect(generalNameToASN1String({ dNSName: "example.com" }))
            .toBe('dNSName : "example.com"');
    });

    it("prints an IP address as an hstring of the raw octets", () => {
        expect(generalNameToASN1String({ iPAddress: new Uint8Array([192, 0, 2, 1]) }))
            .toBe("iPAddress : 'C0000201'H");
    });

    it("prints a directory name and an EDI party name in value notation", () => {
        const directory = generalNameToASN1String({
            directoryName: {
                rdnSequence: [[
                    new AttributeTypeAndValue(
                        ObjectIdentifier.fromString("2.5.4.3"),
                        _encodePrintableString("Bob", BER),
                    ),
                ]],
            },
        });
        expect(directory.startsWith("directoryName : ")).toBe(true);
        expect(directory).toContain("Bob");
        expect(generalNameToASN1String({
            ediPartyName: new EDIPartyName(undefined, { printableString: "Acme" }),
        })).toBe('ediPartyName : { partyName printableString : "Acme" }');
    });

    it("prints an otherName type-id and the value element's notation", () => {
        const text = generalNameToASN1String({
            otherName: new External(
                ObjectIdentifier.fromString("1.2.3"),
                undefined,
                undefined,
                _encodeUTF8String("hi", BER),
            ),
        });
        expect(text.startsWith("otherName : { type-id 1.2.3, value ")).toBe(true);
    });

    it("prints a registeredID as a dotted identifier", () => {
        expect(generalNameToASN1String({
            registeredID: ObjectIdentifier.fromString("2.5.4.3"),
        })).toBe("registeredID : { 2 5 4 3 }");
    });
});
