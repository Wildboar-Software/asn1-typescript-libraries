/* eslint-disable */
import {
    ASN1Error,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_registry_componentClass_disk } from "../PlatformCertificateProfileV2/tcg-registry-componentClass-disk.va.mjs";
import { tcg_registry_componentClass_dmtf } from "../PlatformCertificateProfileV2/tcg-registry-componentClass-dmtf.va.mjs";
import { tcg_registry_componentClass_pcie } from "../PlatformCertificateProfileV2/tcg-registry-componentClass-pcie.va.mjs";
import { tcg_registry_componentClass_tcg } from "../PlatformCertificateProfileV2/tcg-registry-componentClass-tcg.va.mjs";



/**
 * @summary ComponentClassRegistry
 * @description
 *
 * Registry that assigns `componentClassValue`. The profile permits the TCG
 * component class registry, the SMBIOS-based DMTF registry, the PCIe registry,
 * and the storage registry. This module accepts
 * `tcg-registry-componentClass-disk` (`{tcg-registry-componentClass 5}`) for
 * the storage alternative, which section 4.2.5 names
 * `tcg-registry-componentClass-storage` and section 5 also lists as
 * `tcg-registry-componentClass-disk`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentClassRegistry  ::=  OBJECT IDENTIFIER (
 *     tcg-registry-componentClass-tcg
 *     | tcg-registry-componentClass-dmtf
 *     | tcg-registry-componentClass-pcie
 *     | tcg-registry-componentClass-storage
 * )
 * ```
 */
export
type ComponentClassRegistry = OBJECT_IDENTIFIER; // ObjectIdentifierType

// The profile constraint names tcg-registry-componentClass-storage.
// The module assigns that arc as tcg-registry-componentClass-disk.
const _permitted_component_class_registries: OBJECT_IDENTIFIER[] = [
    tcg_registry_componentClass_tcg,
    tcg_registry_componentClass_dmtf,
    tcg_registry_componentClass_pcie,
    tcg_registry_componentClass_disk,
];

export
const _decode_ComponentClassRegistry: $.ASN1Decoder<ComponentClassRegistry> = (el) => {
    const value = $._decodeObjectIdentifier(el);
    if (!_permitted_component_class_registries.some((oid) => oid.isEqualTo(value))) {
        throw new ASN1Error("ComponentClassRegistry is not a permitted object identifier");
    }
    return value;
};

export
const _encode_ComponentClassRegistry: $.ASN1Encoder<ComponentClassRegistry> = $._encodeObjectIdentifier;

/* eslint-enable */
