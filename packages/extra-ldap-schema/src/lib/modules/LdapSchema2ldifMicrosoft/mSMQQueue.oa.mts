/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mSMQQueue } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQQueue.va.mjs";


/**
 * @summary mSMQQueue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQQueue OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mSMQQueueType
 *                               | mSMQJournal
 *                               | mSMQBasePriority
 *                               | mSMQLabel
 *                               | mSMQAuthenticate
 *                               | mSMQPrivacyLevel
 *                               | mSMQOwnerID
 *                               | mSMQTransactional
 *                               | mSMQQueueQuota
 *                               | mSMQQueueJournalQuota
 *                               | mSMQQueueNameExt }
 *   LDAP-NAME                 {"mSMQQueue"}
 *   ID                        id-oc-mSMQQueue }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQQueue: OBJECT_CLASS = undefined;

/* eslint-enable */
