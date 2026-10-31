/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_nsNestedRoleDefinition } from "../LdapCommon389/id-oc-nsNestedRoleDefinition.va.mjs";
import { nsComplexRoleDefinition } from "../LdapCommon389/nsComplexRoleDefinition.oa.mjs";
import { nsRoleDN } from "../LdapCommon389/nsRoleDN.oa.mjs";

/**
 * @summary nsNestedRoleDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsNestedRoleDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsComplexRoleDefinition }
 *   MUST CONTAIN              { nsRoleDN }
 *   LDAP-NAME                 {"nsNestedRoleDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsNestedRoleDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsNestedRoleDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [nsComplexRoleDefinition] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [nsRoleDN] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsNestedRoleDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsNestedRoleDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
