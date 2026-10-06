import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import type { RDNSequence } from "../modules/InformationFramework/RDNSequence.ta.mjs";
import { id_at_commonName } from "../modules/SelectedAttributeTypes/id-at-commonName.va.mjs";
import { id_at_countryName } from "../modules/SelectedAttributeTypes/id-at-countryName.va.mjs";
import { id_at_organizationName } from "../modules/SelectedAttributeTypes/id-at-organizationName.va.mjs";
import rdnSequenceToString from "./rdnSequenceToString.mjs";

function utf8Atav(
    type_: AttributeTypeAndValue["type_"],
    value: string,
): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, _encodeUTF8String(value, DER));
}

describe("rdnSequenceToString", () => {
    it("joins RDNs with commas", () => {
        const dn: RDNSequence = [
            [utf8Atav(id_at_commonName, "Jonathan")],
            [utf8Atav(id_at_organizationName, "Wildboar")],
            [utf8Atav(id_at_countryName, "US")],
        ];
        expect(rdnSequenceToString(dn)).toBe("cn=Jonathan,o=Wildboar,c=US");
    });

    it("escapes commas inside a value so they are not RDN separators", () => {
        const dn: RDNSequence = [
            [utf8Atav(id_at_commonName, "Wilbur, Jonathan")],
            [utf8Atav(id_at_countryName, "US")],
        ];
        expect(rdnSequenceToString(dn)).toBe("cn=Wilbur\\, Jonathan,c=US");
    });

    it("keeps a plus inside one RDN and a comma between RDNs", () => {
        const dn: RDNSequence = [
            [
                utf8Atav(id_at_commonName, "a+b"),
                utf8Atav(id_at_organizationName, "c,d"),
            ],
            [utf8Atav(id_at_countryName, "US")],
        ];
        expect(rdnSequenceToString(dn)).toBe("cn=a\\+b+o=c\\,d,c=US");
    });
});
