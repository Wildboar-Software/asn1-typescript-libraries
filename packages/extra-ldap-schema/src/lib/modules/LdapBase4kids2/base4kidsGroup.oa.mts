/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_base4kidsGroup } from "../LdapBase4kids2/id-oc-base4kidsGroup.va.mjs";
import { base4kidsEgovId } from "./base4kidsEgovId.oa.mjs";
import { base4kidsExpirationDate } from "./base4kidsExpirationDate.oa.mjs";
import { base4kidsGroupType } from "./base4kidsGroupType.oa.mjs";
import { base4kidsInitiator } from "./base4kidsInitiator.oa.mjs";
import { base4kidsIsActive } from "./base4kidsIsActive.oa.mjs";
import { base4kidsIsBlocked } from "./base4kidsIsBlocked.oa.mjs";
import { base4kidsIsDisabled } from "./base4kidsIsDisabled.oa.mjs";
import { base4kidsMaharaGroupId } from "./base4kidsMaharaGroupId.oa.mjs";
import { base4kidsMattermostChannelId } from "./base4kidsMattermostChannelId.oa.mjs";
import { base4kidsMattermostTeamId } from "./base4kidsMattermostTeamId.oa.mjs";
import { base4kidsNextcloudClassShareId } from "./base4kidsNextcloudClassShareId.oa.mjs";
import { base4kidsNextcloudClassTemplateShareId } from "./base4kidsNextcloudClassTemplateShareId.oa.mjs";
import { base4kidsNextcloudShareId } from "./base4kidsNextcloudShareId.oa.mjs";
import { base4kidsRole } from "./base4kidsRole.oa.mjs";
import { base4kidsSchoolCampus } from "./base4kidsSchoolCampus.oa.mjs";
import { base4kidsSchoolClassLevel } from "./base4kidsSchoolClassLevel.oa.mjs";
import { base4kidsSchoolClassName } from "./base4kidsSchoolClassName.oa.mjs";
import { base4kidsSchoolClassSubGroup } from "./base4kidsSchoolClassSubGroup.oa.mjs";
import { base4kidsSchoolClassSupplement } from "./base4kidsSchoolClassSupplement.oa.mjs";
import { base4kidsSchoolClassYear } from "./base4kidsSchoolClassYear.oa.mjs";
import { base4kidsSchoolCycle } from "./base4kidsSchoolCycle.oa.mjs";
import { base4kidsSchoolDistrict } from "./base4kidsSchoolDistrict.oa.mjs";
import { base4kidsSchoolLevel } from "./base4kidsSchoolLevel.oa.mjs";
import { base4kidsSchoolLocation } from "./base4kidsSchoolLocation.oa.mjs";
import { base4kidsSmtpReceiveIsActive } from "./base4kidsSmtpReceiveIsActive.oa.mjs";
import { base4kidsSmtpSubmissionIsActive } from "./base4kidsSmtpSubmissionIsActive.oa.mjs";

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
const base4kidsGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [base4kidsEgovId, base4kidsExpirationDate, base4kidsGroupType, base4kidsInitiator, base4kidsIsActive, base4kidsIsBlocked, base4kidsIsDisabled, base4kidsMaharaGroupId, base4kidsMattermostChannelId, base4kidsMattermostTeamId, base4kidsNextcloudClassShareId, base4kidsNextcloudClassTemplateShareId, base4kidsNextcloudShareId, base4kidsRole, base4kidsSchoolCampus, base4kidsSchoolClassLevel, base4kidsSchoolClassName, base4kidsSchoolClassSubGroup, base4kidsSchoolClassSupplement, base4kidsSchoolClassYear, base4kidsSchoolCycle, base4kidsSchoolDistrict, base4kidsSchoolLevel, base4kidsSchoolLocation, base4kidsSmtpReceiveIsActive, base4kidsSmtpSubmissionIsActive] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["base4kidsGroup"],
    "&ldapDesc": "Base4Kids person group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_base4kidsGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
