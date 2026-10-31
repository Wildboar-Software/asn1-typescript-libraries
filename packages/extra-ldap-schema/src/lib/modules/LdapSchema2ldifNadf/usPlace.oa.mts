/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { id_oc_usPlace } from "../LdapSchema2ldifNadf/id-oc-usPlace.va.mjs";


/**
 * @summary usPlace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * usPlace OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality
 *                               | nadfObject }
 *   MUST CONTAIN              { localityName
 *                               | fipsPlaceNumericCode }
 *   LDAP-NAME                 {"usPlace"}
 *   ID                        id-oc-usPlace }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const usPlace: OBJECT_CLASS = undefined;

/* eslint-enable */
