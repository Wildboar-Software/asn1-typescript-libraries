/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { meetingName } from "../LdapSchema2ldifMicrosoft/meetingName.oa.mjs";
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
const meeting: OBJECT_CLASS = undefined;

/* eslint-enable */
