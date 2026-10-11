import { DERElement, External, ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodePrintableString, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/dn";
import { BuiltInStandardAttributes, ORAddress } from "@wildboar/or-address";
import { describe, expect, it } from "vitest";
import { EDIPartyName } from "./EDIPartyName.ta.mjs";
import { generalNameToString } from "./generalNameToString.mjs";
import {
    generalNameFromJSON,
    generalNameToJER,
    generalNameToJSON,
    type GeneralNameJSON,
} from "./generalNameToJSON.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");

function address(): ORAddress {
    return new ORAddress(new BuiltInStandardAttributes(
        { iso_3166_alpha2_code: "US" },
        undefined,
        undefined,
        undefined,
        undefined,
        "Wildboar",
    ));
}

describe("generalNameToJSON", () => {
    it("round-trips an email, a DNS name, a URI, an IP address, and an OID", () => {
        const names = [
            { rfc822Name: "user@example.com" },
            { dNSName: "example.com" },
            { uniformResourceIdentifier: "https://example.com/a" },
            { iPAddress: new Uint8Array([192, 0, 2, 1]) },
            { registeredID: ObjectIdentifier.fromString("1.2.3") },
        ] as const;
        for (const name of names) {
            const back = generalNameFromJSON(generalNameToJSON(name));
            expect(generalNameToString(back)).toBe(generalNameToString(name));
        }
    });

    it("round-trips a directory name and an EDI party name", () => {
        const directory = {
            directoryName: {
                rdnSequence: [[
                    new AttributeTypeAndValue(
                        commonName,
                        _encodePrintableString("Bob", BER),
                    ),
                ]],
            },
        };
        expect(generalNameToString(generalNameFromJSON(generalNameToJSON(directory))))
            .toBe(generalNameToString(directory));
        const edi = {
            ediPartyName: new EDIPartyName(
                { uTF8String: "Assigner" },
                { printableString: "Acme" },
            ),
        };
        const back = generalNameFromJSON(generalNameToJSON(edi));
        expect("ediPartyName" in back && back.ediPartyName.isEqualTo(edi.ediPartyName)).toBe(true);
    });

    it("round-trips an otherName value element and uses element toJSON for JER", () => {
        const value = _encodeUTF8String("user@example.com", BER);
        const name = {
            otherName: new External(
                ObjectIdentifier.fromString("1.2.3"),
                undefined,
                undefined,
                value,
            ),
        };
        const json = generalNameToJSON(name);
        expect(json.otherName?.value.startsWith("#")).toBe(true);
        const back = generalNameFromJSON(json);
        expect("otherName" in back && back.otherName.directReference?.toString()).toBe("1.2.3");
        if ("otherName" in back && !(back.otherName.encoding instanceof Uint8Array)) {
            expect(back.otherName.encoding.utf8String).toBe("user@example.com");
        }
        const jer = generalNameToJER(name);
        expect(jer.otherName?.value).toEqual(value.toJSON());
    });

    it("round-trips an X.400 address that has no extension attributes", () => {
        const name = { x400Address: address() };
        const back = generalNameFromJSON(generalNameToJSON(name));
        expect("x400Address" in back && back.x400Address.toString())
            .toBe(name.x400Address.toString());
        expect(generalNameToJER(name).x400Address).toEqual(name.x400Address.toJSON());
    });

    it("refuses an X.400 address whose JSON has extension attributes", () => {
        const json: GeneralNameJSON = {
            x400Address: {
                ...address().toJSON(),
                "extension-attributes": [{ type: 1, value: null }],
            },
        };
        expect(() => generalNameFromJSON(json)).toThrow(SyntaxError);
    });

    it("round-trips an unrecognized alternative as #hex", () => {
        const el = new DERElement();
        el.fromBytes(new Uint8Array([0x80, 0x01, 0xFF]));
        const json = generalNameToJSON(el);
        expect(json).toEqual({ _unrecognized: "#8001ff" });
        const back = generalNameFromJSON(json);
        expect(back.toBytes()).toEqual(el.toBytes());
    });
});
