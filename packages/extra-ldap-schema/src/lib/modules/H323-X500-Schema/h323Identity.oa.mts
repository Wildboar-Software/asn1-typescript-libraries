/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { h323_id_oc } from "../H323-X500-Schema/h323-id-oc.va.mjs";


/**
 * @summary h323Identity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * h323Identity OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN
 *     {h323IdentityGKDomain | h323Identityh323-ID | h323IdentitydialedDigits |
 *       h323Identityemail-ID | h323IdentityURL-ID | h323IdentitytransportID |
 *       h323IdentitypartyNumber | h323IdentitymobileUIM |
 *       h323IdentityEndpointType | h323IdentityServiceLevel}
 *   ID           {h323-id-oc  1}
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const h323Identity: OBJECT_CLASS = undefined;

/* eslint-enable */
