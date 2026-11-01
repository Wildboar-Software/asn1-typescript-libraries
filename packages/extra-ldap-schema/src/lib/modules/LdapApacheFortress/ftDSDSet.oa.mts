/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { id_oc_ftDSDSet } from "../LdapApacheFortress/id-oc-ftDSDSet.va.mjs";

import { ftRoles } from "../LdapApacheFortress/ftRoles.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
import { ftSetName } from "../LdapApacheFortress/ftSetName.oa.mjs";
import { ftSetCardinality } from "../LdapApacheFortress/ftSetCardinality.oa.mjs";
/**
 * @summary ftDSDSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftDSDSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftSetName
 *                               | ftSetCardinality }
 *   MAY CONTAIN               { ftRoles
 *                               | description }
 *   LDAP-NAME                 {"ftDSDSet"}
 *   LDAP-DESC                 "Fortress Role Dynamic Separation of Duty Set Structural Object Class"
 *   ID                        id-oc-ftDSDSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftDSDSet: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalRole, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ftId, ftSetName, ftSetCardinality, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftRoles, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftDSDSet" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress Role Dynamic Separation of Duty Set Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftDSDSet /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
