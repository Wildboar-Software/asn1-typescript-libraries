/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
import { ftType } from "../LdapApacheFortress/ftType.oa.mjs";
import { id_oc_ftObject } from "../LdapApacheFortress/id-oc-ftObject.va.mjs";
import { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
import { ftObjNm } from "../LdapApacheFortress/ftObjNm.oa.mjs";


/**
 * @summary ftObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalUnit }
 *   MUST CONTAIN              { ftId
 *                               | ftObjNm }
 *   MAY CONTAIN               { ftType }
 *   LDAP-NAME                 {"ftObject"}
 *   LDAP-DESC                 "Fortress Permission Object Class"
 *   ID                        id-oc-ftObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalUnit, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ftId, ftObjNm, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftType, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftObject" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Permission Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftObject /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

