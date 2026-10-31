/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { cosIndirectSpecifier } from "../LdapCommon389/cosIndirectSpecifier.oa.mjs";
import { cosSuperDefinition } from "../LdapCommon389/cosSuperDefinition.oa.mjs";
import { id_oc_cosIndirectDefinition } from "../LdapCommon389/id-oc-cosIndirectDefinition.va.mjs";

/**
 * @summary cosIndirectDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cosIndirectDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { cosSuperDefinition }
 *   MAY CONTAIN               { cosIndirectSpecifier }
 *   LDAP-NAME                 {"cosIndirectDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-cosIndirectDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cosIndirectDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [cosSuperDefinition] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [cosIndirectSpecifier] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cosIndirectDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cosIndirectDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
