/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { id_oc_ftRls } from "../LdapApacheFortress/id-oc-ftRls.va.mjs";
import { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
import { ftRoleName } from "../LdapApacheFortress/ftRoleName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { ftCstr } from "../LdapApacheFortress/ftCstr.oa.mjs";
import { ftParents } from "../LdapApacheFortress/ftParents.oa.mjs";


/**
 * @summary ftRls
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftRls OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftRoleName }
 *   MAY CONTAIN               { description
 *                               | ftCstr
 *                               | ftParents }
 *   LDAP-NAME                 {"ftRls"}
 *   LDAP-DESC                 "Fortress Role Structural Object Class"
 *   ID                        id-oc-ftRls }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftRls: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalRole, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ftId, ftRoleName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, ftCstr, ftParents, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftRls" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Role Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftRls /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

