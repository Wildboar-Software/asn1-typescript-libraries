/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_base4kidsPerson } from "../LdapBase4kids2/id-oc-base4kidsPerson.va.mjs";
import { base4kidsAppleId } from "../LdapBase4kids2/base4kidsAppleId.oa.mjs";
import { base4kidsBusinessTelephoneNumber } from "../LdapBase4kids2/base4kidsBusinessTelephoneNumber.oa.mjs";
import { base4kidsChatIsActive } from "../LdapBase4kids2/base4kidsChatIsActive.oa.mjs";
import { base4kidsCloudStorageIsActive } from "../LdapBase4kids2/base4kidsCloudStorageIsActive.oa.mjs";
import { base4kidsCountryCode } from "../LdapBase4kids2/base4kidsCountryCode.oa.mjs";
import { base4kidsDateOfBirth } from "../LdapBase4kids2/base4kidsDateOfBirth.oa.mjs";
import { base4kidsEgovId } from "../LdapBase4kids2/base4kidsEgovId.oa.mjs";
import { base4kidsEportfolioIsActive } from "../LdapBase4kids2/base4kidsEportfolioIsActive.oa.mjs";
import { base4kidsGender } from "../LdapBase4kids2/base4kidsGender.oa.mjs";
import { base4kidsGroupwareIsActive } from "../LdapBase4kids2/base4kidsGroupwareIsActive.oa.mjs";
import { base4kidsImapIsActive } from "../LdapBase4kids2/base4kidsImapIsActive.oa.mjs";
import { base4kidsIsActive } from "../LdapBase4kids2/base4kidsIsActive.oa.mjs";
import { base4kidsIsBlocked } from "../LdapBase4kids2/base4kidsIsBlocked.oa.mjs";
import { base4kidsIsDisabled } from "../LdapBase4kids2/base4kidsIsDisabled.oa.mjs";
import { base4kidsLearningPlatformIsActive } from "../LdapBase4kids2/base4kidsLearningPlatformIsActive.oa.mjs";
import { base4kidsLegalGuardian } from "../LdapBase4kids2/base4kidsLegalGuardian.oa.mjs";
import { base4kidsLegalGuardianOf } from "../LdapBase4kids2/base4kidsLegalGuardianOf.oa.mjs";
import { base4kidsNextcloudUserQuota } from "../LdapBase4kids2/base4kidsNextcloudUserQuota.oa.mjs";
import { base4kidsPersiskaNumber } from "../LdapBase4kids2/base4kidsPersiskaNumber.oa.mjs";
import { base4kidsPlaceOfOrigin } from "../LdapBase4kids2/base4kidsPlaceOfOrigin.oa.mjs";
import { base4kidsRole } from "../LdapBase4kids2/base4kidsRole.oa.mjs";
import { base4kidsSchoolProgrammYear } from "../LdapBase4kids2/base4kidsSchoolProgrammYear.oa.mjs";
import { base4kidsSmtpReceiveIsActive } from "../LdapBase4kids2/base4kidsSmtpReceiveIsActive.oa.mjs";
import { base4kidsSmtpSubmissionIsActive } from "../LdapBase4kids2/base4kidsSmtpSubmissionIsActive.oa.mjs";
import { base4kidsWebmailIsActive } from "../LdapBase4kids2/base4kidsWebmailIsActive.oa.mjs";
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
const base4kidsPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ base4kidsAppleId, base4kidsBusinessTelephoneNumber, base4kidsChatIsActive, base4kidsCloudStorageIsActive, base4kidsCountryCode, base4kidsDateOfBirth, base4kidsEgovId, base4kidsEportfolioIsActive, base4kidsGender, base4kidsGroupwareIsActive, base4kidsImapIsActive, base4kidsIsActive, base4kidsIsBlocked, base4kidsIsDisabled, base4kidsLearningPlatformIsActive, base4kidsLegalGuardian, base4kidsLegalGuardianOf, base4kidsNextcloudUserQuota, base4kidsPersiskaNumber, base4kidsPlaceOfOrigin, base4kidsRole, base4kidsSchoolProgrammYear, base4kidsSmtpReceiveIsActive, base4kidsSmtpSubmissionIsActive, base4kidsWebmailIsActive, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Base4Kids person object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_base4kidsPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
