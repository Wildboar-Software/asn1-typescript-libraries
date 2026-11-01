/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { groupOfUniqueNames } from "../SelectedObjectClasses/groupOfUniqueNames.oa.mjs";
import { id_oc_groupOfUniqueNamesExt } from "../OrganizationAndGroupSchema/id-oc-groupOfUniqueNamesExt.va.mjs";

import { ExtOrganizationOrGroupAttributes } from "../OrganizationAndGroupSchema/ExtOrganizationOrGroupAttributes.osa.mjs";
/**
 * @summary groupOfUniqueNamesExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfUniqueNamesExt OBJECT-CLASS ::= {
 *     SUBCLASS OF         {groupOfUniqueNames}
 *     KIND                structural
 *     MAY CONTAIN         {ExtOrganizationOrGroupAttributes}
 *     LDAP-NAME           {"groupOfUniqueNamesExt"}
 *     LDAP-DESC           "A group of unique names"
 *     ID                  id-oc-groupOfUniqueNamesExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupOfUniqueNamesExt: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ groupOfUniqueNames, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ...ExtOrganizationOrGroupAttributes, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "groupOfUniqueNamesExt" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A group of unique names" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_groupOfUniqueNamesExt /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
