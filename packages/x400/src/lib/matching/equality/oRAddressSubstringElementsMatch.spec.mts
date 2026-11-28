import { DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    PresentationAddress,
    _encode_PresentationAddress,
} from "@wildboar/x500/SelectedAttributeTypes";
import {
    BuiltInStandardAttributes,
    ExtensionAttribute,
    ORAddress,
    PersonalName,
    _encode_ExtendedNetworkAddress,
    _encode_ORAddress,
    extended_network_address,
} from "@wildboar/x400/MTSAbstractService";
import oRAddressSubstringElementsMatch from "./oRAddressSubstringElementsMatch.mjs";

const attrType = ObjectIdentifier.fromString("2.5.4.3");

function stored(el: DERElement): AttributeTypeAndValue {
    return new AttributeTypeAndValue(attrType, el);
}

describe("oRAddressSubstringElementsMatch()", () => {
    test("X.413 §12.4.3 example: OrganizationName=rc, PersonalName.surname=arthur matches superset ORAddress", () => {
        const assertion = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    "rc",
                    undefined,
                    new PersonalName("arthur"),
                ),
            ),
            DER,
        );
        const value = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    { iso_3166_alpha2_code: "US" },
                    { printable: "ATT" },
                    undefined,
                    undefined,
                    undefined,
                    "RCC",
                    undefined,
                    new PersonalName("McArthur", "Douglas"),
                    ["HQ", "Engineering"],
                ),
            ),
            DER,
        );
        expect(oRAddressSubstringElementsMatch(assertion, stored(value))).toBe(true);

        const missingOrg = _encode_ORAddress(
            new ORAddress(
                new BuiltInStandardAttributes(
                    { iso_3166_alpha2_code: "US" },
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    new PersonalName("McArthur"),
                ),
            ),
            DER,
        );
        expect(oRAddressSubstringElementsMatch(assertion, stored(missingOrg))).toBe(false);
    });

    test("matches PSAP extended-network-address using presentationAddressMatch subset semantics", () => {
        const nsap1 = new Uint8Array([1, 2, 3, 4]);
        const nsap2 = new Uint8Array([5, 6, 7, 8]);
        const makePsapAddr = (nsaps: Uint8Array[]) =>
            _encode_ORAddress(
                new ORAddress(
                    new BuiltInStandardAttributes(),
                    undefined,
                    [
                        new ExtensionAttribute(
                            extended_network_address["&id"]!,
                            _encode_ExtendedNetworkAddress(
                                { psap_address: new PresentationAddress(undefined, undefined, undefined, nsaps) },
                                DER,
                            ),
                        ),
                    ],
                ),
                DER,
            );

        expect(
            oRAddressSubstringElementsMatch(
                makePsapAddr([nsap2]),
                stored(makePsapAddr([nsap1, nsap2])),
            ),
        ).toBe(true);
        expect(
            oRAddressSubstringElementsMatch(
                makePsapAddr([nsap1, nsap2]),
                stored(makePsapAddr([nsap2])),
            ),
        ).toBe(false);
    });

    test("throws on empty ORAddress assertion and returns undefined on empty stored ORAddress", () => {
        const empty = _encode_ORAddress(new ORAddress(new BuiltInStandardAttributes()), DER);
        const nonEmpty = _encode_ORAddress(
            new ORAddress(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" })),
            DER,
        );
        expect(() => oRAddressSubstringElementsMatch(empty, stored(nonEmpty))).toThrow();
        expect(oRAddressSubstringElementsMatch(nonEmpty, stored(empty))).toBeUndefined();
    });
});
