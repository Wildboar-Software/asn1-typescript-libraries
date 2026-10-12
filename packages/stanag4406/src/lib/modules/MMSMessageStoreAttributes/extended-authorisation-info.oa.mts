/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { ExtendedAuthorisationInfo, _decode_ExtendedAuthorisationInfo, _encode_ExtendedAuthorisationInfo } from "../MMSHeadingExtensions/ExtendedAuthorisationInfo.ta.mjs";
// export { ExtendedAuthorisationInfo, _decode_ExtendedAuthorisationInfo, _encode_ExtendedAuthorisationInfo } from "../MMSHeadingExtensions/ExtendedAuthorisationInfo.ta.mjs";
import { id_nato_mmhs_hat_extended_authorisation_info } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-extended-authorisation-info.va.mjs";
// export { id_nato_mmhs_hat_extended_authorisation_info } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-extended-authorisation-info.va.mjs";


/**
 * @summary extended_authorisation_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * extended-authorisation-info ATTRIBUTE ::= {
 *   WITH SYNTAX   ExtendedAuthorisationInfo
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-extended-authorisation-info }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<ExtendedAuthorisationInfo>}
 * @implements {ATTRIBUTE<ExtendedAuthorisationInfo>}
 */
export
const extended_authorisation_info: ATTRIBUTE<ExtendedAuthorisationInfo> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExtendedAuthorisationInfo,
    },
    encoderFor: {
        "&Type": _encode_ExtendedAuthorisationInfo,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_extended_authorisation_info /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
