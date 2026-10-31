/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_schacContactLocation } from "../LdapSchac/id-oc-schacContactLocation.va.mjs";


/**
 * @summary schacContactLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacContactLocation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacHomeOrganization
 *                               | schacHomeOrganizationType
 *                               | schacCountryOfResidence
 *                               | schacUserPresenceID }
 *   LDAP-NAME                 {"schacContactLocation"}
 *   LDAP-DESC                 "Primary means of locating and contacting potential collaborators and other persons-of-interest at peer institutions"
 *   ID                        id-oc-schacContactLocation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacContactLocation: OBJECT_CLASS = undefined;

/* eslint-enable */
