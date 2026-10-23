/* eslint-disable */
import { CommonCriteriaEvaluation, _decode_CommonCriteriaEvaluation, _encode_CommonCriteriaEvaluation } from "../PlatformCertificateProfileV2/CommonCriteriaEvaluation.ta.mjs";
import { tcg_tr_ID_CommonCriteria } from "../PlatformCertificateProfileV2/tcg-tr-ID-CommonCriteria.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary commonCriteriaTrait
 * @description
 *
 * Trait syntax for a Common Criteria evaluation. Category
 * `tcg-tr-cat-CommonCriteria`. One of the traits permitted in
 * `tBBSecurityAssertions`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.3.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * commonCriteriaTrait TRAIT ::= {
 *     SYNTAX          CommonCriteriaEvaluation
 *     IDENTIFIED BY   tcg-tr-ID-CommonCriteria
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<CommonCriteriaEvaluation>}
 * @implements {TRAIT<CommonCriteriaEvaluation>}
 */
export
const commonCriteriaTrait: TRAIT<CommonCriteriaEvaluation> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_CommonCriteriaEvaluation,
    },
    encoderFor: {
        "&TraitValueType": _encode_CommonCriteriaEvaluation,
    },
    "&id": tcg_tr_ID_CommonCriteria /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
