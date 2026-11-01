/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { alias } from "../InformationFramework/alias.oa.mjs";
import { id_oc_iodineAlias } from "../LdapIodine/id-oc-iodineAlias.va.mjs";

import { iodineUid } from "../LdapIodine/iodineUid.oa.mjs";
import { tjhsstGroupId } from "../LdapIodine/tjhsstGroupId.oa.mjs";
import { tjhsstActivityId } from "../LdapIodine/tjhsstActivityId.oa.mjs";
import { tjhsstStudentId } from "../LdapIodine/tjhsstStudentId.oa.mjs";
import { tjhsstSectionId } from "../LdapIodine/tjhsstSectionId.oa.mjs";
import { tjhsstClassId } from "../LdapIodine/tjhsstClassId.oa.mjs";
import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
/**
 * @summary iodineAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iodineAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { alias }
 *   MAY CONTAIN               { iodineUid
 *                               | tjhsstGroupId
 *                               | tjhsstActivityId
 *                               | tjhsstStudentId
 *                               | tjhsstSectionId
 *                               | tjhsstClassId
 *                               | roomNumber
 *                               | uid }
 *   LDAP-NAME                 {"iodineAlias"}
 *   ID                        id-oc-iodineAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iodineAlias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ alias, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iodineUid, tjhsstGroupId, tjhsstActivityId, tjhsstStudentId, tjhsstSectionId, tjhsstClassId, roomNumber, uid, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iodineAlias" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iodineAlias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
