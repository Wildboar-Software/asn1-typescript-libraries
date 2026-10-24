/* eslint-disable */
import { type PlatformHardwareCapabilities, _decode_PlatformHardwareCapabilities, _encode_PlatformHardwareCapabilities } from "../PlatformCertificateProfileV2/PlatformHardwareCapabilities.ta.mjs";
import { tcg_tr_ID_platformHardwareCapabilities } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformHardwareCapabilities.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary platformHardwareCapabilitiesTrait
 * @description
 *
 * Trait syntax for motherboard security capabilities. Category
 * `tcg-tr-cat-platformHardwareCapabilities`. Permitted in
 * `tBBSecurityAssertions`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.14.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * platformHardwareCapabilitiesTrait TRAIT ::= {
 *     SYNTAX          PlatformHardwareCapabilities
 *     IDENTIFIED BY   tcg-tr-ID-platformHardwareCapabilities
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<PlatformHardwareCapabilities>}
 * @implements {TRAIT<PlatformHardwareCapabilities>}
 */
export
const platformHardwareCapabilitiesTrait: TRAIT<PlatformHardwareCapabilities> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_PlatformHardwareCapabilities,
    },
    encoderFor: {
        "&TraitValueType": _encode_PlatformHardwareCapabilities,
    },
    "&id": tcg_tr_ID_platformHardwareCapabilities /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
