/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_base4kidsGroup } from "../LdapBase4kids2/id-oc-base4kidsGroup.va.mjs";
// export { id_oc_base4kidsGroup } from "../LdapBase4kids2/id-oc-base4kidsGroup.va.mjs";


import { base4kidsEgovId } from "../LdapBase4kids2/base4kidsEgovId.oa.mjs";
import { base4kidsExpirationDate } from "../LdapBase4kids2/base4kidsExpirationDate.oa.mjs";
import { base4kidsGroupType } from "../LdapBase4kids2/base4kidsGroupType.oa.mjs";
import { base4kidsInitiator } from "../LdapBase4kids2/base4kidsInitiator.oa.mjs";
import { base4kidsIsActive } from "../LdapBase4kids2/base4kidsIsActive.oa.mjs";
import { base4kidsIsBlocked } from "../LdapBase4kids2/base4kidsIsBlocked.oa.mjs";
import { base4kidsIsDisabled } from "../LdapBase4kids2/base4kidsIsDisabled.oa.mjs";
import { base4kidsMaharaGroupId } from "../LdapBase4kids2/base4kidsMaharaGroupId.oa.mjs";
import { base4kidsMattermostChannelId } from "../LdapBase4kids2/base4kidsMattermostChannelId.oa.mjs";
import { base4kidsMattermostTeamId } from "../LdapBase4kids2/base4kidsMattermostTeamId.oa.mjs";
import { base4kidsNextcloudClassShareId } from "../LdapBase4kids2/base4kidsNextcloudClassShareId.oa.mjs";
import { base4kidsNextcloudClassTemplateShareId } from "../LdapBase4kids2/base4kidsNextcloudClassTemplateShareId.oa.mjs";
import { base4kidsNextcloudShareId } from "../LdapBase4kids2/base4kidsNextcloudShareId.oa.mjs";
import { base4kidsRole } from "../LdapBase4kids2/base4kidsRole.oa.mjs";
import { base4kidsSchoolCampus } from "../LdapBase4kids2/base4kidsSchoolCampus.oa.mjs";
import { base4kidsSchoolClassLevel } from "../LdapBase4kids2/base4kidsSchoolClassLevel.oa.mjs";
import { base4kidsSchoolClassName } from "../LdapBase4kids2/base4kidsSchoolClassName.oa.mjs";
import { base4kidsSchoolClassSubGroup } from "../LdapBase4kids2/base4kidsSchoolClassSubGroup.oa.mjs";
import { base4kidsSchoolClassSupplement } from "../LdapBase4kids2/base4kidsSchoolClassSupplement.oa.mjs";
import { base4kidsSchoolClassYear } from "../LdapBase4kids2/base4kidsSchoolClassYear.oa.mjs";
import { base4kidsSchoolCycle } from "../LdapBase4kids2/base4kidsSchoolCycle.oa.mjs";
import { base4kidsSchoolDistrict } from "../LdapBase4kids2/base4kidsSchoolDistrict.oa.mjs";
import { base4kidsSchoolLevel } from "../LdapBase4kids2/base4kidsSchoolLevel.oa.mjs";
import { base4kidsSchoolLocation } from "../LdapBase4kids2/base4kidsSchoolLocation.oa.mjs";
import { base4kidsSmtpReceiveIsActive } from "../LdapBase4kids2/base4kidsSmtpReceiveIsActive.oa.mjs";
import { base4kidsSmtpSubmissionIsActive } from "../LdapBase4kids2/base4kidsSmtpSubmissionIsActive.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ base4kidsEgovId, base4kidsExpirationDate, base4kidsGroupType, base4kidsInitiator, base4kidsIsActive, base4kidsIsBlocked, base4kidsIsDisabled, base4kidsMaharaGroupId, base4kidsMattermostChannelId, base4kidsMattermostTeamId, base4kidsNextcloudClassShareId, base4kidsNextcloudClassTemplateShareId, base4kidsNextcloudShareId, base4kidsRole, base4kidsSchoolCampus, base4kidsSchoolClassLevel, base4kidsSchoolClassName, base4kidsSchoolClassSubGroup, base4kidsSchoolClassSupplement, base4kidsSchoolClassYear, base4kidsSchoolCycle, base4kidsSchoolDistrict, base4kidsSchoolLevel, base4kidsSchoolLocation, base4kidsSmtpReceiveIsActive, base4kidsSmtpSubmissionIsActive, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "base4kidsGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Base4Kids person group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_base4kidsGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
