/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { DistributionCodes, _decode_DistributionCodes, _encode_DistributionCodes } from "../MMSHeadingExtensions/DistributionCodes.ta.mjs";
import { id_nato_mmhs_hat_distribution_codes } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-distribution-codes.va.mjs";


/**
 * @summary distribution_codes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * distribution-codes ATTRIBUTE ::= {
 *   WITH SYNTAX   DistributionCodes
 *   ID            id-nato-mmhs-hat-distribution-codes }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistributionCodes>}
 * @implements {ATTRIBUTE<DistributionCodes>}
 */
export
const distribution_codes: ATTRIBUTE<DistributionCodes> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistributionCodes,
    },
    encoderFor: {
        "&Type": _encode_DistributionCodes,
    },
    "&id": id_nato_mmhs_hat_distribution_codes /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
