/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { tcg_tr_ID_UTF8String } from "../PlatformCertificateProfileV2/tcg-tr-ID-UTF8String.va.mjs";
// export { tcg_tr_ID_UTF8String } from "../PlatformCertificateProfileV2/tcg-tr-ID-UTF8String.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary utf8StringTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * utf8StringTrait TRAIT ::= {
 *     SYNTAX          UTF8String (SIZE (1..strmax))
 *     IDENTIFIED BY   tcg-tr-ID-UTF8String
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<UTF8String>}
 * @implements {TRAIT<UTF8String>}
 */
export
const utf8StringTrait: TRAIT<UTF8String> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": (el: _Element): UTF8String => {
            const value = $._decodeUTF8String(el);
            if (value.length < 1 || value.length > strmax) {
                throw new ASN1SizeError("utf8StringTrait.&TraitValueType violates SIZE (1..strmax)");
            }
            return value;
        },
    },
    encoderFor: {
        "&TraitValueType": $._encodeUTF8String,
    },
    "&id": tcg_tr_ID_UTF8String /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
