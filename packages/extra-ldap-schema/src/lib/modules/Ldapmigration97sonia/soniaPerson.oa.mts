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
import { soniaAccount } from "../Ldapmigration97sonia/soniaAccount.oa.mjs";
// export { soniaAccount } from "../Ldapmigration97sonia/soniaAccount.oa.mjs";
import { id_oc_soniaPerson } from "../Ldapmigration97sonia/id-oc-soniaPerson.va.mjs";
import { soniaCommonTimestamp } from "../Ldapmigration97sonia/soniaCommonTimestamp.oa.mjs";
import { soniaAcademicTitle } from "../Ldapmigration97sonia/soniaAcademicTitle.oa.mjs";
import { soniaAddressVisibility } from "../Ldapmigration97sonia/soniaAddressVisibility.oa.mjs";
import { soniaCampus } from "../Ldapmigration97sonia/soniaCampus.oa.mjs";
import { soniaChipCardNumber } from "../Ldapmigration97sonia/soniaChipCardNumber.oa.mjs";
import { soniaCustomerNumber } from "../Ldapmigration97sonia/soniaCustomerNumber.oa.mjs";
import { soniaDepartment } from "../Ldapmigration97sonia/soniaDepartment.oa.mjs";
import { soniaDoorAccessSystemNumber } from "../Ldapmigration97sonia/soniaDoorAccessSystemNumber.oa.mjs";
import { soniaEducationalDepartment } from "../Ldapmigration97sonia/soniaEducationalDepartment.oa.mjs";
import { soniaEmailVisibility } from "../Ldapmigration97sonia/soniaEmailVisibility.oa.mjs";
import { soniaFaculty } from "../Ldapmigration97sonia/soniaFaculty.oa.mjs";
import { soniaGender } from "../Ldapmigration97sonia/soniaGender.oa.mjs";
import { soniaHomeEqualsSemester } from "../Ldapmigration97sonia/soniaHomeEqualsSemester.oa.mjs";
import { soniaInstitute } from "../Ldapmigration97sonia/soniaInstitute.oa.mjs";
import { soniaIsAlumni } from "../Ldapmigration97sonia/soniaIsAlumni.oa.mjs";
import { soniaIsUnregistered } from "../Ldapmigration97sonia/soniaIsUnregistered.oa.mjs";
import { soniaLaboratory } from "../Ldapmigration97sonia/soniaLaboratory.oa.mjs";
import { soniaPhotoVisibility } from "../Ldapmigration97sonia/soniaPhotoVisibility.oa.mjs";
import { soniaReceivingAddress } from "../Ldapmigration97sonia/soniaReceivingAddress.oa.mjs";
import { soniaSalutation } from "../Ldapmigration97sonia/soniaSalutation.oa.mjs";
import { soniaStudentNumber } from "../Ldapmigration97sonia/soniaStudentNumber.oa.mjs";
import { soniaBirthday } from "../Ldapmigration97sonia/soniaBirthday.oa.mjs";
import { soniaChipcardCounter } from "../Ldapmigration97sonia/soniaChipcardCounter.oa.mjs";
import { soniaChipcardBarcode } from "../Ldapmigration97sonia/soniaChipcardBarcode.oa.mjs";
import { soniaChipcardIsLocked } from "../Ldapmigration97sonia/soniaChipcardIsLocked.oa.mjs";
import { soniaChipcardIsLockedBy } from "../Ldapmigration97sonia/soniaChipcardIsLockedBy.oa.mjs";
import { soniaChipcardIsLockedReason } from "../Ldapmigration97sonia/soniaChipcardIsLockedReason.oa.mjs";
import { soniaChipcardIsLockedTimestamp } from "../Ldapmigration97sonia/soniaChipcardIsLockedTimestamp.oa.mjs";
import { soniaChipcardIsIssued } from "../Ldapmigration97sonia/soniaChipcardIsIssued.oa.mjs";
import { soniaChipcardIsIssuedBy } from "../Ldapmigration97sonia/soniaChipcardIsIssuedBy.oa.mjs";
import { soniaChipcardIsIssuedTimestamp } from "../Ldapmigration97sonia/soniaChipcardIsIssuedTimestamp.oa.mjs";
import { soniaChipcardDoorAccessAllowedZones } from "../Ldapmigration97sonia/soniaChipcardDoorAccessAllowedZones.oa.mjs";
import { soniaStudentStatus } from "../Ldapmigration97sonia/soniaStudentStatus.oa.mjs";
import { soniaStudentUnregistrationTime } from "../Ldapmigration97sonia/soniaStudentUnregistrationTime.oa.mjs";
import { soniaStudentUnregistrationReason } from "../Ldapmigration97sonia/soniaStudentUnregistrationReason.oa.mjs";
import { soniaStudentValidityCode } from "../Ldapmigration97sonia/soniaStudentValidityCode.oa.mjs";
import { soniaStudentProgram } from "../Ldapmigration97sonia/soniaStudentProgram.oa.mjs";
import { soniaVoted } from "../Ldapmigration97sonia/soniaVoted.oa.mjs";
import { soniaIssueId } from "../Ldapmigration97sonia/soniaIssueId.oa.mjs";
import { soniaChipcardHistory } from "../Ldapmigration97sonia/soniaChipcardHistory.oa.mjs";
import { soniaSocialSecurityNumber } from "../Ldapmigration97sonia/soniaSocialSecurityNumber.oa.mjs";
import { soniaSapCentralPerson } from "../Ldapmigration97sonia/soniaSapCentralPerson.oa.mjs";
// export { id_oc_soniaPerson } from "../Ldapmigration97sonia/id-oc-soniaPerson.va.mjs";


