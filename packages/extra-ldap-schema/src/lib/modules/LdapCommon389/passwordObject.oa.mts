/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_passwordObject } from "../LdapCommon389/id-oc-passwordObject.va.mjs";

import { pwdpolicysubentry } from "../LdapCommon389/pwdpolicysubentry.oa.mjs";
import { passwordExpirationTime } from "../LdapCommon389/passwordExpirationTime.oa.mjs";
import { passwordExpWarned } from "../LdapCommon389/passwordExpWarned.oa.mjs";
import { passwordRetryCount } from "../LdapCommon389/passwordRetryCount.oa.mjs";
import { retryCountResetTime } from "../LdapCommon389/retryCountResetTime.oa.mjs";
import { accountUnlockTime } from "../LdapCommon389/accountUnlockTime.oa.mjs";
import { passwordHistory } from "../LdapCommon389/passwordHistory.oa.mjs";
import { passwordAllowChangeTime } from "../LdapCommon389/passwordAllowChangeTime.oa.mjs";
import { passwordGraceUserTime } from "../LdapCommon389/passwordGraceUserTime.oa.mjs";
import { pwdReset } from "../LdapCommon389/pwdReset.oa.mjs";
import { pwdTPRReset } from "../LdapCommon389/pwdTPRReset.oa.mjs";
import { pwdTPRUseCount } from "../LdapCommon389/pwdTPRUseCount.oa.mjs";
import { pwdTPRValidFrom } from "../LdapCommon389/pwdTPRValidFrom.oa.mjs";
import { pwdTPRExpireAt } from "../LdapCommon389/pwdTPRExpireAt.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ pwdpolicysubentry, passwordExpirationTime, passwordExpWarned, passwordRetryCount, retryCountResetTime, accountUnlockTime, passwordHistory, passwordAllowChangeTime, passwordGraceUserTime, pwdReset, pwdTPRReset, pwdTPRUseCount, pwdTPRValidFrom, pwdTPRExpireAt, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "passwordObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined password policy objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_passwordObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
