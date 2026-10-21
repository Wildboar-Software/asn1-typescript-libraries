import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "./lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { AttributeStatus } from "./lib/modules/PlatformCertificateProfileV2/AttributeStatus.ta.mjs";
import { CertificateIdentifier } from "./lib/modules/PlatformCertificateProfileV2/CertificateIdentifier.ta.mjs";
import { ComponentAddress } from "./lib/modules/PlatformCertificateProfileV2/ComponentAddress.ta.mjs";
import { ComponentClass } from "./lib/modules/PlatformCertificateProfileV2/ComponentClass.ta.mjs";
import {
    ComponentIdentifierV11,
    _decode_ComponentIdentifierV11,
    _encode_ComponentIdentifierV11,
} from "./lib/modules/PlatformCertificateProfileV2/ComponentIdentifierV11.ta.mjs";
import { HashedCertificateIdentifier } from "./lib/modules/PlatformCertificateProfileV2/HashedCertificateIdentifier.ta.mjs";
import { tcg_address_ethernetmac } from "./lib/modules/PlatformCertificateProfileV2/tcg-address-ethernetmac.va.mjs";
import { tcg_registry_componentClass_tcg } from "./lib/modules/PlatformCertificateProfileV2/tcg-registry-componentClass-tcg.va.mjs";
import { URIReference } from "./lib/modules/EKCredentialProfileV2/URIReference.ta.mjs";

describe("ComponentIdentifierV11", () => {
    test("round-trips a populated component identifier", () => {
        const sha256 = ObjectIdentifier.fromParts([2, 16, 840, 1, 101, 3, 4, 2, 1]);
        const manufacturerId = ObjectIdentifier.fromParts([1, 3, 6, 1, 4, 1, 1]);
        const original = new ComponentIdentifierV11(
            new ComponentClass(
                tcg_registry_componentClass_tcg,
                new Uint8Array([0x00, 0x00, 0x00, 0x01]),
            ),
            "Example Manufacturer",
            "Model-11",
            "SN-100",
            "Rev-A",
            manufacturerId,
            true,
            [
                new ComponentAddress(tcg_address_ethernetmac, "00-11-22-33-44-55"),
            ],
            new CertificateIdentifier(
                new HashedCertificateIdentifier(
                    new AlgorithmIdentifier(sha256),
                    new Uint8Array([0xab, 0xcd]),
                ),
                undefined,
            ),
            new URIReference(
                "https://example.test/platform",
                new AlgorithmIdentifier(sha256),
                new Uint8ClampedArray([1, 0, 1, 1]),
            ),
            AttributeStatus.added,
        );

        const encoded = _encode_ComponentIdentifierV11(original, $.BER);
        const decoded = _decode_ComponentIdentifierV11(encoded);

        expect(decoded.componentClass.componentClassRegistry.isEqualTo(
            original.componentClass.componentClassRegistry,
        )).toBe(true);
        expect(decoded.componentClass.componentClassValue).toEqual(
            original.componentClass.componentClassValue,
        );
        expect(decoded.componentManufacturer).toBe(original.componentManufacturer);
        expect(decoded.componentModel).toBe(original.componentModel);
        expect(decoded.componentSerial).toBe(original.componentSerial);
        expect(decoded.componentRevision).toBe(original.componentRevision);
        expect(decoded.componentManufacturerId?.isEqualTo(manufacturerId)).toBe(true);
        expect(decoded.fieldReplaceable).toBe(true);
        expect(decoded.componentAddresses?.length).toBe(1);
        expect(decoded.componentAddresses?.[0]?.addressType.isEqualTo(tcg_address_ethernetmac)).toBe(true);
        expect(decoded.componentAddresses?.[0]?.addressValue).toBe("00-11-22-33-44-55");
        expect(decoded.componentPlatformCert?.hashedCertIdentifier?.hashAlgorithm.algorithm.isEqualTo(sha256)).toBe(true);
        expect(decoded.componentPlatformCert?.hashedCertIdentifier?.hashOverSignatureValue).toEqual(
            new Uint8Array([0xab, 0xcd]),
        );
        expect(decoded.componentPlatformCert?.genericCertIdentifier).toBeUndefined();
        expect(decoded.componentPlatformCertUri?.uniformResourceIdentifier).toBe("https://example.test/platform");
        expect(decoded.componentPlatformCertUri?.hashAlgorithm?.algorithm.isEqualTo(sha256)).toBe(true);
        expect(decoded.componentPlatformCertUri?.hashValue).toEqual(new Uint8ClampedArray([1, 0, 1, 1]));
        expect(decoded.status).toBe(AttributeStatus.added);
        expect(_encode_ComponentIdentifierV11(decoded, $.BER).toBytes()).toEqual(encoded.toBytes());
    });
});
