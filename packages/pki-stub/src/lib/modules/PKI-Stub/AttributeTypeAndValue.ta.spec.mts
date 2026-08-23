import { describe, expect, it } from "vitest";
import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");

function utf8Element(s: string): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
    );
    el.utf8String = s;
    return el;
}

describe("AttributeTypeAndValue.toString()", () => {
    it("joins the OID and unquoted value with an equals sign", () => {
        const value = new AttributeTypeAndValue(commonName, utf8Element("CN"));
        expect(value.toString()).toBe("2.5.4.3=CN");
    });
});