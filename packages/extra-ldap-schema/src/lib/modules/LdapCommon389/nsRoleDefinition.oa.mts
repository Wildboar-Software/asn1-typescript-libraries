/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ldapSubEntry } from "../LdapSubentry/ldapSubEntry.oa.mjs";
import { id_oc_nsRoleDefinition } from "../LdapCommon389/id-oc-nsRoleDefinition.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { nsRoleScopeDN } from "../LdapCommon389/nsRoleScopeDN.oa.mjs";


/**
 * @summary nsRoleDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsRoleDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ldapSubEntry }
 *   MAY CONTAIN               { description
 *                               | nsRoleScopeDN }
 *   LDAP-NAME                 {"nsRoleDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsRoleDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsRoleDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ldapSubEntry, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, nsRoleScopeDN, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsRoleDefinition" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsRoleDefinition /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

