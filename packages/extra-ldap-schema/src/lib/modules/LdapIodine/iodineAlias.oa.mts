/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { alias } from "../InformationFramework/alias.oa.mjs";
import { id_oc_iodineAlias } from "../LdapIodine/id-oc-iodineAlias.va.mjs";
import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { iodineUid } from "./iodineUid.oa.mjs";
import { tjhsstActivityId } from "./tjhsstActivityId.oa.mjs";
import { tjhsstClassId } from "./tjhsstClassId.oa.mjs";
import { tjhsstGroupId } from "./tjhsstGroupId.oa.mjs";
import { tjhsstSectionId } from "./tjhsstSectionId.oa.mjs";
import { tjhsstStudentId } from "./tjhsstStudentId.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [alias] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [iodineUid, tjhsstGroupId, tjhsstActivityId, tjhsstStudentId, tjhsstSectionId, tjhsstClassId, roomNumber, uid] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["iodineAlias"],
    "&id": id_oc_iodineAlias /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
