/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { meetingName } from "../MSUser/meetingName.oa.mjs";
// export { meetingName } from "../MSUser/meetingName.oa.mjs";
import { id_oc_meeting } from "../LdapSchema2ldifMicrosoft/id-oc-meeting.va.mjs";
import { meetingID } from "../MSUser/meetingID.oa.mjs";
import { meetingDescription } from "../MSUser/meetingDescription.oa.mjs";
import { meetingKeyword } from "../MSUser/meetingKeyword.oa.mjs";
import { meetingLocation } from "../MSUser/meetingLocation.oa.mjs";
import { meetingProtocol } from "../MSUser/meetingProtocol.oa.mjs";
import { meetingType } from "../MSUser/meetingType.oa.mjs";
import { meetingApplication } from "../MSUser/meetingApplication.oa.mjs";
import { meetingLanguage } from "../MSUser/meetingLanguage.oa.mjs";
import { meetingMaxParticipants } from "../MSUser/meetingMaxParticipants.oa.mjs";
import { meetingOriginator } from "../MSUser/meetingOriginator.oa.mjs";
import { meetingContactInfo } from "../MSUser/meetingContactInfo.oa.mjs";
import { meetingOwner } from "../MSUser/meetingOwner.oa.mjs";
import { meetingIP } from "../MSUser/meetingIP.oa.mjs";
import { meetingScope } from "../MSUser/meetingScope.oa.mjs";
import { meetingAdvertiseScope } from "../MSUser/meetingAdvertiseScope.oa.mjs";
import { meetingURL } from "../MSUser/meetingURL.oa.mjs";
import { meetingRating } from "../MSUser/meetingRating.oa.mjs";
import { meetingIsEncrypted } from "../MSUser/meetingIsEncrypted.oa.mjs";
import { meetingRecurrence } from "../MSUser/meetingRecurrence.oa.mjs";
import { meetingStartTime } from "../LdapSchema2ldifMicrosoft/meetingStartTime.oa.mjs";
import { meetingEndTime } from "../LdapSchema2ldifMicrosoft/meetingEndTime.oa.mjs";
import { meetingBandwidth } from "../MSUser/meetingBandwidth.oa.mjs";
import { meetingBlob } from "../MSUser/meetingBlob.oa.mjs";
// export { id_oc_meeting } from "../LdapSchema2ldifMicrosoft/id-oc-meeting.va.mjs";


/**
 * @summary meeting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * meeting OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { meetingName }
 *   MAY CONTAIN               { meetingID
 *                               | meetingDescription
 *                               | meetingKeyword
 *                               | meetingLocation
 *                               | meetingProtocol
 *                               | meetingType
 *                               | meetingApplication
 *                               | meetingLanguage
 *                               | meetingMaxParticipants
 *                               | meetingOriginator
 *                               | meetingContactInfo
 *                               | meetingOwner
 *                               | meetingIP
 *                               | meetingScope
 *                               | meetingAdvertiseScope
 *                               | meetingURL
 *                               | meetingRating
 *                               | meetingIsEncrypted
 *                               | meetingRecurrence
 *                               | meetingStartTime
 *                               | meetingEndTime
 *                               | meetingBandwidth
 *                               | meetingBlob }
 *   LDAP-NAME                 {"meeting"}
 *   ID                        id-oc-meeting }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const meeting: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ meetingName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ meetingID, meetingDescription, meetingKeyword, meetingLocation, meetingProtocol, meetingType, meetingApplication, meetingLanguage, meetingMaxParticipants, meetingOriginator, meetingContactInfo, meetingOwner, meetingIP, meetingScope, meetingAdvertiseScope, meetingURL, meetingRating, meetingIsEncrypted, meetingRecurrence, meetingStartTime, meetingEndTime, meetingBandwidth, meetingBlob, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "meeting" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_meeting /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
