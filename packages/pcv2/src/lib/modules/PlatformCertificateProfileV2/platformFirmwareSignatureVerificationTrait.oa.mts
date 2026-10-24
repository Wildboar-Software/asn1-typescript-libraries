/* eslint-disable */
import { _decode_PlatformFirmwareSignatureVerification, _encode_PlatformFirmwareSignatureVerification, type PlatformFirmwareSignatureVerification } from "../PlatformCertificateProfileV2/PlatformFirmwareSignatureVerification.ta.mjs";
import { tcg_tr_ID_platformFirmwareSignatureVerification } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformFirmwareSignatureVerification.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary platformFirmwareSignatureVerificationTrait
 * @description
 *
 * Trait syntax for the firmware signature-verification method used at boot.
 * Category `tcg-tr-cat-platformFirmwareSignatureVerification`. Permitted in
 * `tBBSecurityAssertions`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.12.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * platformFirmwareSignatureVerificationTrait TRAIT ::= {
 *     SYNTAX          PlatformFirmwareSignatureVerification
 *     IDENTIFIED BY   tcg-tr-ID-platformFirmwareSignatureVerification
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<PlatformFirmwareSignatureVerification>}
 * @implements {TRAIT<PlatformFirmwareSignatureVerification>}
 */
export
const platformFirmwareSignatureVerificationTrait: TRAIT<PlatformFirmwareSignatureVerification> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_PlatformFirmwareSignatureVerification,
    },
    encoderFor: {
        "&TraitValueType": _encode_PlatformFirmwareSignatureVerification,
    },
    "&id": tcg_tr_ID_platformFirmwareSignatureVerification /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
