/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_passwordPolicy } from "../LdapCommon389/id-oc-passwordPolicy.va.mjs";
import { passwordAdminDN } from "./passwordAdminDN.oa.mjs";
import { passwordAdminSkipInfoUpdate } from "./passwordAdminSkipInfoUpdate.oa.mjs";
import { passwordBadWords } from "./passwordBadWords.oa.mjs";
import { passwordBreachCheck } from "./passwordBreachCheck.oa.mjs";
import { passwordBreachDbTimeout } from "./passwordBreachDbTimeout.oa.mjs";
import { passwordBreachDbUrl } from "./passwordBreachDbUrl.oa.mjs";
import { passwordChange } from "./passwordChange.oa.mjs";
import { passwordCheckSyntax } from "./passwordCheckSyntax.oa.mjs";
import { passwordDictCheck } from "./passwordDictCheck.oa.mjs";
import { passwordDictPath } from "./passwordDictPath.oa.mjs";
import { passwordExp } from "./passwordExp.oa.mjs";
import { passwordGraceLimit } from "./passwordGraceLimit.oa.mjs";
import { passwordInHistory } from "./passwordInHistory.oa.mjs";
import { passwordKeepHistory } from "./passwordKeepHistory.oa.mjs";
import { passwordLockout } from "./passwordLockout.oa.mjs";
import { passwordLockoutDuration } from "./passwordLockoutDuration.oa.mjs";
import { passwordMaxAge } from "./passwordMaxAge.oa.mjs";
import { passwordMaxClassChars } from "./passwordMaxClassChars.oa.mjs";
import { passwordMaxFailure } from "./passwordMaxFailure.oa.mjs";
import { passwordMaxRepeats } from "./passwordMaxRepeats.oa.mjs";
import { passwordMaxSeqSets } from "./passwordMaxSeqSets.oa.mjs";
import { passwordMaxSequence } from "./passwordMaxSequence.oa.mjs";
import { passwordMin8bit } from "./passwordMin8bit.oa.mjs";
import { passwordMinAge } from "./passwordMinAge.oa.mjs";
import { passwordMinAlphas } from "./passwordMinAlphas.oa.mjs";
import { passwordMinCategories } from "./passwordMinCategories.oa.mjs";
import { passwordMinDigits } from "./passwordMinDigits.oa.mjs";
import { passwordMinLength } from "./passwordMinLength.oa.mjs";
import { passwordMinLowers } from "./passwordMinLowers.oa.mjs";
import { passwordMinSpecials } from "./passwordMinSpecials.oa.mjs";
import { passwordMinTokenLength } from "./passwordMinTokenLength.oa.mjs";
import { passwordMinUppers } from "./passwordMinUppers.oa.mjs";
import { passwordMustChange } from "./passwordMustChange.oa.mjs";
import { passwordPalindrome } from "./passwordPalindrome.oa.mjs";
import { passwordResetDuration } from "./passwordResetDuration.oa.mjs";
import { passwordResetFailureCount } from "./passwordResetFailureCount.oa.mjs";
import { passwordSendExpiringTime } from "./passwordSendExpiringTime.oa.mjs";
import { passwordStorageScheme } from "./passwordStorageScheme.oa.mjs";
import { passwordTPRDelayExpireAt } from "./passwordTPRDelayExpireAt.oa.mjs";
import { passwordTPRDelayValidFrom } from "./passwordTPRDelayValidFrom.oa.mjs";
import { passwordTPRMaxUse } from "./passwordTPRMaxUse.oa.mjs";
import { passwordTrackUpdateTime } from "./passwordTrackUpdateTime.oa.mjs";
import { passwordUnlock } from "./passwordUnlock.oa.mjs";
import { passwordUserAttributes } from "./passwordUserAttributes.oa.mjs";
import { passwordWarning } from "./passwordWarning.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [passwordMaxAge, passwordExp, passwordMinLength, passwordKeepHistory, passwordInHistory, passwordChange, passwordWarning, passwordLockout, passwordMaxFailure, passwordResetDuration, passwordUnlock, passwordLockoutDuration, passwordCheckSyntax, passwordMustChange, passwordStorageScheme, passwordMinAge, passwordResetFailureCount, passwordGraceLimit, passwordMinDigits, passwordMinAlphas, passwordMinUppers, passwordMinLowers, passwordMinSpecials, passwordMin8bit, passwordMaxRepeats, passwordMinCategories, passwordMinTokenLength, passwordTrackUpdateTime, passwordAdminDN, passwordDictCheck, passwordDictPath, passwordPalindrome, passwordMaxSequence, passwordMaxClassChars, passwordMaxSeqSets, passwordBadWords, passwordUserAttributes, passwordSendExpiringTime, passwordTPRMaxUse, passwordTPRDelayExpireAt, passwordTPRDelayValidFrom, passwordAdminSkipInfoUpdate, passwordBreachCheck, passwordBreachDbUrl, passwordBreachDbTimeout] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["passwordPolicy"],
    "&ldapDesc": "Netscape defined password policy objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_passwordPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
