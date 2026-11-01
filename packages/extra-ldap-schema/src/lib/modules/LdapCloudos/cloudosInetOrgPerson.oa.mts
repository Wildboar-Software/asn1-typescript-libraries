/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_cloudosInetOrgPerson } from "../LdapCloudos/id-oc-cloudosInetOrgPerson.va.mjs";

import { entryUUID } from "../LdapCloudos/entryUUID.oa.mjs";
import { ctime } from "../LdapCloudos/ctime.oa.mjs";
import { resetPasswordToken } from "../LdapCloudos/resetPasswordToken.oa.mjs";
import { resetPasswordTokenCtime } from "../LdapCloudos/resetPasswordTokenCtime.oa.mjs";
import { emailVerified } from "../LdapCloudos/emailVerified.oa.mjs";
import { emailVerificationCode } from "../LdapCloudos/emailVerificationCode.oa.mjs";
import { emailVerificationCodeCtime } from "../LdapCloudos/emailVerificationCodeCtime.oa.mjs";
import { mobilePhoneCountryCode } from "../LdapCloudos/mobilePhoneCountryCode.oa.mjs";
import { mobilePhone } from "../LdapCloudos/mobilePhone.oa.mjs";
import { admin } from "../LdapCloudos/admin.oa.mjs";
import { suspended } from "../LdapCloudos/suspended.oa.mjs";
import { twoFactor } from "../LdapCloudos/twoFactor.oa.mjs";
import { twoFactorAuthId } from "../LdapCloudos/twoFactorAuthId.oa.mjs";
import { lastLogin } from "../LdapCloudos/lastLogin.oa.mjs";
import { storageQuota } from "../LdapCloudos/storageQuota.oa.mjs";
/**
 * @summary cloudosInetOrgPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cloudosInetOrgPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { entryUUID
 *                               | ctime
 *                               | resetPasswordToken
 *                               | resetPasswordTokenCtime
 *                               | emailVerified
 *                               | emailVerificationCode
 *                               | emailVerificationCodeCtime
 *                               | mobilePhoneCountryCode
 *                               | mobilePhone
 *                               | admin
 *                               | suspended
 *                               | twoFactor
 *                               | twoFactorAuthId
 *                               | lastLogin
 *                               | storageQuota }
 *   LDAP-NAME                 {"cloudosInetOrgPerson"}
 *   LDAP-DESC                 "cloudos Internet Organizational Person"
 *   ID                        id-oc-cloudosInetOrgPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cloudosInetOrgPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ entryUUID, ctime, resetPasswordToken, resetPasswordTokenCtime, emailVerified, emailVerificationCode, emailVerificationCodeCtime, mobilePhoneCountryCode, mobilePhone, admin, suspended, twoFactor, twoFactorAuthId, lastLogin, storageQuota, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "cloudosInetOrgPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "cloudos Internet Organizational Person" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cloudosInetOrgPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
