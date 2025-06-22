import * as asn1 from "@wildboar/asn1";
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
import compareRDNSequence from "@wildboar/x500/src/lib/comparators/compareRDNSequence";

describe("Comparators", () => {
    const issuerCN = "Bigboi";
    const issuerEl = new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.utf8String,
    );
    issuerEl.utf8String = issuerCN;

    const dn1 = [
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

    const dn2 = [
        [
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
            new AttributeTypeAndValue(
                id_at_givenName,
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

    const dn3 = [
        [
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

    const dn4 = [
        [
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
            new AttributeTypeAndValue(
                id_at_givenName,
                issuerEl,
            ),
        ],
    ];

    const dn5 = [
        [
            new AttributeTypeAndValue(
                id_at_organizationName,
                issuerEl,
            ),
        ],
        [
            new AttributeTypeAndValue(
                id_at_surname,
                issuerEl,
            ),
            new AttributeTypeAndValue(
                id_at_givenName,
                issuerEl,
            ),
        ],
    ];

    test("can compare two DNs", () => {
        expect(compareRDNSequence(dn1, dn2, () => undefined)).toBe(true);
        expect(compareRDNSequence(dn1, dn3, () => undefined)).toBe(false);
        expect(compareRDNSequence(dn1, dn4, () => undefined)).toBe(false);
        expect(compareRDNSequence(dn1, dn5, () => undefined)).toBe(false);
    });
});
