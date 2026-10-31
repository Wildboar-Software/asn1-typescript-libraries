/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFonQueue } from "../LdapGosaCoreGofon/id-oc-goFonQueue.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { goFonAnnounceFrequency } from "./goFonAnnounceFrequency.oa.mjs";
import { goFonDialOption } from "./goFonDialOption.oa.mjs";
import { goFonHomeServer } from "./goFonHomeServer.oa.mjs";
import { goFonMaxLen } from "./goFonMaxLen.oa.mjs";
import { goFonMusiconHold } from "./goFonMusiconHold.oa.mjs";
import { goFonQueueAnnounce } from "./goFonQueueAnnounce.oa.mjs";
import { goFonQueueAnnounceHoldtime } from "./goFonQueueAnnounceHoldtime.oa.mjs";
import { goFonQueueCallsWaiting } from "./goFonQueueCallsWaiting.oa.mjs";
import { goFonQueueLanguage } from "./goFonQueueLanguage.oa.mjs";
import { goFonQueueLessThan } from "./goFonQueueLessThan.oa.mjs";
import { goFonQueueMinutes } from "./goFonQueueMinutes.oa.mjs";
import { goFonQueueReportHold } from "./goFonQueueReportHold.oa.mjs";
import { goFonQueueRetry } from "./goFonQueueRetry.oa.mjs";
import { goFonQueueSeconds } from "./goFonQueueSeconds.oa.mjs";
import { goFonQueueStrategy } from "./goFonQueueStrategy.oa.mjs";
import { goFonQueueThankYou } from "./goFonQueueThankYou.oa.mjs";
import { goFonQueueThereAre } from "./goFonQueueThereAre.oa.mjs";
import { goFonQueueYouAreNext } from "./goFonQueueYouAreNext.oa.mjs";
import { goFonTimeOut } from "./goFonTimeOut.oa.mjs";
import { goFonWelcomeMusic } from "./goFonWelcomeMusic.oa.mjs";

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
const goFonQueue: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goFonTimeOut, goFonMaxLen, goFonAnnounceFrequency, goFonDialOption, goFonMusiconHold, goFonWelcomeMusic, goFonQueueReportHold, goFonQueueYouAreNext, goFonQueueThereAre, goFonQueueCallsWaiting, goFonQueueThankYou, goFonQueueMinutes, goFonQueueSeconds, telephoneNumber, goFonQueueLanguage, goFonQueueStrategy, goFonQueueAnnounceHoldtime, goFonQueueAnnounce, goFonQueueRetry, goFonQueueLessThan, goFonHomeServer] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFonQueue"],
    "&ldapDesc": "Queue definitions for asterisk machines (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonQueue /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
