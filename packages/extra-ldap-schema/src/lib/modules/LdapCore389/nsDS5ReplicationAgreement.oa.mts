/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_nsDS5ReplicationAgreement } from "../LdapCore389/id-oc-nsDS5ReplicationAgreement.va.mjs";
import { nsds5ReplicaCleanRUVNotified } from "../LdapCore389/nsds5ReplicaCleanRUVNotified.oa.mjs";
import { nsDS5ReplicaHost } from "../LdapCore389/nsDS5ReplicaHost.oa.mjs";
import { nsDS5ReplicaPort } from "../LdapCore389/nsDS5ReplicaPort.oa.mjs";
import { nsDS5ReplicaTransportInfo } from "../LdapCore389/nsDS5ReplicaTransportInfo.oa.mjs";
import { nsDS5ReplicaBindDN } from "../LdapCore389/nsDS5ReplicaBindDN.oa.mjs";
import { nsDS5ReplicaCredentials } from "../LdapCore389/nsDS5ReplicaCredentials.oa.mjs";
import { nsDS5ReplicaBindMethod } from "../LdapCore389/nsDS5ReplicaBindMethod.oa.mjs";
import { nsDS5ReplicaRoot } from "../LdapCore389/nsDS5ReplicaRoot.oa.mjs";
import { nsDS5ReplicatedAttributeList } from "../LdapCore389/nsDS5ReplicatedAttributeList.oa.mjs";
import { nsDS5ReplicatedAttributeListTotal } from "../LdapCore389/nsDS5ReplicatedAttributeListTotal.oa.mjs";
import { nsDS5ReplicaUpdateSchedule } from "../LdapCore389/nsDS5ReplicaUpdateSchedule.oa.mjs";
import { nsds5BeginReplicaRefresh } from "../LdapCore389/nsds5BeginReplicaRefresh.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { nsds50ruv } from "../LdapCore389/nsds50ruv.oa.mjs";
import { nsruvReplicaLastModified } from "../LdapCore389/nsruvReplicaLastModified.oa.mjs";
import { nsds5replicaTimeout } from "../LdapCore389/nsds5replicaTimeout.oa.mjs";
import { nsds5replicaChangesSentSinceStartup } from "../LdapCore389/nsds5replicaChangesSentSinceStartup.oa.mjs";
import { nsds5replicaLastUpdateEnd } from "../LdapCore389/nsds5replicaLastUpdateEnd.oa.mjs";
import { nsds5replicaLastUpdateStart } from "../LdapCore389/nsds5replicaLastUpdateStart.oa.mjs";
import { nsds5replicaLastUpdateStatus } from "../LdapCore389/nsds5replicaLastUpdateStatus.oa.mjs";
import { nsds5replicaUpdateInProgress } from "../LdapCore389/nsds5replicaUpdateInProgress.oa.mjs";
import { nsds5replicaLastInitEnd } from "../LdapCore389/nsds5replicaLastInitEnd.oa.mjs";
import { nsds5ReplicaEnabled } from "../LdapCore389/nsds5ReplicaEnabled.oa.mjs";
import { nsds5replicaLastInitStart } from "../LdapCore389/nsds5replicaLastInitStart.oa.mjs";
import { nsds5replicaLastInitStatus } from "../LdapCore389/nsds5replicaLastInitStatus.oa.mjs";
import { nsds5debugreplicatimeout } from "../LdapCore389/nsds5debugreplicatimeout.oa.mjs";
import { nsds5replicaBusyWaitTime } from "../LdapCore389/nsds5replicaBusyWaitTime.oa.mjs";
import { nsds5ReplicaStripAttrs } from "../LdapCore389/nsds5ReplicaStripAttrs.oa.mjs";
import { nsds5replicaSessionPauseTime } from "../LdapCore389/nsds5replicaSessionPauseTime.oa.mjs";
import { nsds5ReplicaProtocolTimeout } from "../LdapCore389/nsds5ReplicaProtocolTimeout.oa.mjs";
import { nsds5ReplicaFlowControlWindow } from "../LdapCore389/nsds5ReplicaFlowControlWindow.oa.mjs";
import { nsds5ReplicaFlowControlPause } from "../LdapCore389/nsds5ReplicaFlowControlPause.oa.mjs";
import { nsDS5ReplicaWaitForAsyncResults } from "../LdapCore389/nsDS5ReplicaWaitForAsyncResults.oa.mjs";
import { nsds5ReplicaIgnoreMissingChange } from "../LdapCore389/nsds5ReplicaIgnoreMissingChange.oa.mjs";
import { nsDS5ReplicaBootstrapBindDN } from "../LdapCore389/nsDS5ReplicaBootstrapBindDN.oa.mjs";
import { nsDS5ReplicaBootstrapCredentials } from "../LdapCore389/nsDS5ReplicaBootstrapCredentials.oa.mjs";
import { nsDS5ReplicaBootstrapBindMethod } from "../LdapCore389/nsDS5ReplicaBootstrapBindMethod.oa.mjs";
import { nsDS5ReplicaBootstrapTransportInfo } from "../LdapCore389/nsDS5ReplicaBootstrapTransportInfo.oa.mjs";


