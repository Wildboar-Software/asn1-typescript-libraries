/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { soniaAccount } from "../Ldapmigration97sonia/soniaAccount.oa.mjs";
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
const soniaPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
