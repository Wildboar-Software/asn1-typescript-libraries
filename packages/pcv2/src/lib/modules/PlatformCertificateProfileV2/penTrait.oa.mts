/* eslint-disable */
import { PrivateEnterpriseNumber, _decode_PrivateEnterpriseNumber, _encode_PrivateEnterpriseNumber } from "../PlatformCertificateProfileV2/PrivateEnterpriseNumber.ta.mjs";
// export { PrivateEnterpriseNumber, _decode_PrivateEnterpriseNumber, _encode_PrivateEnterpriseNumber } from "../PlatformCertificateProfileV2/PrivateEnterpriseNumber.ta.mjs";
import { tcg_tr_ID_PEN } from "../PlatformCertificateProfileV2/tcg-tr-ID-PEN.va.mjs";
// export { tcg_tr_ID_PEN } from "../PlatformCertificateProfileV2/tcg-tr-ID-PEN.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary penTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * penTrait TRAIT ::= {
 *     SYNTAX          PrivateEnterpriseNumber
 *     IDENTIFIED BY   tcg-tr-ID-PEN
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<PrivateEnterpriseNumber>}
 * @implements {TRAIT<PrivateEnterpriseNumber>}
 */
export
const penTrait: TRAIT<PrivateEnterpriseNumber> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_PrivateEnterpriseNumber,
    },
    encoderFor: {
        "&TraitValueType": _encode_PrivateEnterpriseNumber,
    },
    "&id": tcg_tr_ID_PEN /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
