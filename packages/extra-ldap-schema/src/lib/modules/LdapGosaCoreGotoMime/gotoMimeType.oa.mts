/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_gotoMimeType } from "../LdapGosaCoreGotoMime/id-oc-gotoMimeType.va.mjs";


/**
 * @summary gotoMimeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoMimeType OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | gotoMimeFilePattern
 *                               | gotoMimeGroup }
 *   MAY CONTAIN               { description
 *                               | gotoMimeIcon
 *                               | gotoMimeApplication
 *                               | gotoMimeEmbeddedApplication
 *                               | gotoMimeLeftClickAction }
 *   LDAP-NAME                 {"gotoMimeType"}
 *   LDAP-DESC                 "Class to represent global mime types (v2.7)"
 *   ID                        id-oc-gotoMimeType }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoMimeType: OBJECT_CLASS = undefined;

/* eslint-enable */
