/* eslint-disable */
import { type RTMTypes, _decode_RTMTypes, _encode_RTMTypes } from "../PlatformCertificateProfileV2/RTMTypes.ta.mjs";
import { tcg_tr_ID_RTM } from "../PlatformCertificateProfileV2/tcg-tr-ID-RTM.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary rtmTrait
 * @description
 *
 * Trait syntax for which RTM kinds the platform implements. Category
 * `tcg-tr-cat-RTM`. The value does not select the RTM used at boot. Permitted
 * in `tBBSecurityAssertions`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rtmTrait TRAIT ::= {
 *     SYNTAX          RTMTypes
 *     IDENTIFIED BY   tcg-tr-ID-RTM
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<RTMTypes>}
 * @implements {TRAIT<RTMTypes>}
 */
export
const rtmTrait: TRAIT<RTMTypes> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_RTMTypes,
    },
    encoderFor: {
        "&TraitValueType": _encode_RTMTypes,
    },
    "&id": tcg_tr_ID_RTM /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
