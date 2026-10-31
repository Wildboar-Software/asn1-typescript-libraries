/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_passwordObject } from "../LdapCommon389/id-oc-passwordObject.va.mjs";
import { accountUnlockTime } from "./accountUnlockTime.oa.mjs";
import { passwordAllowChangeTime } from "./passwordAllowChangeTime.oa.mjs";
import { passwordExpWarned } from "./passwordExpWarned.oa.mjs";
import { passwordExpirationTime } from "./passwordExpirationTime.oa.mjs";
import { passwordGraceUserTime } from "./passwordGraceUserTime.oa.mjs";
import { passwordHistory } from "./passwordHistory.oa.mjs";
import { passwordRetryCount } from "./passwordRetryCount.oa.mjs";
import { pwdReset } from "./pwdReset.oa.mjs";
import { pwdTPRExpireAt } from "./pwdTPRExpireAt.oa.mjs";
import { pwdTPRReset } from "./pwdTPRReset.oa.mjs";
import { pwdTPRUseCount } from "./pwdTPRUseCount.oa.mjs";
import { pwdTPRValidFrom } from "./pwdTPRValidFrom.oa.mjs";
import { pwdpolicysubentry } from "./pwdpolicysubentry.oa.mjs";
import { retryCountResetTime } from "./retryCountResetTime.oa.mjs";

/**
 * @summary passwordObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * passwordObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { pwdpolicysubentry
 *                               | passwordExpirationTime
 *                               | passwordExpWarned
 *                               | passwordRetryCount
 *                               | retryCountResetTime
 *                               | accountUnlockTime
 *                               | passwordHistory
 *                               | passwordAllowChangeTime
 *                               | passwordGraceUserTime
 *                               | pwdReset
 *                               | pwdTPRReset
 *                               | pwdTPRUseCount
 *                               | pwdTPRValidFrom
 *                               | pwdTPRExpireAt }
 *   LDAP-NAME                 {"passwordObject"}
 *   LDAP-DESC                 "Netscape defined password policy objectclass"
 *   ID                        id-oc-passwordObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const passwordObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [pwdpolicysubentry, passwordExpirationTime, passwordExpWarned, passwordRetryCount, retryCountResetTime, accountUnlockTime, passwordHistory, passwordAllowChangeTime, passwordGraceUserTime, pwdReset, pwdTPRReset, pwdTPRUseCount, pwdTPRValidFrom, pwdTPRExpireAt] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["passwordObject"],
    "&ldapDesc": "Netscape defined password policy objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_passwordObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
