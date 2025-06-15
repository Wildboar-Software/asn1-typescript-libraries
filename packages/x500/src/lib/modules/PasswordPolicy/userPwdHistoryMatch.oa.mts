/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { pwdHistoryMatch } from "../InformationFramework/pwdHistoryMatch.oa.mjs";
import { id_mr_userPwdHistoryMatch } from "../PasswordPolicy/id-mr-userPwdHistoryMatch.va.mjs";
import { userPwd } from "../PasswordPolicy/userPwd.oa.mjs";
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

/* eslint-enable */
