/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_udDomain } from "../LdapUd/id-oc-udDomain.va.mjs";

/**
 * @summary udDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * udDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"udDomain"}
 *   LDAP-DESC                 "domain container for absolute base acl"
 *   ID                        id-oc-udDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const udDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "udDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "domain container for absolute base acl" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_udDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
