import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type { Name } from "../modules/InformationFramework/Name.ta.mjs";
import { id_at_commonName } from "../modules/SelectedAttributeTypes/id-at-commonName.va.mjs";
import { id_at_countryName } from "../modules/SelectedAttributeTypes/id-at-countryName.va.mjs";
import nameToString from "./nameToString.mjs";

function utf8Atav(
    type_: AttributeTypeAndValue["type_"],
    value: string,
): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, _encodeUTF8String(value, DER));
}

describe("nameToString", () => {
    it("prints the directory name using LDAP distinguished-name escaping", () => {
        const name: Name = {
            rdnSequence: [
                [utf8Atav(id_at_commonName, "Wilbur; Jonathan")],
                [utf8Atav(id_at_countryName, "US")],
            ],
        };
        expect(nameToString(name)).toBe("cn=Wilbur\\; Jonathan,c=US");
    });
});
