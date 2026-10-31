/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_cacheObject } from "../LdapCommon389/id-oc-cacheObject.va.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";

/**
 * @summary cacheObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cacheObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { ttl }
 *   LDAP-NAME                 {"cacheObject"}
 *   LDAP-DESC                 "object that contains the TTL (time to live) attribute type"
 *   ID                        id-oc-cacheObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cacheObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ttl] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cacheObject"],
    "&ldapDesc": "object that contains the TTL (time to live) attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cacheObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
