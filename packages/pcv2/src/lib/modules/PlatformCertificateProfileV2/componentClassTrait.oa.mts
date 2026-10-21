/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_tr_ID_componentClass } from "../PlatformCertificateProfileV2/tcg-tr-ID-componentClass.va.mjs";
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
        "&TraitValueType": (el: _Element): OCTET_STRING => {
            const value = $._decodeOctetString(el);
            if (value.length !== 4) {
                throw new ASN1SizeError("componentClassTrait.&TraitValueType violates SIZE (4)");
            }
            return value;
        },
    },
    encoderFor: {
        "&TraitValueType": $._encodeOctetString,
    },
    "&id": tcg_tr_ID_componentClass /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
