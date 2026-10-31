/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_apple_configuration } from "../LdapSchema2ldifApple/id-oc-apple-configuration.va.mjs";


/**
 * @summary apple_configuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-configuration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { commonName
 *                               | apple-config-realname
 *                               | apple-data-stamp
 *                               | apple-password-server-location
 *                               | apple-password-server-list
 *                               | apple-ldap-replica
 *                               | apple-ldap-writable-replica
 *                               | apple-keyword
 *                               | apple-kdc-authkey
 *                               | apple-kdc-configdata
 *                               | apple-xmlplist
 *                               | ttl }
 *   LDAP-NAME                 {"apple-configuration"}
 *   LDAP-DESC                 "configuration"
 *   ID                        id-oc-apple-configuration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_configuration: OBJECT_CLASS = undefined;

/* eslint-enable */
