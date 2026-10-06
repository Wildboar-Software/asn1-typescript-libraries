import { ObjectIdentifier } from "@wildboar/asn1";
import {
    DER,
    _encodeInteger,
    _encodePrintableString,
    _encodeUTF8String,
} from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { id_at_commonName } from "../modules/SelectedAttributeTypes/id-at-commonName.va.mjs";
import { id_at_organizationName } from "../modules/SelectedAttributeTypes/id-at-organizationName.va.mjs";
import attributeTypeAndValueToString from "./attributeTypeAndValueToString.mjs";

function atav(
    type_: AttributeTypeAndValue["type_"],
    value: AttributeTypeAndValue["value"],
): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, value);
}

describe("attributeTypeAndValueToString", () => {
    it("prints a short attribute name and an unquoted printable string", () => {
        expect(attributeTypeAndValueToString(atav(
            id_at_commonName,
            _encodePrintableString("Acme Corp", DER),
        ))).toBe("cn=Acme Corp");
    });

    it("prints UTF-8 directory strings without surrounding quotes", () => {
        expect(attributeTypeAndValueToString(atav(
            id_at_organizationName,
            _encodeUTF8String("José \"Pepe\" García", DER),
        ))).toBe("o=José \"Pepe\" García");
    });

    it("removes leading and trailing spaces that belong to the value", () => {
        expect(attributeTypeAndValueToString(atav(
            id_at_commonName,
            _encodeUTF8String(" padded ", DER),
        ))).toBe("cn=padded");
    });

    it("falls back to the dotted object identifier for unknown types", () => {
        const type_ = ObjectIdentifier.fromParts([1, 3, 6, 1, 4, 1, 99999, 1]);
        expect(attributeTypeAndValueToString(atav(
            type_,
            _encodeUTF8String("widget", DER),
        ))).toBe(`${type_.toString()}=widget`);
    });

    it("prints non-string values without adding quotes", () => {
        expect(attributeTypeAndValueToString(atav(
            id_at_commonName,
            _encodeInteger(42, DER),
        ))).toBe("cn=42");
    });
});
