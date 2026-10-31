/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_soniaPerson } from "../Ldapmigration97sonia/id-oc-soniaPerson.va.mjs";
import { soniaAccount } from "../Ldapmigration97sonia/soniaAccount.oa.mjs";
import { soniaAcademicTitle } from "./soniaAcademicTitle.oa.mjs";
import { soniaAddressVisibility } from "./soniaAddressVisibility.oa.mjs";
import { soniaBirthday } from "./soniaBirthday.oa.mjs";
import { soniaCampus } from "./soniaCampus.oa.mjs";
import { soniaChipCardNumber } from "./soniaChipCardNumber.oa.mjs";
import { soniaChipcardBarcode } from "./soniaChipcardBarcode.oa.mjs";
import { soniaChipcardCounter } from "./soniaChipcardCounter.oa.mjs";
import { soniaChipcardDoorAccessAllowedZones } from "./soniaChipcardDoorAccessAllowedZones.oa.mjs";
import { soniaChipcardHistory } from "./soniaChipcardHistory.oa.mjs";
import { soniaChipcardIsIssued } from "./soniaChipcardIsIssued.oa.mjs";
import { soniaChipcardIsIssuedBy } from "./soniaChipcardIsIssuedBy.oa.mjs";
import { soniaChipcardIsIssuedTimestamp } from "./soniaChipcardIsIssuedTimestamp.oa.mjs";
import { soniaChipcardIsLocked } from "./soniaChipcardIsLocked.oa.mjs";
import { soniaChipcardIsLockedBy } from "./soniaChipcardIsLockedBy.oa.mjs";
import { soniaChipcardIsLockedReason } from "./soniaChipcardIsLockedReason.oa.mjs";
import { soniaChipcardIsLockedTimestamp } from "./soniaChipcardIsLockedTimestamp.oa.mjs";
import { soniaCommonTimestamp } from "./soniaCommonTimestamp.oa.mjs";
import { soniaCustomerNumber } from "./soniaCustomerNumber.oa.mjs";
import { soniaDepartment } from "./soniaDepartment.oa.mjs";
import { soniaDoorAccessSystemNumber } from "./soniaDoorAccessSystemNumber.oa.mjs";
import { soniaEducationalDepartment } from "./soniaEducationalDepartment.oa.mjs";
import { soniaEmailVisibility } from "./soniaEmailVisibility.oa.mjs";
import { soniaFaculty } from "./soniaFaculty.oa.mjs";
import { soniaGender } from "./soniaGender.oa.mjs";
import { soniaHomeEqualsSemester } from "./soniaHomeEqualsSemester.oa.mjs";
import { soniaInstitute } from "./soniaInstitute.oa.mjs";
import { soniaIsAlumni } from "./soniaIsAlumni.oa.mjs";
import { soniaIsUnregistered } from "./soniaIsUnregistered.oa.mjs";
import { soniaIssueId } from "./soniaIssueId.oa.mjs";
import { soniaLaboratory } from "./soniaLaboratory.oa.mjs";
import { soniaPhotoVisibility } from "./soniaPhotoVisibility.oa.mjs";
import { soniaReceivingAddress } from "./soniaReceivingAddress.oa.mjs";
import { soniaSalutation } from "./soniaSalutation.oa.mjs";
import { soniaSapCentralPerson } from "./soniaSapCentralPerson.oa.mjs";
import { soniaSocialSecurityNumber } from "./soniaSocialSecurityNumber.oa.mjs";
import { soniaStudentNumber } from "./soniaStudentNumber.oa.mjs";
import { soniaStudentProgram } from "./soniaStudentProgram.oa.mjs";
import { soniaStudentStatus } from "./soniaStudentStatus.oa.mjs";
import { soniaStudentUnregistrationReason } from "./soniaStudentUnregistrationReason.oa.mjs";
import { soniaStudentUnregistrationTime } from "./soniaStudentUnregistrationTime.oa.mjs";
import { soniaStudentValidityCode } from "./soniaStudentValidityCode.oa.mjs";
import { soniaVoted } from "./soniaVoted.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [soniaAccount] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaCommonTimestamp, soniaAcademicTitle, soniaAddressVisibility, soniaCampus, soniaChipCardNumber, soniaCustomerNumber, soniaDepartment, soniaDoorAccessSystemNumber, soniaEducationalDepartment, soniaEmailVisibility, soniaFaculty, soniaGender, soniaHomeEqualsSemester, soniaInstitute, soniaIsAlumni, soniaIsUnregistered, soniaLaboratory, soniaPhotoVisibility, soniaReceivingAddress, soniaSalutation, soniaStudentNumber, soniaBirthday, soniaChipcardCounter, soniaChipcardBarcode, soniaChipcardIsLocked, soniaChipcardIsLockedBy, soniaChipcardIsLockedReason, soniaChipcardIsLockedTimestamp, soniaChipcardIsIssued, soniaChipcardIsIssuedBy, soniaChipcardIsIssuedTimestamp, soniaChipcardDoorAccessAllowedZones, soniaStudentStatus, soniaStudentUnregistrationTime, soniaStudentUnregistrationReason, soniaStudentValidityCode, soniaStudentProgram, soniaVoted, soniaIssueId, soniaChipcardHistory, soniaSocialSecurityNumber, soniaSapCentralPerson] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaPerson"],
    "&id": id_oc_soniaPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
