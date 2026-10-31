/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_directoryServerFeature } from "../LdapCore389/id-oc-directoryServerFeature.va.mjs";


/**
 * @summary directoryServerFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryServerFeature OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { oid
 *                               | commonName
 *                               | multiLineDescription }
 *   LDAP-NAME                 {"directoryServerFeature"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-directoryServerFeature }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const directoryServerFeature: OBJECT_CLASS = undefined;

/* eslint-enable */
