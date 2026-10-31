/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_cloudosInetOrgPerson } from "../LdapCloudos/id-oc-cloudosInetOrgPerson.va.mjs";
import { admin } from "./admin.oa.mjs";
import { ctime } from "./ctime.oa.mjs";
import { emailVerificationCode } from "./emailVerificationCode.oa.mjs";
import { emailVerificationCodeCtime } from "./emailVerificationCodeCtime.oa.mjs";
import { emailVerified } from "./emailVerified.oa.mjs";
import { entryUUID } from "./entryUUID.oa.mjs";
import { lastLogin } from "./lastLogin.oa.mjs";
import { mobilePhone } from "./mobilePhone.oa.mjs";
import { mobilePhoneCountryCode } from "./mobilePhoneCountryCode.oa.mjs";
import { resetPasswordToken } from "./resetPasswordToken.oa.mjs";
import { resetPasswordTokenCtime } from "./resetPasswordTokenCtime.oa.mjs";
import { storageQuota } from "./storageQuota.oa.mjs";
import { suspended } from "./suspended.oa.mjs";
import { twoFactor } from "./twoFactor.oa.mjs";
import { twoFactorAuthId } from "./twoFactorAuthId.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [entryUUID, ctime, resetPasswordToken, resetPasswordTokenCtime, emailVerified, emailVerificationCode, emailVerificationCodeCtime, mobilePhoneCountryCode, mobilePhone, admin, suspended, twoFactor, twoFactorAuthId, lastLogin, storageQuota] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cloudosInetOrgPerson"],
    "&ldapDesc": "cloudos Internet Organizational Person" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cloudosInetOrgPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
