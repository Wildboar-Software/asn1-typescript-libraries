/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { aa } from "../LdapValias/aa.oa.mjs";
// export { di } from "../LdapValias/di.oa.mjs";
// export { id_oc_valias } from "../LdapValias/id-oc-valias.va.mjs";


/**
 * @summary valias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * valias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { aa }
 *   MAY CONTAIN               { di }
 *   LDAP-NAME                 {"valias"}
 *   LDAP-DESC                 "valias entry"
 *   ID                        id-oc-valias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const valias: OBJECT_CLASS = undefined;

/* eslint-enable */
