/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa.mjs";
// export { id_oc_deltaCRL } from "../AuthenticationFramework/id-oc-deltaCRL.va.mjs";


/**
 * @summary deltaCRL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deltaCRL OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {deltaRevocationList}
 *   LDAP-NAME           {"deltaCRL"}
 *   LDAP-DESC           "X.509 delta CRL"
 *   ID                  id-oc-deltaCRL }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const deltaCRL: OBJECT_CLASS = undefined;

/* eslint-enable */
