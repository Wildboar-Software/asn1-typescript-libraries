import * as asn1 from "asn1-ts";
import {
    AttributeTypeAndValue,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    id_at_givenName,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/id-at-givenName.va.mjs";
import {
    id_at_surname,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/id-at-surname.va.mjs";
import {
    id_at_organizationName,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/id-at-organizationName.va.mjs";
import rdnSequenceToString from "@wildboar/x500/src/lib/stringifiers/rdnSequenceToString";
import generalNameToString from "@wildboar/x500/src/lib/stringifiers/generalNameToString";
import rdnSequenceFromString from "@wildboar/x500/src/lib/stringifiers/rdnSequenceFromString";
import directoryStringToString from "@wildboar/x500/src/lib/stringifiers/directoryStringToString.mjs";;
import {
    _decode_UnboundedDirectoryString as decodeUBS,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";

describe("Stringifiers", () => {
    const issuerCN = "Mr. Is/uer, Jr.";
    const issuerEl = new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.utf8String,
    );
    issuerEl.utf8String = issuerCN;

    const dn = [
        [
            new AttributeTypeAndValue(
                id_at_givenName,
                issuerEl,
            ),
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
        ],
        [
            new AttributeTypeAndValue(
                id_at_organizationName,
                issuerEl,
            ),
        ]
    ];

    const gn = {
        directoryName: {
            rdnSequence: dn,
        },
    };

    test("can stringify a DN", () => {
        expect(rdnSequenceToString(dn)).toBe("gn=Mr. Is\\/uer, Jr.+sn=Mr. Is\\/uer, Jr./o=Mr. Is\\/uer, Jr.");
    });

    test("can stringify a GeneralName", () => {
        expect(generalNameToString(gn)).toBe("directoryName:gn=Mr. Is\\/uer, Jr.+sn=Mr. Is\\/uer, Jr./o=Mr. Is\\/uer, Jr.");
    });

    test("can convert a string to an RDNSequence", () => {
        const str = "CN = Jonathan Wilbur + dnQualifier = 68109699-a4f6-477e-a7b2-1246ef9717f3, ST = FL, C = US";
        const rdns = Array.from(rdnSequenceFromString(str));
        expect(rdns.length).toBe(3);
        expect(rdns[0].length).toBe(2);
        expect(rdns[1].length).toBe(1);
        expect(rdns[2].length).toBe(1);
        expect(rdns[0][0].type_.toString()).toBe("2.5.4.3");
        expect(rdns[0][1].type_.toString()).toBe("2.5.4.46");
        expect(rdns[1][0].type_.toString()).toBe("2.5.4.8");
        expect(rdns[2][0].type_.toString()).toBe("2.5.4.6");
        expect(directoryStringToString(decodeUBS(rdns[0][0].value))).toBe("Jonathan Wilbur");
        expect(rdns[0][1].value.printableString).toBe("68109699-a4f6-477e-a7b2-1246ef9717f3");
        expect(directoryStringToString(decodeUBS(rdns[1][0].value))).toBe("FL");
        expect(directoryStringToString(decodeUBS(rdns[2][0].value))).toBe("US");
    });

    test("can convert a string containing escapes to an RDNSequence", () => {
        const str = "CN = Wilbur\\, Jonathan + dnQualifier = bigboi\\+badboi, ST = FL, C = US";
        const rdns = Array.from(rdnSequenceFromString(str));
        expect(rdns.length).toBe(3);
        expect(rdns[0].length).toBe(2);
        expect(rdns[1].length).toBe(1);
        expect(rdns[2].length).toBe(1);
        expect(rdns[0][0].type_.toString()).toBe("2.5.4.3");
        expect(rdns[0][1].type_.toString()).toBe("2.5.4.46");
        expect(rdns[1][0].type_.toString()).toBe("2.5.4.8");
        expect(rdns[2][0].type_.toString()).toBe("2.5.4.6");
        expect(directoryStringToString(decodeUBS(rdns[0][0].value))).toBe("Wilbur, Jonathan");
        expect(rdns[0][1].value.printableString).toBe("bigboi+badboi");
        expect(directoryStringToString(decodeUBS(rdns[1][0].value))).toBe("FL");
        expect(directoryStringToString(decodeUBS(rdns[2][0].value))).toBe("US");
    });

    test("can convert a string containing escaped escapes to an RDNSequence", () => {
        const str = "CN = Jonathan \\\\Wilbur, ST = FL, C = US";
        const rdns = Array.from(rdnSequenceFromString(str));
        expect(rdns.length).toBe(3);
        expect(rdns[0].length).toBe(1);
        expect(rdns[1].length).toBe(1);
        expect(rdns[2].length).toBe(1);
        expect(rdns[0][0].type_.toString()).toBe("2.5.4.3");
        expect(rdns[1][0].type_.toString()).toBe("2.5.4.8");
        expect(rdns[2][0].type_.toString()).toBe("2.5.4.6");
        expect(directoryStringToString(decodeUBS(rdns[0][0].value))).toBe("Jonathan \\Wilbur");
        expect(directoryStringToString(decodeUBS(rdns[1][0].value))).toBe("FL");
        expect(directoryStringToString(decodeUBS(rdns[2][0].value))).toBe("US");
    });
});
