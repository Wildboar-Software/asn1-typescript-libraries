/* eslint-disable */
import { employeeType } from "../InetOrgPerson/employeeType.oa.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_soniaAccount } from "../Ldapmigration97sonia/id-oc-soniaAccount.va.mjs";
import { soniaAnnotation } from "./soniaAnnotation.oa.mjs";
import { soniaCreateTimestamp } from "./soniaCreateTimestamp.oa.mjs";
import { soniaFileHost } from "./soniaFileHost.oa.mjs";
import { soniaInitialPlainPassword } from "./soniaInitialPlainPassword.oa.mjs";
import { soniaIsAccountFormPrinted } from "./soniaIsAccountFormPrinted.oa.mjs";
import { soniaIsDeleted } from "./soniaIsDeleted.oa.mjs";
import { soniaIsDeletionPrepared } from "./soniaIsDeletionPrepared.oa.mjs";
import { soniaIsLocked } from "./soniaIsLocked.oa.mjs";
import { soniaIsLockedBy } from "./soniaIsLockedBy.oa.mjs";
import { soniaIsLockedReason } from "./soniaIsLockedReason.oa.mjs";
import { soniaIsLockedTimestamp } from "./soniaIsLockedTimestamp.oa.mjs";
import { soniaIsValidFrom } from "./soniaIsValidFrom.oa.mjs";
import { soniaIsValidUntil } from "./soniaIsValidUntil.oa.mjs";
import { soniaMailDelegatedAddress } from "./soniaMailDelegatedAddress.oa.mjs";
import { soniaPasswordCrypt } from "./soniaPasswordCrypt.oa.mjs";
import { soniaPasswordLMPW } from "./soniaPasswordLMPW.oa.mjs";
import { soniaPasswordMD5 } from "./soniaPasswordMD5.oa.mjs";
import { soniaPasswordNTPW } from "./soniaPasswordNTPW.oa.mjs";
import { soniaPasswordRndN16 } from "./soniaPasswordRndN16.oa.mjs";
import { soniaPasswordSHA } from "./soniaPasswordSHA.oa.mjs";
import { soniaPasswordTimestamp } from "./soniaPasswordTimestamp.oa.mjs";
import { soniaStatus } from "./soniaStatus.oa.mjs";
import { soniaUid } from "./soniaUid.oa.mjs";
import { soniaUserLog } from "./soniaUserLog.oa.mjs";
import { soniaUserPrefs } from "./soniaUserPrefs.oa.mjs";
import { soniaVoIPPIN } from "./soniaVoIPPIN.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [inetOrgPerson] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [employeeType, soniaUid, soniaCreateTimestamp] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaPasswordTimestamp, soniaIsDeletionPrepared, soniaIsDeleted, soniaIsLocked, soniaInitialPlainPassword, soniaIsLockedReason, soniaIsLockedBy, soniaAnnotation, soniaIsValidFrom, soniaIsValidUntil, soniaStatus, soniaIsLockedTimestamp, soniaUserLog, soniaPasswordCrypt, soniaPasswordMD5, soniaPasswordSHA, soniaPasswordLMPW, soniaPasswordNTPW, soniaPasswordRndN16, soniaIsAccountFormPrinted, soniaFileHost, soniaUserPrefs, soniaMailDelegatedAddress, soniaVoIPPIN] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaAccount"],
    "&id": id_oc_soniaAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
