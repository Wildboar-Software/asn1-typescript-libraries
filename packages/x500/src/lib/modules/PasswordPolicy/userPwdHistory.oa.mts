/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { pwdHistory } from "../InformationFramework/pwdHistory.oa.mjs";
import { id_oa_userPwdHistory } from "../PasswordPolicy/id-oa-userPwdHistory.va.mjs";
import { userPwd } from "../PasswordPolicy/userPwd.oa.mjs";
import { userPwdHistoryMatch } from "../PasswordPolicy/userPwdHistoryMatch.oa.mjs";
/**
 * @summary userPwdHistory
 * @description
 *
 * Operational attribute `pwdHistory{userPwd,userPwdHistoryMatch,…}`: SEQUENCE
 * `{ time GeneralizedTime, password UserPwd, ... }`. Equality matching is
 * {@link userPwdHistoryMatch}, whose assertion is {@link UserPwd} (a presented
 * password), not a history tuple. Multi-valued; slot count is policy
 * (`pwdHistorySlots`).
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
