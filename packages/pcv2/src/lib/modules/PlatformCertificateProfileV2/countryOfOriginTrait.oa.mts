/* eslint-disable */
import { OriginComposition, _decode_OriginComposition, _encode_OriginComposition } from "../PlatformCertificateProfileV2/OriginComposition.ta.mjs";
import { tcg_tr_ID_countryOfOrigin } from "../PlatformCertificateProfileV2/tcg-tr-ID-countryOfOrigin.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary countryOfOriginTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * countryOfOriginTrait TRAIT ::= {
 *     SYNTAX          OriginComposition
 *     IDENTIFIED BY   tcg-tr-ID-countryOfOrigin
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<OriginComposition>}
 * @implements {TRAIT<OriginComposition>}
 */
export
const countryOfOriginTrait: TRAIT<OriginComposition> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_OriginComposition,
    },
    encoderFor: {
        "&TraitValueType": _encode_OriginComposition,
    },
    "&id": tcg_tr_ID_countryOfOrigin /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