/**
 * @summary nsDS5ReplicationAgreement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsDS5ReplicationAgreement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { nsds5ReplicaCleanRUVNotified
 *                               | nsDS5ReplicaHost
 *                               | nsDS5ReplicaPort
 *                               | nsDS5ReplicaTransportInfo
 *                               | nsDS5ReplicaBindDN
 *                               | nsDS5ReplicaCredentials
 *                               | nsDS5ReplicaBindMethod
 *                               | nsDS5ReplicaRoot
 *                               | nsDS5ReplicatedAttributeList
 *                               | nsDS5ReplicatedAttributeListTotal
 *                               | nsDS5ReplicaUpdateSchedule
 *                               | nsds5BeginReplicaRefresh
 *                               | description
 *                               | nsds50ruv
 *                               | nsruvReplicaLastModified
 *                               | nsds5replicaTimeout
 *                               | nsds5replicaChangesSentSinceStartup
 *                               | nsds5replicaLastUpdateEnd
 *                               | nsds5replicaLastUpdateStart
 *                               | nsds5replicaLastUpdateStatus
 *                               | nsds5replicaUpdateInProgress
 *                               | nsds5replicaLastInitEnd
 *                               | nsds5ReplicaEnabled
 *                               | nsds5replicaLastInitStart
 *                               | nsds5replicaLastInitStatus
 *                               | nsds5debugreplicatimeout
 *                               | nsds5replicaBusyWaitTime
 *                               | nsds5ReplicaStripAttrs
 *                               | nsds5replicaSessionPauseTime
 *                               | nsds5ReplicaProtocolTimeout
 *                               | nsds5ReplicaFlowControlWindow
 *                               | nsds5ReplicaFlowControlPause
 *                               | nsDS5ReplicaWaitForAsyncResults
 *                               | nsds5ReplicaIgnoreMissingChange
 *                               | nsDS5ReplicaBootstrapBindDN
 *                               | nsDS5ReplicaBootstrapCredentials
 *                               | nsDS5ReplicaBootstrapBindMethod
 *                               | nsDS5ReplicaBootstrapTransportInfo }
 *   LDAP-NAME                 {"nsDS5ReplicationAgreement"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsDS5ReplicationAgreement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsDS5ReplicationAgreement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsds5ReplicaCleanRUVNotified, nsDS5ReplicaHost, nsDS5ReplicaPort, nsDS5ReplicaTransportInfo, nsDS5ReplicaBindDN, nsDS5ReplicaCredentials, nsDS5ReplicaBindMethod, nsDS5ReplicaRoot, nsDS5ReplicatedAttributeList, nsDS5ReplicatedAttributeListTotal, nsDS5ReplicaUpdateSchedule, nsds5BeginReplicaRefresh, description, nsds50ruv, nsruvReplicaLastModified, nsds5replicaTimeout, nsds5replicaChangesSentSinceStartup, nsds5replicaLastUpdateEnd, nsds5replicaLastUpdateStart, nsds5replicaLastUpdateStatus, nsds5replicaUpdateInProgress, nsds5replicaLastInitEnd, nsds5ReplicaEnabled, nsds5replicaLastInitStart, nsds5replicaLastInitStatus, nsds5debugreplicatimeout, nsds5replicaBusyWaitTime, nsds5ReplicaStripAttrs, nsds5replicaSessionPauseTime, nsds5ReplicaProtocolTimeout, nsds5ReplicaFlowControlWindow, nsds5ReplicaFlowControlPause, nsDS5ReplicaWaitForAsyncResults, nsds5ReplicaIgnoreMissingChange, nsDS5ReplicaBootstrapBindDN, nsDS5ReplicaBootstrapCredentials, nsDS5ReplicaBootstrapBindMethod, nsDS5ReplicaBootstrapTransportInfo, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsDS5ReplicationAgreement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsDS5ReplicationAgreement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

