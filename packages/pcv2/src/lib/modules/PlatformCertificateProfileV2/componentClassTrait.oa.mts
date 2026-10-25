/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_tr_ID_componentClass } from "../PlatformCertificateProfileV2/tcg-tr-ID-componentClass.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary componentClassTrait
 * @description
 *
 * Trait syntax for a 4-byte component class. The registry named by
 * `traitRegistry` defines the value. Category `tcg-tr-cat-componentClass` when
 * the trait identifies a component type.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.4.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
