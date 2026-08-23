/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { pwdRecentlyExpired } from "../InformationFramework/pwdRecentlyExpired.oa.mjs";
import { id_oa_userPwdRecentlyExpired } from "../PasswordPolicy/id-oa-userPwdRecentlyExpired.va.mjs";
import { userPwd } from "../PasswordPolicy/userPwd.oa.mjs";
/**
 * @summary userPwdRecentlyExpired
 * @description
 *
 * Single-valued operational attribute of syntax {@link UserPwd} (the expired
 * password itself, not a history SEQUENCE). Equality matching is the same as
 * the password attribute (`userPwdMatch`). Duration of retention is
 * `pwdRecentlyExpiredDuration`.
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
