import {
    ASN1Error,
    ASN1OverflowError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateClass,
} from "./lib/modules/PKIS/CertificateClass.ta.mjs";
import {
    CompusecQualityPair,
} from "./lib/modules/PKIS/CompusecQualityPair.ta.mjs";
import {
    CryptoQualityPair,
} from "./lib/modules/PKIS/CryptoQualityPair.ta.mjs";
import {
    EnterpriseId,
} from "./lib/modules/PKIS/EnterpriseId.ta.mjs";
import {
    GLBExtensions,
} from "./lib/modules/PKIS/GLBExtensions.ta.mjs";
import {
    Quality,
} from "./lib/modules/PKIS/Quality.ta.mjs";
import {
    SecurityAttributes,
    _decode_SecurityAttributes,
    _encode_SecurityAttributes,
} from "./lib/modules/PKIS/SecurityAttributes.ta.mjs";
import {
    SecurityLabelType1,
} from "./lib/modules/PKIS/SecurityLabelType1.ta.mjs";
import {
    SingletonRange,
} from "./lib/modules/PKIS/SingletonRange.ta.mjs";
import {
    _decode_Currency,
    _encode_Currency,
} from "./lib/modules/PKIS/Currency.ta.mjs";
import { pa_rl } from "./lib/modules/PKIS/pa-rl.va.mjs";
import { pa_sa } from "./lib/modules/PKIS/pa-sa.va.mjs";

const SECURITY_TM = "Novell Security Attribute(tm)";

function label (singleton: { uniqueSingleton: number } | { singletonRange: SingletonRange }): SecurityLabelType1 {
    return new SecurityLabelType1(
        2,
        0,
        0,
        new Uint8ClampedArray(96),
        new Uint8ClampedArray(64),
        [singleton],
        [{ uniqueSingleton: 1 }],
    );
}

function quality (): Quality {
    return new Quality(
        false,
        [new CompusecQualityPair(1, 1)],
        [new CryptoQualityPair(1, 1)],
        0,
    );
}

describe("SecurityAttributes", () => {
    test("round-trips a version 1.0 attribute with both singleton choices", () => {
        const original = new SecurityAttributes(
            new Uint8Array([0x01, 0x00]),
            true,
            SECURITY_TM,
            "http://developer.novell.com/repository/attributes/certattrs_v10.htm",
            new GLBExtensions(
                quality(),
                quality(),
                new CertificateClass(1, true),
                new EnterpriseId(
                    label({ uniqueSingleton: 7 }),
                    label({ singletonRange: new SingletonRange(0, 10, false) }),
                    [label({ uniqueSingleton: 4 })],
                ),
            ),
        );
        const decoded = _decode_SecurityAttributes(_encode_SecurityAttributes(original, $.BER));
        expect(decoded).toEqual(original);
        expect(decoded.nSI).toBe(true);
        expect(decoded.securityTM).toBe(SECURITY_TM);
        expect(decoded.gLBExtensions.enterpriseId.registryLabel.integritySingletons1[0]).toEqual({
            uniqueSingleton: 1,
        });
        expect(decoded.gLBExtensions.enterpriseId.rootLabel.secrecySingletons1[0]).toEqual({
            uniqueSingleton: 7,
        });
    });

    test("rejects values outside the ASN.1 constraints", () => {
        const extensions = new GLBExtensions(
            quality(),
            quality(),
            new CertificateClass(1, true),
            new EnterpriseId(
                label({ uniqueSingleton: 7 }),
                label({ uniqueSingleton: 8 }),
                [label({ uniqueSingleton: 4 })],
            ),
        );
        expect(() => new SecurityAttributes(
            new Uint8Array([0x01]),
            true,
            SECURITY_TM,
            "http://example.invalid",
            extensions,
        )).toThrow(ASN1SizeError);
        expect(() => new SecurityAttributes(
            new Uint8Array([0x01, 0x00]),
            false,
            SECURITY_TM,
            "http://example.invalid",
            extensions,
        )).toThrow(ASN1Error);
        expect(() => new SecurityAttributes(
            new Uint8Array([0x01, 0x00]),
            true,
            "Novell Security Attribute",
            "http://example.invalid",
            extensions,
        )).toThrow(ASN1Error);
        expect(() => new CompusecQualityPair(256, 1)).toThrow(ASN1OverflowError);
        expect(() => new SingletonRange(0, 9223372036854775808n, true)).toThrow(ASN1OverflowError);
        expect(() => new SingletonRange(0, 9223372036854775807n, true)).not.toThrow();
        expect(() => new EnterpriseId(
            label({ uniqueSingleton: 1 }),
            label({ uniqueSingleton: 1 }),
            [],
        )).toThrow(ASN1SizeError);
        const below = $._encodeInteger(0, $.BER);
        const above = $._encodeInteger(1000, $.BER);
        const usd = $._encodeInteger(840, $.BER);
        expect(() => _decode_Currency(below)).toThrow(ASN1OverflowError);
        expect(() => _decode_Currency(above)).toThrow(ASN1OverflowError);
        expect(_decode_Currency(usd)).toBe(840);
        expect(_decode_Currency(_encode_Currency(840, $.BER))).toBe(840);
    });
});

describe("PKIS object identifiers", () => {
    test("pa-sa and pa-rl sit under pkiAttributeType", () => {
        expect(pa_sa.toString()).toBe("2.16.840.1.113719.1.9.4.1");
        expect(pa_rl.toString()).toBe("2.16.840.1.113719.1.9.4.2");
    });
});
