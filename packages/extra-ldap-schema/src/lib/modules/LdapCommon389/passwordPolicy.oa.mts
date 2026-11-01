/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_passwordPolicy } from "../LdapCommon389/id-oc-passwordPolicy.va.mjs";

import { passwordMaxAge } from "../LdapCommon389/passwordMaxAge.oa.mjs";
import { passwordExp } from "../LdapCommon389/passwordExp.oa.mjs";
import { passwordMinLength } from "../LdapCommon389/passwordMinLength.oa.mjs";
import { passwordKeepHistory } from "../LdapCommon389/passwordKeepHistory.oa.mjs";
import { passwordInHistory } from "../LdapCommon389/passwordInHistory.oa.mjs";
import { passwordChange } from "../LdapCommon389/passwordChange.oa.mjs";
import { passwordWarning } from "../LdapCommon389/passwordWarning.oa.mjs";
import { passwordLockout } from "../LdapCommon389/passwordLockout.oa.mjs";
import { passwordMaxFailure } from "../LdapCommon389/passwordMaxFailure.oa.mjs";
import { passwordResetDuration } from "../LdapCommon389/passwordResetDuration.oa.mjs";
import { passwordUnlock } from "../LdapCommon389/passwordUnlock.oa.mjs";
import { passwordLockoutDuration } from "../LdapCommon389/passwordLockoutDuration.oa.mjs";
import { passwordCheckSyntax } from "../LdapCommon389/passwordCheckSyntax.oa.mjs";
import { passwordMustChange } from "../LdapCommon389/passwordMustChange.oa.mjs";
import { passwordStorageScheme } from "../LdapCommon389/passwordStorageScheme.oa.mjs";
import { passwordMinAge } from "../LdapCommon389/passwordMinAge.oa.mjs";
import { passwordResetFailureCount } from "../LdapCommon389/passwordResetFailureCount.oa.mjs";
import { passwordGraceLimit } from "../LdapCommon389/passwordGraceLimit.oa.mjs";
import { passwordMinDigits } from "../LdapCommon389/passwordMinDigits.oa.mjs";
import { passwordMinAlphas } from "../LdapCommon389/passwordMinAlphas.oa.mjs";
import { passwordMinUppers } from "../LdapCommon389/passwordMinUppers.oa.mjs";
import { passwordMinLowers } from "../LdapCommon389/passwordMinLowers.oa.mjs";
import { passwordMinSpecials } from "../LdapCommon389/passwordMinSpecials.oa.mjs";
import { passwordMin8bit } from "../LdapCommon389/passwordMin8bit.oa.mjs";
import { passwordMaxRepeats } from "../LdapCommon389/passwordMaxRepeats.oa.mjs";
import { passwordMinCategories } from "../LdapCommon389/passwordMinCategories.oa.mjs";
import { passwordMinTokenLength } from "../LdapCommon389/passwordMinTokenLength.oa.mjs";
import { passwordTrackUpdateTime } from "../LdapCommon389/passwordTrackUpdateTime.oa.mjs";
import { passwordAdminDN } from "../LdapCommon389/passwordAdminDN.oa.mjs";
import { passwordDictCheck } from "../LdapCommon389/passwordDictCheck.oa.mjs";
import { passwordDictPath } from "../LdapCommon389/passwordDictPath.oa.mjs";
import { passwordPalindrome } from "../LdapCommon389/passwordPalindrome.oa.mjs";
import { passwordMaxSequence } from "../LdapCommon389/passwordMaxSequence.oa.mjs";
import { passwordMaxClassChars } from "../LdapCommon389/passwordMaxClassChars.oa.mjs";
import { passwordMaxSeqSets } from "../LdapCommon389/passwordMaxSeqSets.oa.mjs";
import { passwordBadWords } from "../LdapCommon389/passwordBadWords.oa.mjs";
import { passwordUserAttributes } from "../LdapCommon389/passwordUserAttributes.oa.mjs";
import { passwordSendExpiringTime } from "../LdapCommon389/passwordSendExpiringTime.oa.mjs";
import { passwordTPRMaxUse } from "../LdapCommon389/passwordTPRMaxUse.oa.mjs";
import { passwordTPRDelayExpireAt } from "../LdapCommon389/passwordTPRDelayExpireAt.oa.mjs";
import { passwordTPRDelayValidFrom } from "../LdapCommon389/passwordTPRDelayValidFrom.oa.mjs";
import { passwordAdminSkipInfoUpdate } from "../LdapCommon389/passwordAdminSkipInfoUpdate.oa.mjs";
import { passwordBreachCheck } from "../LdapCommon389/passwordBreachCheck.oa.mjs";
import { passwordBreachDbUrl } from "../LdapCommon389/passwordBreachDbUrl.oa.mjs";
import { passwordBreachDbTimeout } from "../LdapCommon389/passwordBreachDbTimeout.oa.mjs";
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
const passwordPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ passwordMaxAge, passwordExp, passwordMinLength, passwordKeepHistory, passwordInHistory, passwordChange, passwordWarning, passwordLockout, passwordMaxFailure, passwordResetDuration, passwordUnlock, passwordLockoutDuration, passwordCheckSyntax, passwordMustChange, passwordStorageScheme, passwordMinAge, passwordResetFailureCount, passwordGraceLimit, passwordMinDigits, passwordMinAlphas, passwordMinUppers, passwordMinLowers, passwordMinSpecials, passwordMin8bit, passwordMaxRepeats, passwordMinCategories, passwordMinTokenLength, passwordTrackUpdateTime, passwordAdminDN, passwordDictCheck, passwordDictPath, passwordPalindrome, passwordMaxSequence, passwordMaxClassChars, passwordMaxSeqSets, passwordBadWords, passwordUserAttributes, passwordSendExpiringTime, passwordTPRMaxUse, passwordTPRDelayExpireAt, passwordTPRDelayValidFrom, passwordAdminSkipInfoUpdate, passwordBreachCheck, passwordBreachDbUrl, passwordBreachDbTimeout, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "passwordPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined password policy objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_passwordPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
