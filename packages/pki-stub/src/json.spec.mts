import { describe, expect, it } from "vitest";
import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { AlgorithmIdentifier } from "./lib/modules/PKI-Stub/AlgorithmIdentifier.ta.mjs";
import { AlgorithmWithInvoke } from "./lib/modules/PKI-Stub/AlgorithmWithInvoke.ta.mjs";
import { AttCertValidityPeriod } from "./lib/modules/PKI-Stub/AttCertValidityPeriod.ta.mjs";
import { AttributeTypeAndValue } from "./lib/modules/PKI-Stub/AttributeTypeAndValue.ta.mjs";
import { Extension } from "./lib/modules/PKI-Stub/Extension.ta.mjs";
import { FingerPrint } from "./lib/modules/PKI-Stub/FingerPrint.ta.mjs";
import { HASH } from "./lib/modules/PKI-Stub/HASH.ta.mjs";
import { ObjectDigestInfo } from "./lib/modules/PKI-Stub/ObjectDigestInfo.ta.mjs";
import { ObjectDigestInfo_digestedObjectType } from "./lib/modules/PKI-Stub/ObjectDigestInfo-digestedObjectType.ta.mjs";
import { SubjectPublicKeyInfo } from "./lib/modules/PKI-Stub/SubjectPublicKeyInfo.ta.mjs";
import { Validity } from "./lib/modules/PKI-Stub/Validity.ta.mjs";
import { ScopeRestriction } from "./lib/modules/AuthenticationFramework/ScopeRestriction.ta.mjs";
import { Attribute } from "./lib/modules/InformationFramework/Attribute.ta.mjs";
import { Attribute_valuesWithContext_Item } from "./lib/modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import { Context } from "./lib/modules/InformationFramework/Context.ta.mjs";
import { EDIPartyName } from "./lib/modules/CertificateExtensions/EDIPartyName.ta.mjs";

const sha256 = ObjectIdentifier.fromString("2.16.840.1.101.3.4.2.1");
const commonName = ObjectIdentifier.fromString("2.5.4.3");
const bits = new Uint8ClampedArray([1, 0, 1, 1, 0, 0, 0, 1]);

function utf8Element(s: string): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
    );
    el.utf8String = s;
    return el;
}

function nullElement(): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.nill,
    );
}

describe("AlgorithmIdentifier JSON", () => {
    it("toJSON encodes the algorithm object identifier", () => {
        const value = new AlgorithmIdentifier(sha256, nullElement());
        expect(value.toJSON()).toEqual({
            algorithm: "2.16.840.1.101.3.4.2.1",
            parameters: null,
        });
    });
});

describe("AlgorithmWithInvoke JSON", () => {
    it("toJSON omits absent optional open types", () => {
        expect(new AlgorithmWithInvoke(sha256).toJSON()).toEqual({
            algorithm: "2.16.840.1.101.3.4.2.1",
        });
    });
});

describe("ScopeRestriction JSON", () => {
    it("toJSON encodes id and restriction", () => {
        const value = new ScopeRestriction(sha256, utf8Element("deny"));
        expect(value.toJSON()).toEqual({
            id: "2.16.840.1.101.3.4.2.1",
            restriction: "deny",
        });
    });
});

describe("Context JSON", () => {
    it("toJSON omits default fallback", () => {
        const value = new Context(commonName, [utf8Element("en")]);
        expect(value.toJSON()).toEqual({
            contextType: "2.5.4.3",
            contextValues: ["en"],
        });
    });
});

describe("Validity JSON", () => {
    const notBefore = new Date("2020-01-01T00:00:00.000Z");
    const notAfter = new Date("2021-01-01T00:00:00.000Z");
    it("toJSON encodes Time choices as ISO 8601 timestamps", () => {
        const value = new Validity(
            { utcTime: notBefore },
            { generalizedTime: notAfter },
        );
        expect(value.toJSON()).toEqual({
            notBefore: { utcTime: "2020-01-01T00:00:00.000Z" },
            notAfter: { generalizedTime: "2021-01-01T00:00:00.000Z" },
        });
    });
    it("fromJSON reconstructs a Validity", () => {
        const value = Validity.fromJSON({
            notBefore: { utcTime: "2020-01-01T00:00:00.000Z" },
            notAfter: { generalizedTime: "2021-01-01T00:00:00.000Z" },
        });
        expect("utcTime" in value.notBefore).toBe(true);
        expect("generalizedTime" in value.notAfter).toBe(true);
    });
});

