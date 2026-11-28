import { type ASN1Element, ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue as DNAtav, type Name } from "@wildboar/dn";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import { PresentationAddress } from "@wildboar/x500/SelectedAttributeTypes";
import {
    BuiltInStandardAttributes,
    ExtendedNetworkAddress_e163_4_address,
    ExtensionAttribute,
    ORName,
    TerminalType_g3_facsimile,
    _encode_ExtendedNetworkAddress,
    _encode_ORName,
    _encode_TerminalType,
    extended_network_address,
    terminal_type,
} from "@wildboar/x400/MTSAbstractService";
import { _encode_MSString } from "@wildboar/x400/MSMatchingRules";
import oRNameSingleElementMatch, { extractStrings } from "./oRNameSingleElementMatch.mjs";

const testAttrType = ObjectIdentifier.fromString("2.6.4.3.51");
const id_at_commonName = ObjectIdentifier.fromString("2.5.4.3");
const id_at_organizationName = ObjectIdentifier.fromString("2.5.4.10");
const id_at_generationTime = ObjectIdentifier.fromString("2.999.99");

function stored(el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(testAttrType, el);
}

function ms(text: string): ASN1Element {
    return _encode_MSString({ bmp: text }, DER);
}

describe("extractStrings()", () => {
    test("#1", () => {
        const value = {
            asdf: "zxcv",
            qwer: "yuiop",
        };
        const expected: string[] = [ "zxcv", "yuiop" ];
        expect(Array.from(extractStrings(value))).toEqual(expected);
    });
    test("#2", () => {
        const value = {
            asdf: "zxcv",
            qwer: {
                baz: "foo",
                quux: "baz",
            },
            bytes: new Uint8Array([1, 2, 3]),
        };
        const expected: string[] = [ "zxcv", "foo", "baz" ];
        expect(Array.from(extractStrings(value))).toEqual(expected);
    });
});

describe("oRNameSingleElementMatch (ITU-T Rec. X.413 §12.4.7)", () => {
    test("matches mixed-case and space-padded Directory Name attributes and ignores non-string ATAVs", () => {
        const cnVal = $._encodeUTF8String("  John   Smith  ", DER);
        const orgVal = $._encodePrintableString("Societe", DER);
        const timeVal = $._encodeGeneralizedTime(new Date("2026-01-01T00:00:00Z"), DER);

        const dn: Name = {
            rdnSequence: [
                [new DNAtav(id_at_organizationName, orgVal)],
                [
                    new DNAtav(id_at_commonName, cnVal),
                    new DNAtav(id_at_generationTime, timeVal),
                ],
            ],
        };
        const encoded = _encode_ORName(
            new ORName(new BuiltInStandardAttributes(), undefined, undefined, dn),
            DER,
        );

        expect(oRNameSingleElementMatch(ms("john smith"), stored(encoded))).toBe(true);
        expect(oRNameSingleElementMatch(ms("SOCIETE"), stored(encoded))).toBe(true);
        expect(oRNameSingleElementMatch(ms("smith"), stored(encoded))).toBe(false);
        // Non-string GeneralizedTime ATAV must NOT match its ISO string representation
        expect(oRNameSingleElementMatch(ms("2026-01-01T00:00:00.000Z"), stored(encoded))).toBe(false);
    });

    test("excludes terminal-type and extended-network-address (e163-4 and psap) per X.413 §12.4.7", () => {
        const e163OrName = _encode_ORName(
            new ORName(
                new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" }),
                undefined,
                [
                    new ExtensionAttribute(
                        extended_network_address["&id"]!,
                        _encode_ExtendedNetworkAddress(
                            { e163_4_address: new ExtendedNetworkAddress_e163_4_address("18005551212", "42") },
                            DER,
                        ),
                    ),
                    new ExtensionAttribute(
                        terminal_type["&id"]!,
                        _encode_TerminalType(TerminalType_g3_facsimile, DER),
                    ),
                ],
            ),
            DER,
        );

        expect(oRNameSingleElementMatch(ms("us"), stored(e163OrName))).toBe(true);
        expect(oRNameSingleElementMatch(ms("18005551212"), stored(e163OrName))).toBe(false);
        expect(oRNameSingleElementMatch(ms("42"), stored(e163OrName))).toBe(false);
        expect(oRNameSingleElementMatch(ms("5"), stored(e163OrName))).toBe(false);

        const psapOrName = _encode_ORName(
            new ORName(
                new BuiltInStandardAttributes({ iso_3166_alpha2_code: "GB" }),
                undefined,
                [
                    new ExtensionAttribute(
                        extended_network_address["&id"]!,
                        _encode_ExtendedNetworkAddress(
                            {
                                psap_address: new PresentationAddress(
                                    undefined,
                                    undefined,
                                    undefined,
                                    [new Uint8Array(4096)],
                                ),
                            },
                            DER,
                        ),
                    ),
                ],
            ),
            DER,
        );
        expect(oRNameSingleElementMatch(ms("gb"), stored(psapOrName))).toBe(true);
    });

    test("matches country-name elements by X.121 / ISO 3166 country equivalence rather than literal form", () => {
        const isoUS = _encode_ORName(
            new ORName(new BuiltInStandardAttributes({ iso_3166_alpha2_code: "US" })),
            DER,
        );
        const x121US = _encode_ORName(
            new ORName(new BuiltInStandardAttributes({ x121_dcc_code: "310" })),
            DER,
        );
        const orgUSOnly = _encode_ORName(
            new ORName(new BuiltInStandardAttributes(undefined, undefined, undefined, undefined, undefined, "US")),
            DER,
        );

        expect(oRNameSingleElementMatch(ms("US"), stored(isoUS))).toBe(true);
        expect(oRNameSingleElementMatch(ms("310"), stored(isoUS))).toBe(true);
        expect(oRNameSingleElementMatch(ms("US"), stored(x121US))).toBe(true);
        expect(oRNameSingleElementMatch(ms("310"), stored(x121US))).toBe(true);
        expect(oRNameSingleElementMatch(ms("0310"), stored(isoUS))).toBe(false);
        expect(oRNameSingleElementMatch(ms("310"), stored(orgUSOnly))).toBe(false);
    });
});
