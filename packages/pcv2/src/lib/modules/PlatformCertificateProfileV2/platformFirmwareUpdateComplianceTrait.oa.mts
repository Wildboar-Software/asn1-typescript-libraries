/* eslint-disable */
import { _decode_PlatformFirmwareUpdateCompliance, _encode_PlatformFirmwareUpdateCompliance, PlatformFirmwareUpdateCompliance } from "../PlatformCertificateProfileV2/PlatformFirmwareUpdateCompliance.ta.mjs";
import { tcg_tr_ID_platformFirmwareUpdateCompliance } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformFirmwareUpdateCompliance.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary platformFirmwareUpdateComplianceTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * platformFirmwareUpdateComplianceTrait TRAIT ::= {
 *     SYNTAX          PlatformFirmwareUpdateCompliance
 *     IDENTIFIED BY   tcg-tr-ID-platformFirmwareUpdateCompliance
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<PlatformFirmwareUpdateCompliance>}
 * @implements {TRAIT<PlatformFirmwareUpdateCompliance>}
 */
export
const platformFirmwareUpdateComplianceTrait: TRAIT<PlatformFirmwareUpdateCompliance> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_PlatformFirmwareUpdateCompliance,
    },
    encoderFor: {
        "&TraitValueType": _encode_PlatformFirmwareUpdateCompliance,
    },
    "&id": tcg_tr_ID_platformFirmwareUpdateCompliance /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
