/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_cloudosInetOrgPerson } from "../LdapCloudos/id-oc-cloudosInetOrgPerson.va.mjs";


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
const cloudosInetOrgPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
