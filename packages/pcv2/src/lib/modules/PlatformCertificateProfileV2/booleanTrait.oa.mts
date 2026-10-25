/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_tr_ID_Boolean } from "../PlatformCertificateProfileV2/tcg-tr-ID-Boolean.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary booleanTrait
 * @description
 *
 * Trait syntax for a Boolean. The profile's component example uses it with
 * category `tcg-tr-cat-componentFieldReplaceable`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * booleanTrait TRAIT ::= {
 *     SYNTAX          BOOLEAN
 *     IDENTIFIED BY   tcg-tr-ID-Boolean
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<BOOLEAN>}
 * @implements {TRAIT<BOOLEAN>}
 */
export
const booleanTrait: TRAIT<BOOLEAN> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": $._decodeBoolean,
    },
    encoderFor: {
        "&TraitValueType": $._encodeBoolean,
    },
    "&id": tcg_tr_ID_Boolean /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
