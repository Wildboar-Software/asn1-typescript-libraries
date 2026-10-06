import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { id_at_commonName } from "../modules/SelectedAttributeTypes/id-at-commonName.va.mjs";
import { id_at_givenName } from "../modules/SelectedAttributeTypes/id-at-givenName.va.mjs";
import { id_at_surname } from "../modules/SelectedAttributeTypes/id-at-surname.va.mjs";
import relativeDistinguishedNameToString from "./relativeDistinguishedNameToString.mjs";

function utf8Atav(
    type_: AttributeTypeAndValue["type_"],
    value: string,
): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, _encodeUTF8String(value, DER));
}

describe("relativeDistinguishedNameToString", () => {
    it("prints a single attribute", () => {
        expect(relativeDistinguishedNameToString([
            utf8Atav(id_at_commonName, "Acme"),
        ])).toBe("cn=Acme");
    });

    it("joins multi-valued RDNs with a plus", () => {
        expect(relativeDistinguishedNameToString([
            utf8Atav(id_at_givenName, "Jonathan"),
            utf8Atav(id_at_surname, "Wilbur"),
        ])).toBe("gn=Jonathan+sn=Wilbur");
    });

    it("escapes LDAP special characters in the value", () => {
        expect(relativeDistinguishedNameToString([
            utf8Atav(id_at_commonName, "chunga+bunga=monkey\x00banana\\"),
        ])).toBe("cn=chunga\\+bunga\\=monkey\\00banana\\\\");
    });

    it("escapes a leading number sign, a comma, and quotation marks", () => {
        expect(relativeDistinguishedNameToString([
            utf8Atav(id_at_commonName, "#a,b\"c"),
        ])).toBe("cn=\\#a\\,b\\\"c");
    });
});
