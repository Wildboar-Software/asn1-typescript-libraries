/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { lastModifiedTime } from "../LdapSchema2ldifCosine/lastModifiedTime.oa.mjs";
// export { id_oc_nadfObject } from "../LdapSchema2ldifNadf/id-oc-nadfObject.va.mjs";


/**
 * @summary nadfObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nadfObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MUST CONTAIN              { lastModifiedTime }
 *   MAY CONTAIN               { multiMediaInformation
 *                               | nadfSearchGuide
 *                               | supplementaryInformation }
 *   LDAP-NAME                 {"nadfObject"}
 *   ID                        id-oc-nadfObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nadfObject: OBJECT_CLASS = undefined;

/* eslint-enable */
