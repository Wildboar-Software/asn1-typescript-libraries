/* eslint-disable */
import { PlatformFirmwareCapabilities, _decode_PlatformFirmwareCapabilities, _encode_PlatformFirmwareCapabilities } from "../PlatformCertificateProfileV2/PlatformFirmwareCapabilities.ta.mjs";
// export { PlatformFirmwareCapabilities, PlatformFirmwareCapabilities_fwSetupAuthLocal /* IMPORTED_LONG_NAMED_BIT */, fwSetupAuthLocal /* IMPORTED_SHORT_NAMED_BIT */, PlatformFirmwareCapabilities_fwSetupAuthRemote /* IMPORTED_LONG_NAMED_BIT */, fwSetupAuthRemote /* IMPORTED_SHORT_NAMED_BIT */, PlatformFirmwareCapabilities_sMMProtection /* IMPORTED_LONG_NAMED_BIT */, sMMProtection /* IMPORTED_SHORT_NAMED_BIT */, PlatformFirmwareCapabilities_fwKernelDMAProtection /* IMPORTED_LONG_NAMED_BIT */, fwKernelDMAProtection /* IMPORTED_SHORT_NAMED_BIT */, _decode_PlatformFirmwareCapabilities, _encode_PlatformFirmwareCapabilities } from "../PlatformCertificateProfileV2/PlatformFirmwareCapabilities.ta.mjs";
import { tcg_tr_ID_platformFirmwareCapabilities } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformFirmwareCapabilities.va.mjs";
// export { tcg_tr_ID_platformFirmwareCapabilities } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformFirmwareCapabilities.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary platformFirmwareCapabilitiesTrait
 * @description
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
