/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_leaf } from "../LdapSchema2ldifFmserver/id-oc-leaf.va.mjs";


/**
 * @summary leaf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * leaf OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"leaf"}
 *   LDAP-DESC                 "Microsoft Active Directory Leaf Object"
 *   ID                        id-oc-leaf }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const leaf: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "leaf" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Microsoft Active Directory Leaf Object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_leaf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

