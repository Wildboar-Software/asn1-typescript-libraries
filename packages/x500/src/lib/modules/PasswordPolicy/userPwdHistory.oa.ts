/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import { pwdHistory } from "../InformationFramework/pwdHistory.oa.js";
import { id_oa_userPwdHistory } from "../PasswordPolicy/id-oa-userPwdHistory.va.js";
import { userPwd } from "../PasswordPolicy/userPwd.oa.js";
import { userPwdHistoryMatch } from "../PasswordPolicy/userPwdHistoryMatch.oa.js";
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
export { pwdHistory } from "../InformationFramework/pwdHistory.oa.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";

/* START_OF_SYMBOL_DEFINITION userPwdHistory */
/**
 * @summary userPwdHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdHistory ATTRIBUTE ::= pwdHistory{userPwd,userPwdHistoryMatch,id-oa-userPwdHistory}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPwdHistory: ATTRIBUTE = pwdHistory(
    userPwd,
    userPwdHistoryMatch,
    id_oa_userPwdHistory
);
/* END_OF_SYMBOL_DEFINITION userPwdHistory */

/* eslint-enable */
