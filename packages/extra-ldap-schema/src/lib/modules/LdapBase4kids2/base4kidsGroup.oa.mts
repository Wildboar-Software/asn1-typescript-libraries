/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_base4kidsGroup } from "../LdapBase4kids2/id-oc-base4kidsGroup.va.mjs";


/**
 * @summary base4kidsGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * base4kidsGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { base4kidsEgovId
 *                               | base4kidsExpirationDate
 *                               | base4kidsGroupType
 *                               | base4kidsInitiator
 *                               | base4kidsIsActive
 *                               | base4kidsIsBlocked
 *                               | base4kidsIsDisabled
 *                               | base4kidsMaharaGroupId
 *                               | base4kidsMattermostChannelId
 *                               | base4kidsMattermostTeamId
 *                               | base4kidsNextcloudClassShareId
 *                               | base4kidsNextcloudClassTemplateShareId
 *                               | base4kidsNextcloudShareId
 *                               | base4kidsRole
 *                               | base4kidsSchoolCampus
 *                               | base4kidsSchoolClassLevel
 *                               | base4kidsSchoolClassName
 *                               | base4kidsSchoolClassSubGroup
 *                               | base4kidsSchoolClassSupplement
 *                               | base4kidsSchoolClassYear
 *                               | base4kidsSchoolCycle
 *                               | base4kidsSchoolDistrict
 *                               | base4kidsSchoolLevel
 *                               | base4kidsSchoolLocation
 *                               | base4kidsSmtpReceiveIsActive
 *                               | base4kidsSmtpSubmissionIsActive }
 *   LDAP-NAME                 {"base4kidsGroup"}
 *   LDAP-DESC                 "Base4Kids person group"
 *   ID                        id-oc-base4kidsGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const base4kidsGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
