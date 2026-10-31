/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mSMQQueue } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQQueue.va.mjs";
import { mSMQAuthenticate } from "../MSUser/mSMQAuthenticate.oa.mjs";
import { mSMQBasePriority } from "../MSUser/mSMQBasePriority.oa.mjs";
import { mSMQJournal } from "../MSUser/mSMQJournal.oa.mjs";
import { mSMQLabel } from "../MSUser/mSMQLabel.oa.mjs";
import { mSMQOwnerID } from "../MSUser/mSMQOwnerID.oa.mjs";
import { mSMQPrivacyLevel } from "../MSUser/mSMQPrivacyLevel.oa.mjs";
import { mSMQQueueJournalQuota } from "../MSUser/mSMQQueueJournalQuota.oa.mjs";
import { mSMQQueueNameExt } from "../MSUser/mSMQQueueNameExt.oa.mjs";
import { mSMQQueueQuota } from "../MSUser/mSMQQueueQuota.oa.mjs";
import { mSMQQueueType } from "../MSUser/mSMQQueueType.oa.mjs";
import { mSMQTransactional } from "../MSUser/mSMQTransactional.oa.mjs";

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
const mSMQQueue: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mSMQQueueType, mSMQJournal, mSMQBasePriority, mSMQLabel, mSMQAuthenticate, mSMQPrivacyLevel, mSMQOwnerID, mSMQTransactional, mSMQQueueQuota, mSMQQueueJournalQuota, mSMQQueueNameExt] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mSMQQueue"],
    "&id": id_oc_mSMQQueue /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
