/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { id_oc_pabPerson } from "../Ldapmigration55imsIcal/id-oc-pabPerson.va.mjs";


/**
 * @summary pabPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pabPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MAY CONTAIN               { un
 *                               | organizationName
 *                               | organizationUnitName
 *                               | co
 *                               | mailAlternateAddress
 *                               | dateOfBirth
 *                               | memberOfPAB
 *                               | memberOfPABGroup
 *                               | nickname
 *                               | calCalURI
 *                               | calFBURL }
 *   LDAP-NAME                 {"pabPerson"}
 *   LDAP-DESC                 "structural class for creating personal address book entries"
 *   ID                        id-oc-pabPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pabPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
