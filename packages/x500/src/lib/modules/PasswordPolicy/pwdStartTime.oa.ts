/* eslint-disable */
import { GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { id_oa_pwdStartTime } from "../PasswordPolicy/id-oa-pwdStartTime.va.js";
import { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.js";
import { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa.js";
import { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_oa_pwdStartTime } from "../PasswordPolicy/id-oa-pwdStartTime.va.js";
export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.js";
export { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa.js";
export { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.js";

/* START_OF_SYMBOL_DEFINITION pwdStartTime */
/**
 * @summary pwdStartTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdStartTime ATTRIBUTE ::= {
 *   WITH SYNTAX              GeneralizedTime
 *   EQUALITY MATCHING RULE   generalizedTimeMatch
 *   ORDERING MATCHING RULE   generalizedTimeOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              generalizedTime.&id
 *   LDAP-NAME                {"pwdStartTime"}
 *   ID                       id-oa-pwdStartTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<GeneralizedTime>}
 * @implements {ATTRIBUTE<GeneralizedTime>}
 */
export const pwdStartTime: ATTRIBUTE<GeneralizedTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdStartTime"],
    "&id": id_oa_pwdStartTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdStartTime */

/* eslint-enable */
