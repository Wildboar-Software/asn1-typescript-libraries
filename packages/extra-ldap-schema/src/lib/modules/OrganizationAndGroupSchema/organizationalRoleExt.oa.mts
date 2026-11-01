/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { id_oc_organizationalRoleExt } from "../OrganizationAndGroupSchema/id-oc-organizationalRoleExt.va.mjs";

import { ExtOrganizationOrGroupAttributes } from "../OrganizationAndGroupSchema/ExtOrganizationOrGroupAttributes.osa.mjs";
/**
 * @summary organizationalRoleExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalRoleExt OBJECT-CLASS ::= {
 *     SUBCLASS OF         {organizationalRole}
 *     KIND                structural
 *     MAY CONTAIN         {ExtOrganizationOrGroupAttributes}
 *     LDAP-NAME           {"organizationalRoleExt"}
 *     LDAP-DESC           "An organizational role"
 *     ID                  id-oc-organizationalRoleExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const organizationalRoleExt: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organizationalRole, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ...ExtOrganizationOrGroupAttributes, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "organizationalRoleExt" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "An organizational role" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_organizationalRoleExt /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
