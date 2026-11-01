/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_tjhsstClass } from "../LdapIodine/id-oc-tjhsstClass.va.mjs";

import { shortClassName } from "../LdapIodine/shortClassName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { enrolledStudent } from "../LdapIodine/enrolledStudent.oa.mjs";
import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { tjhsstClassId } from "../LdapIodine/tjhsstClassId.oa.mjs";
import { tjhsstSectionId } from "../LdapIodine/tjhsstSectionId.oa.mjs";
import { courseLength } from "../LdapIodine/courseLength.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { sponsorDn } from "../LdapIodine/sponsorDn.oa.mjs";
import { graduationYear } from "../LdapIodine/graduationYear.oa.mjs";
import { quarterNumber } from "../LdapIodine/quarterNumber.oa.mjs";
import { classPeriod } from "../LdapIodine/classPeriod.oa.mjs";
/**
 * @summary tjhsstClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjhsstClass OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { tjhsstClassId
 *                               | tjhsstSectionId
 *                               | courseLength
 *                               | commonName
 *                               | sponsorDn
 *                               | graduationYear
 *                               | quarterNumber
 *                               | classPeriod }
 *   MAY CONTAIN               { shortClassName
 *                               | description
 *                               | displayName
 *                               | enrolledStudent
 *                               | roomNumber }
 *   LDAP-NAME                 {"tjhsstClass"}
 *   ID                        id-oc-tjhsstClass }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjhsstClass: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ tjhsstClassId, tjhsstSectionId, courseLength, commonName, sponsorDn, graduationYear, quarterNumber, classPeriod, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ shortClassName, description, displayName, enrolledStudent, roomNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "tjhsstClass" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tjhsstClass /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
