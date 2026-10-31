/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nTFRSSubscriber } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSubscriber.va.mjs";
import { fRSExtensions } from "../MSUser/fRSExtensions.oa.mjs";
import { fRSFaultCondition } from "../MSUser/fRSFaultCondition.oa.mjs";
import { fRSFlags } from "../MSUser/fRSFlags.oa.mjs";
import { fRSMemberReference } from "../MSUser/fRSMemberReference.oa.mjs";
import { fRSRootPath } from "../MSUser/fRSRootPath.oa.mjs";
import { fRSServiceCommand } from "../MSUser/fRSServiceCommand.oa.mjs";
import { fRSServiceCommandStatus } from "../MSUser/fRSServiceCommandStatus.oa.mjs";
import { fRSStagingPath } from "../MSUser/fRSStagingPath.oa.mjs";
import { fRSUpdateTimeout } from "../MSUser/fRSUpdateTimeout.oa.mjs";
import { schedule } from "../MSUser/schedule.oa.mjs";
import { fRSTimeLastCommand } from "./fRSTimeLastCommand.oa.mjs";
import { fRSTimeLastConfigChange } from "./fRSTimeLastConfigChange.oa.mjs";

/**
 * @summary nTFRSSubscriber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSSubscriber OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { fRSRootPath
 *                               | fRSStagingPath }
 *   MAY CONTAIN               { schedule
 *                               | fRSUpdateTimeout
 *                               | fRSFaultCondition
 *                               | fRSServiceCommand
 *                               | fRSExtensions
 *                               | fRSFlags
 *                               | fRSMemberReference
 *                               | fRSServiceCommandStatus
 *                               | fRSTimeLastCommand
 *                               | fRSTimeLastConfigChange }
 *   LDAP-NAME                 {"nTFRSSubscriber"}
 *   ID                        id-oc-nTFRSSubscriber }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSSubscriber: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [fRSRootPath, fRSStagingPath] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [schedule, fRSUpdateTimeout, fRSFaultCondition, fRSServiceCommand, fRSExtensions, fRSFlags, fRSMemberReference, fRSServiceCommandStatus, fRSTimeLastCommand, fRSTimeLastConfigChange] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nTFRSSubscriber"],
    "&id": id_oc_nTFRSSubscriber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