/**
 * @summary soniaPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { soniaAccount }
 *   MAY CONTAIN               { soniaCommonTimestamp
 *                               | soniaAcademicTitle
 *                               | soniaAddressVisibility
 *                               | soniaCampus
 *                               | soniaChipCardNumber
 *                               | soniaCustomerNumber
 *                               | soniaDepartment
 *                               | soniaDoorAccessSystemNumber
 *                               | soniaEducationalDepartment
 *                               | soniaEmailVisibility
 *                               | soniaFaculty
 *                               | soniaGender
 *                               | soniaHomeEqualsSemester
 *                               | soniaInstitute
 *                               | soniaIsAlumni
 *                               | soniaIsUnregistered
 *                               | soniaLaboratory
 *                               | soniaPhotoVisibility
 *                               | soniaReceivingAddress
 *                               | soniaSalutation
 *                               | soniaStudentNumber
 *                               | soniaBirthday
 *                               | soniaChipcardCounter
 *                               | soniaChipcardBarcode
 *                               | soniaChipcardIsLocked
 *                               | soniaChipcardIsLockedBy
 *                               | soniaChipcardIsLockedReason
 *                               | soniaChipcardIsLockedTimestamp
 *                               | soniaChipcardIsIssued
 *                               | soniaChipcardIsIssuedBy
 *                               | soniaChipcardIsIssuedTimestamp
 *                               | soniaChipcardDoorAccessAllowedZones
 *                               | soniaStudentStatus
 *                               | soniaStudentUnregistrationTime
 *                               | soniaStudentUnregistrationReason
 *                               | soniaStudentValidityCode
 *                               | soniaStudentProgram
 *                               | soniaVoted
 *                               | soniaIssueId
 *                               | soniaChipcardHistory
 *                               | soniaSocialSecurityNumber
 *                               | soniaSapCentralPerson }
 *   LDAP-NAME                 {"soniaPerson"}
 *   ID                        id-oc-soniaPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ soniaAccount, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaCommonTimestamp, soniaAcademicTitle, soniaAddressVisibility, soniaCampus, soniaChipCardNumber, soniaCustomerNumber, soniaDepartment, soniaDoorAccessSystemNumber, soniaEducationalDepartment, soniaEmailVisibility, soniaFaculty, soniaGender, soniaHomeEqualsSemester, soniaInstitute, soniaIsAlumni, soniaIsUnregistered, soniaLaboratory, soniaPhotoVisibility, soniaReceivingAddress, soniaSalutation, soniaStudentNumber, soniaBirthday, soniaChipcardCounter, soniaChipcardBarcode, soniaChipcardIsLocked, soniaChipcardIsLockedBy, soniaChipcardIsLockedReason, soniaChipcardIsLockedTimestamp, soniaChipcardIsIssued, soniaChipcardIsIssuedBy, soniaChipcardIsIssuedTimestamp, soniaChipcardDoorAccessAllowedZones, soniaStudentStatus, soniaStudentUnregistrationTime, soniaStudentUnregistrationReason, soniaStudentValidityCode, soniaStudentProgram, soniaVoted, soniaIssueId, soniaChipcardHistory, soniaSocialSecurityNumber, soniaSapCentralPerson, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaPerson" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
