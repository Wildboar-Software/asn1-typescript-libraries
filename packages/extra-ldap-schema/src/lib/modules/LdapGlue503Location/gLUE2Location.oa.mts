/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2LocationID } from "../LdapGlue503Location/gLUE2LocationID.oa.mjs";
// export { id_oc_gLUE2Location } from "../LdapGlue503Location/id-oc-gLUE2Location.va.mjs";


/**
 * @summary gLUE2Location
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Location OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2LocationID }
 *   MAY CONTAIN               { gLUE2LocationAddress
 *                               | gLUE2LocationPlace
 *                               | gLUE2LocationCountry
 *                               | gLUE2LocationPostCode
 *                               | gLUE2LocationLatitude
 *                               | gLUE2LocationLongitude
 *                               | gLUE2LocationServiceForeignKey
 *                               | gLUE2LocationDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2Location"}
 *   LDAP-DESC                 "A geographical position"
 *   ID                        id-oc-gLUE2Location }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Location: OBJECT_CLASS = undefined;

/* eslint-enable */
