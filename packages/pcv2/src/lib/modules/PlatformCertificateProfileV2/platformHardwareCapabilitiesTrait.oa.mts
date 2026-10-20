/* eslint-disable */
import { PlatformHardwareCapabilities, _decode_PlatformHardwareCapabilities, _encode_PlatformHardwareCapabilities } from "../PlatformCertificateProfileV2/PlatformHardwareCapabilities.ta.mjs";
// export { PlatformHardwareCapabilities, PlatformHardwareCapabilities_iOMMUSupport /* IMPORTED_LONG_NAMED_BIT */, iOMMUSupport /* IMPORTED_SHORT_NAMED_BIT */, PlatformHardwareCapabilities_trustedExecutionEnvironment /* IMPORTED_LONG_NAMED_BIT */, trustedExecutionEnvironment /* IMPORTED_SHORT_NAMED_BIT */, PlatformHardwareCapabilities_physicalTamperProtection /* IMPORTED_LONG_NAMED_BIT */, physicalTamperProtection /* IMPORTED_SHORT_NAMED_BIT */, PlatformHardwareCapabilities_physicalTamperDetection /* IMPORTED_LONG_NAMED_BIT */, physicalTamperDetection /* IMPORTED_SHORT_NAMED_BIT */, PlatformHardwareCapabilities_firmwareFlashWP /* IMPORTED_LONG_NAMED_BIT */, firmwareFlashWP /* IMPORTED_SHORT_NAMED_BIT */, PlatformHardwareCapabilities_externalDMASupport /* IMPORTED_LONG_NAMED_BIT */, externalDMASupport /* IMPORTED_SHORT_NAMED_BIT */, _decode_PlatformHardwareCapabilities, _encode_PlatformHardwareCapabilities } from "../PlatformCertificateProfileV2/PlatformHardwareCapabilities.ta.mjs";
import { tcg_tr_ID_platformHardwareCapabilities } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformHardwareCapabilities.va.mjs";
// export { tcg_tr_ID_platformHardwareCapabilities } from "../PlatformCertificateProfileV2/tcg-tr-ID-platformHardwareCapabilities.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary platformHardwareCapabilitiesTrait
 * @description
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
