/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { pwdHistoryMatch } from "../InformationFramework/pwdHistoryMatch.oa.js";
import { id_mr_userPwdHistoryMatch } from "../PasswordPolicy/id-mr-userPwdHistoryMatch.va.js";
import { userPwd } from "../PasswordPolicy/userPwd.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { pwdHistoryMatch } from "../InformationFramework/pwdHistoryMatch.oa.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_userPwdHistoryMatch } from "../PasswordPolicy/id-mr-userPwdHistoryMatch.va.js";
export { userPwd } from "../PasswordPolicy/userPwd.oa.js";

/* START_OF_SYMBOL_DEFINITION userPwdHistoryMatch */
/**
 * @summary userPwdHistoryMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdHistoryMatch MATCHING-RULE ::= pwdHistoryMatch{userPwd,id-mr-userPwdHistoryMatch}
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const userPwdHistoryMatch: MATCHING_RULE = pwdHistoryMatch(
    userPwd,
    id_mr_userPwdHistoryMatch
);
/* END_OF_SYMBOL_DEFINITION userPwdHistoryMatch */

/* eslint-enable */
