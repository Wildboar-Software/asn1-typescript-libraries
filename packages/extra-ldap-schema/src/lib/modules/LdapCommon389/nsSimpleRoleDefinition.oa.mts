/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_nsSimpleRoleDefinition } from "../LdapCommon389/id-oc-nsSimpleRoleDefinition.va.mjs";
import { nsRoleDefinition } from "../LdapCommon389/nsRoleDefinition.oa.mjs";

/**
 * @summary nsSimpleRoleDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsSimpleRoleDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsRoleDefinition }
 *   LDAP-NAME                 {"nsSimpleRoleDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsSimpleRoleDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsSimpleRoleDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [nsRoleDefinition] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsSimpleRoleDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsSimpleRoleDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
