/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { id_oc_soniaAccount } from "../Ldapmigration97sonia/id-oc-soniaAccount.va.mjs";


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
const soniaAccount: OBJECT_CLASS = undefined;

/* eslint-enable */
