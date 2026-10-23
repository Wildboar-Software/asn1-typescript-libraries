/* eslint-disable */
import { PlatformFirmwareCapabilities, _decode_PlatformFirmwareCapabilities, _encode_PlatformFirmwareCapabilities } from "../PlatformCertificateProfileV2/PlatformFirmwareCapabilities.ta.mjs";
import { tcg_tr_ID_platformFirmwareCapabilities } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformFirmwareCapabilities.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary platformFirmwareCapabilitiesTrait
 * @description
 *
 * Trait syntax for firmware security capabilities. Category
 * `tcg-tr-cat-platformFirmwareCapabilities`. Permitted in
 * `tBBSecurityAssertions`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.11.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * platformFirmwareCapabilitiesTrait TRAIT ::= {
 *     SYNTAX          PlatformFirmwareCapabilities
 *     IDENTIFIED BY   tcg-tr-ID-platformFirmwareCapabilities
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<PlatformFirmwareCapabilities>}
 * @implements {TRAIT<PlatformFirmwareCapabilities>}
 */
export
const platformFirmwareCapabilitiesTrait: TRAIT<PlatformFirmwareCapabilities> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_PlatformFirmwareCapabilities,
    },
    encoderFor: {
        "&TraitValueType": _encode_PlatformFirmwareCapabilities,
    },
    "&id": tcg_tr_ID_platformFirmwareCapabilities /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
