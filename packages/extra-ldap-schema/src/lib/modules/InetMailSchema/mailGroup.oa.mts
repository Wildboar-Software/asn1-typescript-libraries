/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { id_oc_mailGroup } from "../InetMailSchema/id-oc-mailGroup.va.mjs";


/**
 * @summary mailGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailGroup OBJECT-CLASS ::= {
 *     KIND            structural
 *     MUST CONTAIN    {commonName | mail}
 *     MAY CONTAIN     {mailRoutingAddress | member | description}
 *     LDAP-NAME       {"mailGroup"}
 *     LDAP-DESC       "E-Mail Group"
 *     ID              id-oc-mailGroup
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
