/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_nsComplexRoleDefinition } from "../LdapCommon389/id-oc-nsComplexRoleDefinition.va.mjs";
import { nsRoleDefinition } from "../LdapCommon389/nsRoleDefinition.oa.mjs";

/**
 * @summary nsComplexRoleDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsComplexRoleDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsRoleDefinition }
 *   LDAP-NAME                 {"nsComplexRoleDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsComplexRoleDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsComplexRoleDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [nsRoleDefinition] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsComplexRoleDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsComplexRoleDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
