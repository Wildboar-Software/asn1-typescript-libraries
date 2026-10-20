/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_tr_ID_IA5String } from "../PlatformCertificateProfileV2/tcg-tr-ID-IA5String.va.mjs";
// export { tcg_tr_ID_IA5String } from "../PlatformCertificateProfileV2/tcg-tr-ID-IA5String.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary ia5StringTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ia5StringTrait TRAIT ::= {
 *     SYNTAX          IA5String (SIZE (1..strmax))
 *     IDENTIFIED BY   tcg-tr-ID-IA5String
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<IA5String>}
 * @implements {TRAIT<IA5String>}
 */
export
const ia5StringTrait: TRAIT<IA5String> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": $._decodeIA5String,
    },
    encoderFor: {
        "&TraitValueType": $._encodeIA5String,
    },
    "&id": tcg_tr_ID_IA5String /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
