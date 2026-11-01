/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_x_kmc_Person } from "../LdapKmc/id-oc-x-kmc-Person.va.mjs";
import { x_kmc_LastModified } from "../LdapKmc/x-kmc-LastModified.oa.mjs";
import { x_kmc_PhoneticSurname } from "../LdapKmc/x-kmc-PhoneticSurname.oa.mjs";
import { x_kmc_PhoneticGivenName } from "../LdapKmc/x-kmc-PhoneticGivenName.oa.mjs";
import { x_kmc_Generation } from "../LdapKmc/x-kmc-Generation.oa.mjs";
import { x_kmc_Alias } from "../LdapKmc/x-kmc-Alias.oa.mjs";
import { x_kmc_Lodging } from "../LdapKmc/x-kmc-Lodging.oa.mjs";
import { x_kmc_UniversityDepartment } from "../LdapKmc/x-kmc-UniversityDepartment.oa.mjs";
import { x_kmc_UniversityStatus } from "../LdapKmc/x-kmc-UniversityStatus.oa.mjs";
import { x_kmc_UniversityMatricYear } from "../LdapKmc/x-kmc-UniversityMatricYear.oa.mjs";
import { x_kmc_MailForwardingAddress } from "../LdapKmc/x-kmc-MailForwardingAddress.oa.mjs";
import { x_kmc_MailNotificationAddress } from "../LdapKmc/x-kmc-MailNotificationAddress.oa.mjs";
import { x_kmc_DiscordUserID } from "../LdapKmc/x-kmc-DiscordUserID.oa.mjs";
import { x_kmc_SlackUserID } from "../LdapKmc/x-kmc-SlackUserID.oa.mjs";
import { x_kmc_AddressIsPublic } from "../LdapKmc/x-kmc-AddressIsPublic.oa.mjs";
import { x_kmc_IsKUMember } from "../LdapKmc/x-kmc-IsKUMember.oa.mjs";
import { x_kmc_KUDepartment } from "../LdapKmc/x-kmc-KUDepartment.oa.mjs";
import { x_kmc_KUStudentNumber } from "../LdapKmc/x-kmc-KUStudentNumber.oa.mjs";
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
const x_kmc_Person: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ x_kmc_LastModified, x_kmc_PhoneticSurname, x_kmc_PhoneticGivenName, x_kmc_Generation, x_kmc_Alias, x_kmc_Lodging, x_kmc_UniversityDepartment, x_kmc_UniversityStatus, x_kmc_UniversityMatricYear, x_kmc_MailForwardingAddress, x_kmc_MailNotificationAddress, x_kmc_DiscordUserID, x_kmc_SlackUserID, x_kmc_AddressIsPublic, x_kmc_IsKUMember, x_kmc_KUDepartment, x_kmc_KUStudentNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "x-kmc-Person" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Additional informations for a member of KMC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_x_kmc_Person /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