describe("AttCertValidityPeriod JSON", () => {
    const notBeforeTime = new Date("2020-01-01T00:00:00.000Z");
    const notAfterTime = new Date("2021-01-01T00:00:00.000Z");
    it("toJSON encodes GeneralizedTime as ISO 8601 timestamps", () => {
        expect(new AttCertValidityPeriod(notBeforeTime, notAfterTime).toJSON()).toEqual({
            notBeforeTime: "2020-01-01T00:00:00.000Z",
            notAfterTime: "2021-01-01T00:00:00.000Z",
        });
    });
    it("fromJSON reconstructs an AttCertValidityPeriod", () => {
        const value = AttCertValidityPeriod.fromJSON({
            notBeforeTime: "2020-01-01T00:00:00.000Z",
            notAfterTime: "2021-01-01T00:00:00.000Z",
        });
        expect(value.notBeforeTime.toISOString()).toBe("2020-01-01T00:00:00.000Z");
    });
});

describe("AttributeTypeAndValue JSON", () => {
    it("toJSON uses the ASN.1 identifier type", () => {
        const value = new AttributeTypeAndValue(commonName, utf8Element("CN"));
        expect(value.toJSON()).toEqual({
            type: "2.5.4.3",
            value: "CN",
        });
    });
});

describe("Extension JSON", () => {
    it("toJSON encodes extnValue as hex and omits default critical", () => {
        const value = new Extension(sha256, false, Uint8Array.from([0xde, 0xad]));
        expect(value.toJSON()).toEqual({
            extnId: "2.16.840.1.101.3.4.2.1",
            extnValue: "dead",
        });
    });
    it("fromJSON reconstructs an Extension", () => {
        const value = Extension.fromJSON({
            extnId: "2.16.840.1.101.3.4.2.1",
            critical: true,
            extnValue: "dead",
        });
        expect(value.critical).toBe(true);
        expect(Array.from(value.extnValue)).toEqual([0xde, 0xad]);
    });
});

describe("HASH JSON", () => {
    it("toJSON encodes hashValue as a length/value bit string", () => {
        const value = new HASH(new AlgorithmIdentifier(sha256), bits);
        const json = value.toJSON();
        expect(json.algorithmIdentifier.algorithm).toBe("2.16.840.1.101.3.4.2.1");
        expect(json.hashValue.length).toBe(8);
        expect(json.hashValue.value).toBe("b1");
    });
});

describe("FingerPrint JSON", () => {
    it("toJSON encodes fingerprint as a length/value bit string", () => {
        const json = new FingerPrint(new AlgorithmIdentifier(sha256), bits).toJSON();
        expect(json.fingerprint).toEqual({ value: "b1", length: 8 });
    });
});

describe("SubjectPublicKeyInfo JSON", () => {
    it("toJSON encodes the subject public key bit string", () => {
        const json = new SubjectPublicKeyInfo(new AlgorithmIdentifier(sha256), bits).toJSON();
        expect(json.subjectPublicKey).toEqual({ value: "b1", length: 8 });
    });
});

describe("ObjectDigestInfo JSON", () => {
    it("toJSON encodes the enumerated type as its identifier", () => {
        const value = new ObjectDigestInfo(
            ObjectDigestInfo_digestedObjectType.publicKey,
            undefined,
            new AlgorithmIdentifier(sha256),
            bits,
        );
        expect(value.toJSON().digestedObjectType).toBe("publicKey");
    });
});

describe("Attribute_valuesWithContext_Item JSON", () => {
    it("toJSON encodes value and contextList", () => {
        const item = new Attribute_valuesWithContext_Item(
            utf8Element("v"),
            [new Context(commonName, [utf8Element("en")])],
        );
        expect(item.toJSON()).toEqual({
            value: "v",
            contextList: [{
                contextType: "2.5.4.3",
                contextValues: ["en"],
            }],
        });
    });
});

describe("Attribute JSON", () => {
    it("toJSON encodes type and values", () => {
        const value = new Attribute(commonName, [utf8Element("Alice")]);
        expect(value.toJSON()).toEqual({
            type: "2.5.4.3",
            values: ["Alice"],
        });
    });
});

describe("EDIPartyName JSON", () => {
    it("toJSON encodes directory strings as choices", () => {
        const value = new EDIPartyName(
            { printableString: "assigner" },
            { uTF8String: "party" },
        );
        expect(value.toJSON()).toEqual({
            nameAssigner: { printableString: "assigner" },
            partyName: { uTF8String: "party" },
        });
    });
    it("fromJSON reconstructs an EDIPartyName", () => {
        const value = EDIPartyName.fromJSON({
            partyName: { uTF8String: "party" },
        });
        expect("uTF8String" in value.partyName).toBe(true);
    });
});
