/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { pwdHistory } from "../InformationFramework/pwdHistory.oa.mjs";
import { id_oa_userPwdHistory } from "../PasswordPolicy/id-oa-userPwdHistory.va.mjs";
import { userPwd } from "../PasswordPolicy/userPwd.oa.mjs";
import { userPwdHistoryMatch } from "../PasswordPolicy/userPwdHistoryMatch.oa.mjs";
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

/* eslint-enable */
