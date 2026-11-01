/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_ftHier } from "../LdapApacheFortress/id-oc-ftHier.va.mjs";
import { ftRels } from "../LdapApacheFortress/ftRels.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary ftHier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftHier OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { ftRels
 *                               | description }
 *   LDAP-NAME                 {"ftHier"}
 *   LDAP-DESC                 "Fortress Hierarchy Structural Object Class"
 *   ID                        id-oc-ftHier }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftHier: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalRole, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftRels, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftHier" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Hierarchy Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftHier /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

