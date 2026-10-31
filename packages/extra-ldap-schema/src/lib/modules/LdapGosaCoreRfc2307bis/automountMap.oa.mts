/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { automountMapName } from "../RFC2307bis/automountMapName.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_automountMap } from "../LdapGosaCoreRfc2307bis/id-oc-automountMap.va.mjs";


/**
 * @summary automountMap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * automountMap OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { automountMapName }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"automountMap"}
 *   ID                        id-oc-automountMap }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const automountMap: OBJECT_CLASS = undefined;

/* eslint-enable */
