/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { addmdName } from "../LdapSchema2ldifNadf/addmdName.oa.mjs";
import { id_oc_nadfADDMD } from "../LdapSchema2ldifNadf/id-oc-nadfADDMD.va.mjs";

import { organization } from "../SelectedObjectClasses/organization.oa.mjs";
import { nadfObject } from "../LdapSchema2ldifNadf/nadfObject.oa.mjs";
/**
 * @summary nadfADDMD
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nadfADDMD OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organization
 *                               | nadfObject }
 *   MUST CONTAIN              { addmdName }
 *   LDAP-NAME                 {"nadfADDMD"}
 *   ID                        id-oc-nadfADDMD }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nadfADDMD: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ organization, nadfObject, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ addmdName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nadfADDMD" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nadfADDMD /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
