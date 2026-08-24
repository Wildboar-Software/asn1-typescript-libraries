/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { pwdRecentlyExpired } from "../InformationFramework/pwdRecentlyExpired.oa.mjs";
import { id_oa_userPwdRecentlyExpired } from "../PasswordPolicy/id-oa-userPwdRecentlyExpired.va.mjs";
import { userPwd } from "../PasswordPolicy/userPwd.oa.mjs";
/**
 * @summary userPwdRecentlyExpired
 * @description
 *
 * Old password still valid **together with** `userPwd` during
 * `pwdRecentlyExpiredDuration`; removed when that duration elapses.
 * Syntax {@link UserPwd} (not a history SEQUENCE).
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

/* eslint-enable */
