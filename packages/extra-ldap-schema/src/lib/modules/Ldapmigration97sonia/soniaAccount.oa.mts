/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { id_oc_soniaAccount } from "../Ldapmigration97sonia/id-oc-soniaAccount.va.mjs";

import { soniaPasswordTimestamp } from "../Ldapmigration97sonia/soniaPasswordTimestamp.oa.mjs";
import { soniaIsDeletionPrepared } from "../Ldapmigration97sonia/soniaIsDeletionPrepared.oa.mjs";
import { soniaIsDeleted } from "../Ldapmigration97sonia/soniaIsDeleted.oa.mjs";
import { soniaIsLocked } from "../Ldapmigration97sonia/soniaIsLocked.oa.mjs";
import { soniaInitialPlainPassword } from "../Ldapmigration97sonia/soniaInitialPlainPassword.oa.mjs";
import { soniaIsLockedReason } from "../Ldapmigration97sonia/soniaIsLockedReason.oa.mjs";
import { soniaIsLockedBy } from "../Ldapmigration97sonia/soniaIsLockedBy.oa.mjs";
import { soniaAnnotation } from "../Ldapmigration97sonia/soniaAnnotation.oa.mjs";
import { soniaIsValidFrom } from "../Ldapmigration97sonia/soniaIsValidFrom.oa.mjs";
import { soniaIsValidUntil } from "../Ldapmigration97sonia/soniaIsValidUntil.oa.mjs";
import { soniaStatus } from "../Ldapmigration97sonia/soniaStatus.oa.mjs";
import { soniaIsLockedTimestamp } from "../Ldapmigration97sonia/soniaIsLockedTimestamp.oa.mjs";
import { soniaUserLog } from "../Ldapmigration97sonia/soniaUserLog.oa.mjs";
import { soniaPasswordCrypt } from "../Ldapmigration97sonia/soniaPasswordCrypt.oa.mjs";
import { soniaPasswordMD5 } from "../Ldapmigration97sonia/soniaPasswordMD5.oa.mjs";
import { soniaPasswordSHA } from "../Ldapmigration97sonia/soniaPasswordSHA.oa.mjs";
import { soniaPasswordLMPW } from "../Ldapmigration97sonia/soniaPasswordLMPW.oa.mjs";
import { soniaPasswordNTPW } from "../Ldapmigration97sonia/soniaPasswordNTPW.oa.mjs";
import { soniaPasswordRndN16 } from "../Ldapmigration97sonia/soniaPasswordRndN16.oa.mjs";
import { soniaIsAccountFormPrinted } from "../Ldapmigration97sonia/soniaIsAccountFormPrinted.oa.mjs";
import { soniaFileHost } from "../Ldapmigration97sonia/soniaFileHost.oa.mjs";
import { soniaUserPrefs } from "../Ldapmigration97sonia/soniaUserPrefs.oa.mjs";
import { soniaMailDelegatedAddress } from "../Ldapmigration97sonia/soniaMailDelegatedAddress.oa.mjs";
import { soniaVoIPPIN } from "../Ldapmigration97sonia/soniaVoIPPIN.oa.mjs";
import { employeeType } from "../InetOrgPerson/employeeType.oa.mjs";
import { soniaUid } from "../Ldapmigration97sonia/soniaUid.oa.mjs";
import { soniaCreateTimestamp } from "../Ldapmigration97sonia/soniaCreateTimestamp.oa.mjs";
/**
 * @summary soniaAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MUST CONTAIN              { employeeType
 *                               | soniaUid
 *                               | soniaCreateTimestamp }
 *   MAY CONTAIN               { soniaPasswordTimestamp
 *                               | soniaIsDeletionPrepared
 *                               | soniaIsDeleted
 *                               | soniaIsLocked
 *                               | soniaInitialPlainPassword
 *                               | soniaIsLockedReason
 *                               | soniaIsLockedBy
 *                               | soniaAnnotation
 *                               | soniaIsValidFrom
 *                               | soniaIsValidUntil
 *                               | soniaStatus
 *                               | soniaIsLockedTimestamp
 *                               | soniaUserLog
 *                               | soniaPasswordCrypt
 *                               | soniaPasswordMD5
 *                               | soniaPasswordSHA
 *                               | soniaPasswordLMPW
 *                               | soniaPasswordNTPW
 *                               | soniaPasswordRndN16
 *                               | soniaIsAccountFormPrinted
 *                               | soniaFileHost
 *                               | soniaUserPrefs
 *                               | soniaMailDelegatedAddress
 *                               | soniaVoIPPIN }
 *   LDAP-NAME                 {"soniaAccount"}
 *   ID                        id-oc-soniaAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetOrgPerson, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ employeeType, soniaUid, soniaCreateTimestamp, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaPasswordTimestamp, soniaIsDeletionPrepared, soniaIsDeleted, soniaIsLocked, soniaInitialPlainPassword, soniaIsLockedReason, soniaIsLockedBy, soniaAnnotation, soniaIsValidFrom, soniaIsValidUntil, soniaStatus, soniaIsLockedTimestamp, soniaUserLog, soniaPasswordCrypt, soniaPasswordMD5, soniaPasswordSHA, soniaPasswordLMPW, soniaPasswordNTPW, soniaPasswordRndN16, soniaIsAccountFormPrinted, soniaFileHost, soniaUserPrefs, soniaMailDelegatedAddress, soniaVoIPPIN, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaAccount" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
