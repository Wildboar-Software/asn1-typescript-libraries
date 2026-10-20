/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_tr_ID_PEMCertString } from "../PlatformCertificateProfileV2/tcg-tr-ID-PEMCertString.va.mjs";
// export { tcg_tr_ID_PEMCertString } from "../PlatformCertificateProfileV2/tcg-tr-ID-PEMCertString.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary pemCertStringTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pemCertStringTrait TRAIT ::= {
 *     SYNTAX          UTF8String (SIZE (1..certstrmax))
 *     IDENTIFIED BY   tcg-tr-ID-PEMCertString
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<UTF8String>}
 * @implements {TRAIT<UTF8String>}
 */
export
const pemCertStringTrait: TRAIT<UTF8String> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": $._decodeUTF8String,
    },
    encoderFor: {
        "&TraitValueType": $._encodeUTF8String,
    },
    "&id": tcg_tr_ID_PEMCertString /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
