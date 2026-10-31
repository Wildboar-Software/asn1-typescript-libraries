/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_x_kmc_Person } from "../LdapKmc/id-oc-x-kmc-Person.va.mjs";


/**
 * @summary x_kmc_Person
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x-kmc-Person OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { x-kmc-LastModified
 *                               | x-kmc-PhoneticSurname
 *                               | x-kmc-PhoneticGivenName
 *                               | x-kmc-Generation
 *                               | x-kmc-Alias
 *                               | x-kmc-Lodging
 *                               | x-kmc-UniversityDepartment
 *                               | x-kmc-UniversityStatus
 *                               | x-kmc-UniversityMatricYear
 *                               | x-kmc-MailForwardingAddress
 *                               | x-kmc-MailNotificationAddress
 *                               | x-kmc-DiscordUserID
 *                               | x-kmc-SlackUserID
 *                               | x-kmc-AddressIsPublic
 *                               | x-kmc-IsKUMember
 *                               | x-kmc-KUDepartment
 *                               | x-kmc-KUStudentNumber }
 *   LDAP-NAME                 {"x-kmc-Person"}
 *   LDAP-DESC                 "Additional informations for a member of KMC"
 *   ID                        id-oc-x-kmc-Person }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const x_kmc_Person: OBJECT_CLASS = undefined;

/* eslint-enable */
