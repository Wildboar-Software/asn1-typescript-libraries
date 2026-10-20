/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_tr_ID_componentClass } from "../PlatformCertificateProfileV2/tcg-tr-ID-componentClass.va.mjs";
// export { tcg_tr_ID_componentClass } from "../PlatformCertificateProfileV2/tcg-tr-ID-componentClass.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary componentClassTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * componentClassTrait TRAIT ::= {
 *     SYNTAX          OCTET STRING (SIZE(4))
 *     IDENTIFIED BY   tcg-tr-ID-componentClass
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<OCTET_STRING>}
 * @implements {TRAIT<OCTET_STRING>}
 */
export
const componentClassTrait: TRAIT<OCTET_STRING> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": $._decodeOctetString,
    },
    encoderFor: {
        "&TraitValueType": $._encodeOctetString,
    },
    "&id": tcg_tr_ID_componentClass /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
