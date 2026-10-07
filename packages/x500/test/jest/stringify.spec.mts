import * as asn1 from "@wildboar/asn1";
import {
    AttributeTypeAndValue,
} from "../../src/lib/modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import {
    id_at_givenName,
} from "../../src/lib/modules/SelectedAttributeTypes/id-at-givenName.va.mjs";
import {
    id_at_surname,
} from "../../src/lib/modules/SelectedAttributeTypes/id-at-surname.va.mjs";
import {
    id_at_organizationName,
} from "../../src/lib/modules/SelectedAttributeTypes/id-at-organizationName.va.mjs";
import { rdnSequenceToString } from "@wildboar/dn";
import { generalNameToString } from "@wildboar/gn";

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
        expect(rdnSequenceToString(dn)).toBe("gn=Mr. Is/uer\\, Jr.+sn=Mr. Is/uer\\, Jr.,o=Mr. Is/uer\\, Jr.");
    });

    test("can stringify a GeneralName", () => {
        expect(generalNameToString(gn)).toBe("directoryName:gn=Mr. Is/uer\\, Jr.+sn=Mr. Is/uer\\, Jr.,o=Mr. Is/uer\\, Jr.");
    });
});
