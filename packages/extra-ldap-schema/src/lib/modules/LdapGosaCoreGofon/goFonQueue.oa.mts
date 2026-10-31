/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_goFonQueue } from "../LdapGosaCoreGofon/id-oc-goFonQueue.va.mjs";


/**
 * @summary goFonQueue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonQueue OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goFonTimeOut
 *                               | goFonMaxLen
 *                               | goFonAnnounceFrequency
 *                               | goFonDialOption
 *                               | goFonMusiconHold
 *                               | goFonWelcomeMusic
 *                               | goFonQueueReportHold
 *                               | goFonQueueYouAreNext
 *                               | goFonQueueThereAre
 *                               | goFonQueueCallsWaiting
 *                               | goFonQueueThankYou
 *                               | goFonQueueMinutes
 *                               | goFonQueueSeconds
 *                               | telephoneNumber
 *                               | goFonQueueLanguage
 *                               | goFonQueueStrategy
 *                               | goFonQueueAnnounceHoldtime
 *                               | goFonQueueAnnounce
 *                               | goFonQueueRetry
 *                               | goFonQueueLessThan
 *                               | goFonHomeServer }
 *   LDAP-NAME                 {"goFonQueue"}
 *   LDAP-DESC                 "Queue definitions for asterisk machines (v2.7)"
 *   ID                        id-oc-goFonQueue }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonQueue: OBJECT_CLASS = undefined;

/* eslint-enable */
