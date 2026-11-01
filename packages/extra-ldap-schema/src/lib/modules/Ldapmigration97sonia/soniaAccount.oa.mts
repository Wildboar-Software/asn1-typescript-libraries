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
    NULL,
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
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { id_oc_soniaAccount } from "../Ldapmigration97sonia/id-oc-soniaAccount.va.mjs";
import { employeeType } from "../InetOrgPerson/employeeType.oa.mjs";
import { soniaUid } from "../Ldapmigration97sonia/soniaUid.oa.mjs";
import { soniaCreateTimestamp } from "../Ldapmigration97sonia/soniaCreateTimestamp.oa.mjs";
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
