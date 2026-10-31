/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { id_oc_usStateOrEquivalent } from "../LdapSchema2ldifNadf/id-oc-usStateOrEquivalent.va.mjs";


/**
 * @summary usStateOrEquivalent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * usStateOrEquivalent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { locality
 *                               | nadfObject }
 *   MUST CONTAIN              { localityName
 *                               | fipsStateNumericCode
 *                               | fipsStateAlphaCode
 *                               | stateOrProvinceName }
 *   LDAP-NAME                 {"usStateOrEquivalent"}
 *   ID                        id-oc-usStateOrEquivalent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const usStateOrEquivalent: OBJECT_CLASS = undefined;

/* eslint-enable */
