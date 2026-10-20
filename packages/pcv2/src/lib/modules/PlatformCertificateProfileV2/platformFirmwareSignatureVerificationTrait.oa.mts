/* eslint-disable */
import { _decode_PlatformFirmwareSignatureVerification, _encode_PlatformFirmwareSignatureVerification, PlatformFirmwareSignatureVerification } from "../PlatformCertificateProfileV2/PlatformFirmwareSignatureVerification.ta.mjs";
// export { PlatformFirmwareSignatureVerification, PlatformFirmwareSignatureVerification_hardwareSRTM /* IMPORTED_LONG_NAMED_BIT */, hardwareSRTM /* IMPORTED_SHORT_NAMED_BIT */, PlatformFirmwareSignatureVerification_secureBoot /* IMPORTED_LONG_NAMED_BIT */, secureBoot /* IMPORTED_SHORT_NAMED_BIT */, _decode_PlatformFirmwareSignatureVerification, _encode_PlatformFirmwareSignatureVerification } from "../PlatformCertificateProfileV2/PlatformFirmwareSignatureVerification.ta.mjs";
import { tcg_tr_ID_platformFirmwareSignatureVerification } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformFirmwareSignatureVerification.va.mjs";
// export { tcg_tr_ID_platformFirmwareSignatureVerification } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformFirmwareSignatureVerification.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary platformFirmwareSignatureVerificationTrait
 * @description
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
