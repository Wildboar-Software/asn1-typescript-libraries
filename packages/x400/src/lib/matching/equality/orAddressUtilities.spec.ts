import { Buffer } from "node:buffer";
import { ASN1Element, DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import { PresentationAddress } from "@wildboar/x500/SelectedAttributeTypes";
import {
    BuiltInDomainDefinedAttribute,
    BuiltInStandardAttributes,
    ExtendedNetworkAddress_e163_4_address,
    ExtensionAttribute,
    ORAddress,
    PDSParameter,
    PersonalName,
    UniversalDomainDefinedAttribute,
    UniversalOrBMPString,
    UniversalPersonalName,
    _encode_ExtendedNetworkAddress,
    _encode_ORAddress,
    _encode_PDSParameter,
    _encode_PhysicalDeliveryCountryName,
    _encode_PostalCode,
    _encode_TeletexCommonName,
    _encode_UniversalCommonName,
    _encode_UniversalDomainDefinedAttributes,
    _encode_UniversalOrganizationName,
    _encode_UniversalPersonalName,
    extended_network_address,
    physical_delivery_country_name,
    postal_code,
    street_address,
    teletex_common_name,
    universal_common_name,
    universal_domain_defined_attributes,
    universal_organization_name,
    universal_personal_name,
} from "@wildboar/x400/MTSAbstractService";
import oRAddressMatch from "./oRAddressMatch.js";
import oRAddressElementsMatch from "./oRAddressElementsMatch.js";
import {
    compareORAddressInfo,
    orAddressesMatch,
    recursivelyNormalize,
} from "./orAddressUtilities.js";

const testAttrType = ObjectIdentifier.fromString("2.5.4.3");

function stored(el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(testAttrType, el);
}

function bmp(s: string, lang?: string): UniversalOrBMPString {
    return new UniversalOrBMPString({ two_octets: s }, lang);
}

describe("recursivelyNormalize()", () => {
    test("normalizes strings without mutating the input object", () => {
        const value = {
            asdf: "  \r\n zx  \r\n cv",
            qwer: "yuiop  ",
            nested: ["  hello  world "],
        };
        const expected = {
            asdf: "ZX CV",
            qwer: "YUIOP",
            nested: ["HELLO WORLD"],
        };
        expect(recursivelyNormalize(value)).toEqual(expected);
        expect(value.nested[0]).toBe("  hello  world ");
    });
});

describe("ORAddress matching utilities, oRAddressMatch, and oRAddressElementsMatch", () => {
    test("postal-code extension is compared (numeric vs printable) and never discarded", () => {
        const zip90210Num = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }), undefined, [
                new ExtensionAttribute(
                    postal_code["&id"]!,
                    _encode_PostalCode({ numeric_code: "902 10" }, DER),
                ),
            ]),
            DER,
        );
        const zip90210Print = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }), undefined, [
                new ExtensionAttribute(
                    postal_code["&id"]!,
                    _encode_PostalCode({ printable_code: "90210" }, DER),
                ),
            ]),
            DER,
        );
        const zip10001 = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }), undefined, [
                new ExtensionAttribute(
                    postal_code["&id"]!,
                    _encode_PostalCode({ numeric_code: "10001" }, DER),
                ),
            ]),
            DER,
        );

        expect(oRAddressMatch(zip90210Num, stored(zip90210Print))).toBe(true);
        expect(oRAddressMatch(zip90210Num, stored(zip10001))).toBe(false);
    });

    test("universal-common-name and universal-organization-name decode UniversalOrBMPString, ignore language code, and match decomposed Teletex", () => {
        // T.61 acute accent (0xC2) + 'e' (0x65) => "é", plus non-spacing underline (0xCC) which is insignificant
        const ttexBytes = new Uint8Array([0x43, 0x61, 0x66, 0xC2, 0x65, 0xCC]); // "Café" with underline
        const ttexAddr = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes(), undefined, [
                new ExtensionAttribute(
                    teletex_common_name["&id"]!,
                    _encode_TeletexCommonName(ttexBytes, DER),
                ),
                new ExtensionAttribute(
                    universal_organization_name["&id"]!,
                    _encode_UniversalOrganizationName(bmp("Société Générale", "fr"), DER),
                ),
            ]),
            DER,
        );
        const univAddr = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes(), undefined, [
                new ExtensionAttribute(
                    universal_common_name["&id"]!,
                    _encode_UniversalCommonName(bmp("café", "en US"), DER),
                ),
                new ExtensionAttribute(
                    universal_organization_name["&id"]!,
                    _encode_UniversalOrganizationName(bmp("SOCIÉTÉ  GÉNÉRALE"), DER),
                ),
            ]),
            DER,
        );

        expect(oRAddressMatch(ttexAddr, stored(univAddr))).toBe(true);
    });

    test("PersonalName matches across Printable and Universal forms and supports partial PersonalName.surname in oRAddressElementsMatch", () => {
        const printablePN = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    { iso_3166_alpha2_code: "US" },
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    new PersonalName("Maruba", "Alice", "J", "III"),
                ),
            ),
            DER,
        );
        const universalPN = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes({ x121_dcc_code: "310" }),
                undefined,
                [
                    new ExtensionAttribute(
                        universal_personal_name["&id"]!,
                        _encode_UniversalPersonalName(
                            new UniversalPersonalName(bmp("maruba"), bmp("alice"), bmp("j"), bmp("iii")),
                            DER,
                        ),
                    ),
                ],
            ),
            DER,
        );
        const surnameOnlyAssertion = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    new PersonalName("maruba"),
                ),
            ),
            DER,
        );

        expect(oRAddressMatch(printablePN, stored(universalPN))).toBe(true);
        expect(oRAddressElementsMatch(surnameOnlyAssertion, stored(printablePN))).toBe(true);
        expect(oRAddressElementsMatch(surnameOnlyAssertion, stored(universalPN))).toBe(true);
    });

    test("dual-encoded OR-address (Printable + Universal) succeeds when at least one form matches (X.413 §12.4.1(d)-(e))", () => {
        const dualStored = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    { iso_3166_alpha2_code: "DE" },
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "Mueller GmbH",
                ),
                [new BuiltInDomainDefinedAttribute(" d  id ", "sales")],
                [
                    new ExtensionAttribute(
                        universal_organization_name["&id"]!,
                        _encode_UniversalOrganizationName(bmp("Müller GmbH", "de"), DER),
                    ),
                    new ExtensionAttribute(
                        universal_domain_defined_attributes["&id"]!,
                        _encode_UniversalDomainDefinedAttributes(
                            [new UniversalDomainDefinedAttribute(bmp("D ID"), bmp("Vertrieb"))],
                            DER,
                        ),
                    ),
                ],
            ),
            DER,
        );

        const assertAscii = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    { x121_dcc_code: "262" },
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "MUELLER GMBH",
                ),
                [new BuiltInDomainDefinedAttribute("d id", "SALES")],
            ),
            DER,
        );
        const assertGerman = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes({ iso_3166_alpha2_code: "DE" }),
                undefined,
                [
                    new ExtensionAttribute(
                        universal_organization_name["&id"]!,
                        _encode_UniversalOrganizationName(bmp("müller gmbh"), DER),
                    ),
                    new ExtensionAttribute(
                        universal_domain_defined_attributes["&id"]!,
                        _encode_UniversalDomainDefinedAttributes(
                            [new UniversalDomainDefinedAttribute(bmp("d  id"), bmp("vertrieb"))],
                            DER,
                        ),
                    ),
                ],
            ),
            DER,
        );

        expect(oRAddressMatch(assertAscii, stored(dualStored))).toBe(true);
        expect(oRAddressMatch(assertGerman, stored(dualStored))).toBe(true);
    });

    test("physical-delivery-country-name maps X.121 DCC to ISO 3166, OUs preserve order, e163-4 supports omitted sub-address, and Object.prototype keys are safe", () => {
        const storedAddr = new ORAddress(
            new BuiltInStandardAttributes(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                ["Corp", "Engineering", "Platform"],
            ),
            [new BuiltInDomainDefinedAttribute("valueOf", "ok"), new BuiltInDomainDefinedAttribute("toString", "yes")],
            [
                new ExtensionAttribute(
                    physical_delivery_country_name["&id"]!,
                    _encode_PhysicalDeliveryCountryName({ x121_dcc_code: "234" }, DER), // GB
                ),
                new ExtensionAttribute(
                    extended_network_address["&id"]!,
                    _encode_ExtendedNetworkAddress(
                        { e163_4_address: new ExtendedNetworkAddress_e163_4_address("442079460000", "99") },
                        DER,
                    ),
                ),
            ],
        );
        const encodedStored = _encode_ORAddress(storedAddr, DER);

        const inOrderSubset = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    ["Corp", "Platform"],
                ),
                [new BuiltInDomainDefinedAttribute("VALUEOF", "OK")],
                [
                    new ExtensionAttribute(
                        physical_delivery_country_name["&id"]!,
                        _encode_PhysicalDeliveryCountryName({ iso_3166_alpha2_code: "gb" }, DER),
                    ),
                    new ExtensionAttribute(
                        extended_network_address["&id"]!,
                        _encode_ExtendedNetworkAddress(
                            { e163_4_address: new ExtendedNetworkAddress_e163_4_address("442079460000") },
                            DER,
                        ),
                    ),
                ],
            ),
            DER,
        );
        const outOfOrderOUs = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    ["Platform", "Corp"],
                ),
            ),
            DER,
        );

        expect(oRAddressElementsMatch(inOrderSubset, stored(encodedStored))).toBe(true);
        expect(oRAddressElementsMatch(outOfOrderOUs, stored(encodedStored))).toBe(false);

        // Verify caller's organizational_unit_names array is NOT mutated by orAddressesMatch
        const callerOUs = ["  Sales ", "West"];
        const callerAddr = new ORAddress(
            new BuiltInStandardAttributes(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                callerOUs,
            ),
        );
        expect(orAddressesMatch(callerAddr, callerAddr)).toBe(true);
        expect(callerOUs).toEqual(["  Sales ", "West"]);
    });

    test("PDSParameter JSON uses dashed component names, so printable and teletex forms match", () => {
        const printable = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }), undefined, [
                new ExtensionAttribute(
                    street_address["&id"]!,
                    _encode_PDSParameter(new PDSParameter("  Main Street "), DER),
                ),
            ]),
            DER,
        );
        const teletex = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }), undefined, [
                new ExtensionAttribute(
                    street_address["&id"]!,
                    _encode_PDSParameter(new PDSParameter(undefined, Buffer.from("Main Street")), DER),
                ),
            ]),
            DER,
        );
        expect(new PDSParameter("Main Street").toJSON()).toEqual({
            "printable-string": "Main Street",
            "teletex-string": undefined,
        });
        expect(oRAddressMatch(printable, stored(teletex))).toBe(true);
    });

    test("PSAP comparison does not require PresentationAddress to be the same class instance", () => {
        const nsap = new Uint8Array([0x49, 0x01]);
        const real = new PresentationAddress(undefined, undefined, undefined, [nsap]);
        const duck = {
            pSelector: undefined,
            sSelector: undefined,
            tSelector: undefined,
            nAddresses: [nsap],
        } as PresentationAddress;
        expect(real instanceof PresentationAddress).toBe(true);
        expect(duck instanceof PresentationAddress).toBe(false);
        expect(compareORAddressInfo(
            { countryName: "US", extendedNetworkAddress: real },
            { countryName: "US", extendedNetworkAddress: duck },
            "exact",
        )).toBe(true);
        expect(compareORAddressInfo(
            { countryName: "US", extendedNetworkAddress: ["18005551212", "42"] },
            { countryName: "US", extendedNetworkAddress: duck },
            "exact",
        )).toBe(false);
    });
});
