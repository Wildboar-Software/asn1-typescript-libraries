/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_passwordPolicy } from "../LdapCommon389/id-oc-passwordPolicy.va.mjs";


/**
 * @summary passwordPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * passwordPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { passwordMaxAge
 *                               | passwordExp
 *                               | passwordMinLength
 *                               | passwordKeepHistory
 *                               | passwordInHistory
 *                               | passwordChange
 *                               | passwordWarning
 *                               | passwordLockout
 *                               | passwordMaxFailure
 *                               | passwordResetDuration
 *                               | passwordUnlock
 *                               | passwordLockoutDuration
 *                               | passwordCheckSyntax
 *                               | passwordMustChange
 *                               | passwordStorageScheme
 *                               | passwordMinAge
 *                               | passwordResetFailureCount
 *                               | passwordGraceLimit
 *                               | passwordMinDigits
 *                               | passwordMinAlphas
 *                               | passwordMinUppers
 *                               | passwordMinLowers
 *                               | passwordMinSpecials
 *                               | passwordMin8bit
 *                               | passwordMaxRepeats
 *                               | passwordMinCategories
 *                               | passwordMinTokenLength
 *                               | passwordTrackUpdateTime
 *                               | passwordAdminDN
 *                               | passwordDictCheck
 *                               | passwordDictPath
 *                               | passwordPalindrome
 *                               | passwordMaxSequence
 *                               | passwordMaxClassChars
 *                               | passwordMaxSeqSets
 *                               | passwordBadWords
 *                               | passwordUserAttributes
 *                               | passwordSendExpiringTime
 *                               | passwordTPRMaxUse
 *                               | passwordTPRDelayExpireAt
 *                               | passwordTPRDelayValidFrom
 *                               | passwordAdminSkipInfoUpdate
 *                               | passwordBreachCheck
 *                               | passwordBreachDbUrl
 *                               | passwordBreachDbTimeout }
 *   LDAP-NAME                 {"passwordPolicy"}
 *   LDAP-DESC                 "Netscape defined password policy objectclass"
 *   ID                        id-oc-passwordPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const passwordPolicy: OBJECT_CLASS = undefined;

/* eslint-enable */
