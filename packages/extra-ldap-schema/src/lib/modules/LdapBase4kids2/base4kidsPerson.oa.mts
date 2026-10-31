/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_base4kidsPerson } from "../LdapBase4kids2/id-oc-base4kidsPerson.va.mjs";


/**
 * @summary base4kidsPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { base4kidsAppleId
 *                               | base4kidsBusinessTelephoneNumber
 *                               | base4kidsChatIsActive
 *                               | base4kidsCloudStorageIsActive
 *                               | base4kidsCountryCode
 *                               | base4kidsDateOfBirth
 *                               | base4kidsEgovId
 *                               | base4kidsEportfolioIsActive
 *                               | base4kidsGender
 *                               | base4kidsGroupwareIsActive
 *                               | base4kidsImapIsActive
 *                               | base4kidsIsActive
 *                               | base4kidsIsBlocked
 *                               | base4kidsIsDisabled
 *                               | base4kidsLearningPlatformIsActive
 *                               | base4kidsLegalGuardian
 *                               | base4kidsLegalGuardianOf
 *                               | base4kidsNextcloudUserQuota
 *                               | base4kidsPersiskaNumber
 *                               | base4kidsPlaceOfOrigin
 *                               | base4kidsRole
 *                               | base4kidsSchoolProgrammYear
 *                               | base4kidsSmtpReceiveIsActive
 *                               | base4kidsSmtpSubmissionIsActive
 *                               | base4kidsWebmailIsActive }
 *   LDAP-NAME                 {"base4kidsPerson"}
 *   LDAP-DESC                 "Base4Kids person object"
 *   ID                        id-oc-base4kidsPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const base4kidsPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
