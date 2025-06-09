/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import { pwdRecentlyExpired } from "../InformationFramework/pwdRecentlyExpired.oa.js";
import { id_oa_userPwdRecentlyExpired } from "../PasswordPolicy/id-oa-userPwdRecentlyExpired.va.js";
import { userPwd } from "../PasswordPolicy/userPwd.oa.js";
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
export { pwdRecentlyExpired } from "../InformationFramework/pwdRecentlyExpired.oa.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_oa_userPwdRecentlyExpired } from "../PasswordPolicy/id-oa-userPwdRecentlyExpired.va.js";
export { userPwd } from "../PasswordPolicy/userPwd.oa.js";

/* START_OF_SYMBOL_DEFINITION userPwdRecentlyExpired */
/**
 * @summary userPwdRecentlyExpired
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdRecentlyExpired ATTRIBUTE ::= pwdRecentlyExpired{userPwd,id-oa-userPwdRecentlyExpired}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPwdRecentlyExpired: ATTRIBUTE = pwdRecentlyExpired(
    userPwd,
    id_oa_userPwdRecentlyExpired
);
/* END_OF_SYMBOL_DEFINITION userPwdRecentlyExpired */

/* eslint-enable */
