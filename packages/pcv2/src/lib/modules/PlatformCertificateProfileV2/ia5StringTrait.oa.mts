/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { tcg_tr_ID_IA5String } from "../PlatformCertificateProfileV2/tcg-tr-ID-IA5String.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary ia5StringTrait
 * @description
 *
 * Trait syntax for an IA5String of length 1..`strmax`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.19.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
        "&TraitValueType": (el: _Element): IA5String => {
            const value = $._decodeIA5String(el);
            if (value.length < 1 || value.length > strmax) {
                throw new ASN1SizeError("ia5StringTrait.&TraitValueType violates SIZE (1..strmax)");
            }
            return value;
        },
    },
    encoderFor: {
        "&TraitValueType": $._encodeIA5String,
    },
    "&id": tcg_tr_ID_IA5String /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
