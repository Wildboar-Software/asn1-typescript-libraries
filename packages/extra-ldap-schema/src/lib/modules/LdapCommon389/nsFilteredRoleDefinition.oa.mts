/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_nsFilteredRoleDefinition } from "../LdapCommon389/id-oc-nsFilteredRoleDefinition.va.mjs";
import { nsComplexRoleDefinition } from "../LdapCommon389/nsComplexRoleDefinition.oa.mjs";
import { nsRoleFilter } from "../LdapCommon389/nsRoleFilter.oa.mjs";

/**
 * @summary nsFilteredRoleDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsFilteredRoleDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsComplexRoleDefinition }
 *   MUST CONTAIN              { nsRoleFilter }
 *   LDAP-NAME                 {"nsFilteredRoleDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsFilteredRoleDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsFilteredRoleDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [nsComplexRoleDefinition] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [nsRoleFilter] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsFilteredRoleDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsFilteredRoleDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
