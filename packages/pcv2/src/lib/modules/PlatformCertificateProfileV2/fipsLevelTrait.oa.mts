/* eslint-disable */
import { FIPSLevel, _decode_FIPSLevel, _encode_FIPSLevel } from "../PlatformCertificateProfileV2/FIPSLevel.ta.mjs";
// export { FIPSLevel, _decode_FIPSLevel, _encode_FIPSLevel } from "../PlatformCertificateProfileV2/FIPSLevel.ta.mjs";
import { tcg_tr_ID_FIPSLevel } from "../PlatformCertificateProfileV2/tcg-tr-ID-FIPSLevel.va.mjs";
// export { tcg_tr_ID_FIPSLevel } from "../PlatformCertificateProfileV2/tcg-tr-ID-FIPSLevel.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary fipsLevelTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fipsLevelTrait TRAIT ::= {
 *     SYNTAX          FIPSLevel
 *     IDENTIFIED BY   tcg-tr-ID-FIPSLevel
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<FIPSLevel>}
 * @implements {TRAIT<FIPSLevel>}
 */
export
const fipsLevelTrait: TRAIT<FIPSLevel> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_FIPSLevel,
    },
    encoderFor: {
        "&TraitValueType": _encode_FIPSLevel,
    },
    "&id": tcg_tr_ID_FIPSLevel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
