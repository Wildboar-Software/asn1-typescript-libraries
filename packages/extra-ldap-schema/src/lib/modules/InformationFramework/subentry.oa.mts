/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_sc_subentry } from "../InformationFramework/id-sc-subentry.va.mjs";


/**
 * @summary subentry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subentry OBJECT-CLASS ::= {
 *   SUBCLASS OF      {top}
 *   KIND             structural
 *   MUST CONTAIN     {commonName |
 *                     subtreeSpecification}
 *   LDAP-NAME        {"subentry"}
 *   ID               id-sc-subentry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const subentry: OBJECT_CLASS = undefined;

/* eslint-enable */
