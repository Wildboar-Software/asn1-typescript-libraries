/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_nsManagedRoleDefinition } from "../LdapCommon389/id-oc-nsManagedRoleDefinition.va.mjs";
import { nsSimpleRoleDefinition } from "../LdapCommon389/nsSimpleRoleDefinition.oa.mjs";

/**
 * @summary nsManagedRoleDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsManagedRoleDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsSimpleRoleDefinition }
 *   LDAP-NAME                 {"nsManagedRoleDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsManagedRoleDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsManagedRoleDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [nsSimpleRoleDefinition] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsManagedRoleDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsManagedRoleDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
