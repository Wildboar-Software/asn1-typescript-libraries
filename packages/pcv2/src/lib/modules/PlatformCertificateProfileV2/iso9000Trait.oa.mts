/* eslint-disable */
import { ISO9000Certification, _decode_ISO9000Certification, _encode_ISO9000Certification } from "../PlatformCertificateProfileV2/ISO9000Certification.ta.mjs";
// export { ISO9000Certification, _decode_ISO9000Certification, _encode_ISO9000Certification } from "../PlatformCertificateProfileV2/ISO9000Certification.ta.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary iso9000Trait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iso9000Trait TRAIT ::= {
 *     SYNTAX          ISO9000Certification
 *     IDENTIFIED BY   tcg-tr-ID-ISO9000
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<ISO9000Certification>}
 * @implements {TRAIT<ISO9000Certification>}
 */
export
const iso9000Trait: TRAIT<ISO9000Certification> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_ISO9000Certification,
    },
    encoderFor: {
        "&TraitValueType": _encode_ISO9000Certification,
    },
    "&id": tcg_tr_ID_ISO9000 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
