/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { cosSuperDefinition } from "../LdapCommon389/cosSuperDefinition.oa.mjs";
import { costemplatedn } from "../LdapCommon389/costemplatedn.oa.mjs";
import { id_oc_cosPointerDefinition } from "../LdapCommon389/id-oc-cosPointerDefinition.va.mjs";

/**
 * @summary cosPointerDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cosPointerDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { cosSuperDefinition }
 *   MAY CONTAIN               { costemplatedn }
 *   LDAP-NAME                 {"cosPointerDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-cosPointerDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cosPointerDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [cosSuperDefinition] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [costemplatedn] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cosPointerDefinition"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cosPointerDefinition /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
