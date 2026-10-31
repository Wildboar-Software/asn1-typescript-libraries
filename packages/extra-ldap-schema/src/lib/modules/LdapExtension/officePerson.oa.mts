/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { id_oc_officePerson } from "../LdapExtension/id-oc-officePerson.va.mjs";


/**
 * @summary officePerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * officePerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MAY CONTAIN               { countryName
 *                               | rdn
 *                               | otherFacsimiletelephoneNumber
 *                               | iPPhone
 *                               | uRL
 *                               | comment
 *                               | reports
 *                               | conferenceInformation }
 *   LDAP-NAME                 {"officePerson"}
 *   LDAP-DESC                 "Office employee or computer user"
 *   ID                        id-oc-officePerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const officePerson: OBJECT_CLASS = undefined;

/* eslint-enable */
