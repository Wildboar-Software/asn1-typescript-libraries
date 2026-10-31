/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { document } from "../LdapSchema2ldifCosine/document.oa.mjs";
// export { id_oc_kmr_document } from "../LdapUser/id-oc-kmr-document.va.mjs";


/**
 * @summary kmr_document
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kmr-document OBJECT-CLASS ::= {
 *   SUBCLASS OF               { document }
 *   MAY CONTAIN               { documentExpirationTime
 *                               | documentStatus }
 *   LDAP-NAME                 {"kmr-document"}
 *   ID                        id-oc-kmr-document }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kmr_document: OBJECT_CLASS = undefined;

/* eslint-enable */
