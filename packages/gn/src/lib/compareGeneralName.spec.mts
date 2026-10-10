import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    BERElement,
    External,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { BER, _encodePrintableString } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/dn";
import { BuiltInStandardAttributes, ORAddress } from "@wildboar/or-address";
import { describe, expect, it } from "vitest";
import { compareGeneralName } from "./compareGeneralName.mjs";
import { EDIPartyName } from "./EDIPartyName.ta.mjs";
import type { GeneralName } from "./GeneralName.ta.mjs";
import { generalNameToKey } from "./generalNameToKey.mjs";
import { hexToBytes } from "./hex.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");

function agree(a: GeneralName, b: GeneralName): void {
    expect(compareGeneralName(a, b)).toBe(generalNameToKey(a) === generalNameToKey(b));
}

function utf8(text: string, construction: ASN1Construction): BERElement {
    const el = new BERElement(
        ASN1TagClass.universal,
        construction,
        ASN1UniversalType.utf8String,
    );
    if (construction === ASN1Construction.constructed) {
        const leaf = new BERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.octetString,
        );
        leaf.octetString = new TextEncoder().encode(text);
        el.sequence = [leaf];
        el.tagClass = ASN1TagClass.universal;
        el.construction = ASN1Construction.constructed;
        el.tagNumber = ASN1UniversalType.utf8String;
    } else {
        el.utf8String = text;
    }
    return el;
}

function directory(value: string): GeneralName {
    return {
        directoryName: {
            rdnSequence: [[
                new AttributeTypeAndValue(
                    commonName,
                    _encodePrintableString(value, BER),
                ),
            ]],
        },
    };
}

describe("compareGeneralName", () => {
    it("agrees with generalNameToKey for every alternative", () => {
        const emailA: GeneralName = { rfc822Name: "User@Example.COM" };
        const emailB: GeneralName = { rfc822Name: "User@example.com" };
        const emailC: GeneralName = { rfc822Name: "user@example.com" };
        const emailD: GeneralName = { rfc822Name: "a@b@Example.com" };
        const emailE: GeneralName = { rfc822Name: "a@b@example.com" };
        const emailF: GeneralName = { rfc822Name: "Hello" };
        const emailG: GeneralName = { rfc822Name: "hello" };
        const pairs: [GeneralName, GeneralName][] = [
            [emailA, emailB],
            [emailA, emailC],
            [emailD, emailE],
            [emailF, emailG],
            [{ dNSName: "Example.COM" }, { dNSName: "example.com" }],
            [{ dNSName: "example.com" }, { dNSName: "example.org" }],
            [
                { uniformResourceIdentifier: "HTTPS://User@Example.com:443/A" },
                { uniformResourceIdentifier: "https://User@example.com:443/A" },
            ],
            [
                { uniformResourceIdentifier: "https://User@example.com/A" },
                { uniformResourceIdentifier: "https://user@example.com/A" },
            ],
            [
                { uniformResourceIdentifier: "mailto:user@Example.com" },
                { uniformResourceIdentifier: "MAILTO:user@Example.com" },
            ],
            [
                { uniformResourceIdentifier: "mailto:user@Example.com" },
                { uniformResourceIdentifier: "mailto:user@example.com" },
            ],
            [
                { iPAddress: hexToBytes("c0000200ffffff00") },
                { iPAddress: hexToBytes("c0000200ffffff00") },
            ],
            [
                { iPAddress: hexToBytes("c0000200ffffff00") },
                { iPAddress: hexToBytes("c0000200ffff0000") },
            ],
            [
                { registeredID: ObjectIdentifier.fromString("1.2.3") },
                { registeredID: ObjectIdentifier.fromString("1.2.3") },
            ],
            [
                { registeredID: ObjectIdentifier.fromString("1.2.3") },
                { registeredID: ObjectIdentifier.fromString("1.2.4") },
            ],
            [directory("Bob"), directory("Bob")],
            [directory("Bob"), directory("Ann")],
            [
                { ediPartyName: new EDIPartyName(undefined, { printableString: "Acme" }) },
                { ediPartyName: new EDIPartyName(undefined, { uTF8String: "acme" }) },
            ],
            [
                { ediPartyName: new EDIPartyName(undefined, { printableString: "Acme" }) },
                { ediPartyName: new EDIPartyName({ printableString: "X" }, { printableString: "Acme" }) },
            ],
            [emailA, { dNSName: "example.com" }],
        ];
        for (const [a, b] of pairs) {
            agree(a, b);
        }
        expect(compareGeneralName(emailA, emailB)).toBe(true);
        expect(compareGeneralName(emailA, emailC)).toBe(false);
        expect(compareGeneralName(emailF, emailG)).toBe(false);
        expect(compareGeneralName(
            { uniformResourceIdentifier: "mailto:user@Example.com" },
            { uniformResourceIdentifier: "mailto:user@example.com" },
        )).toBe(false);
    });

    it("treats a primitive and a constructed otherName value as the same characters", () => {
        const typeId = ObjectIdentifier.fromString("1.2.3");
        const a: GeneralName = {
            otherName: new External(typeId, undefined, undefined, utf8("hi", ASN1Construction.primitive)),
        };
        const b: GeneralName = {
            otherName: new External(typeId, undefined, undefined, utf8("hi", ASN1Construction.constructed)),
        };
        expect(compareGeneralName(a, b)).toBe(true);
        agree(a, b);
    });

    it("encodes X.400 addresses to compare them", () => {
        const make = (): GeneralName => ({
            x400Address: new ORAddress(new BuiltInStandardAttributes(
                { iso_3166_alpha2_code: "US" },
                undefined,
                undefined,
                undefined,
                undefined,
                "Wildboar",
            )),
        });
        const a = make();
        const b = make();
        expect(compareGeneralName(a, b)).toBe(true);
        agree(a, b);
    });

    it("lets a directory-name matcher disagree with the key", () => {
        const a = directory("Bob");
        const b = directory("Ann");
        expect(compareGeneralName(a, b, () => () => true)).toBe(true);
        expect(generalNameToKey(a)).not.toBe(generalNameToKey(b));
    });
});
