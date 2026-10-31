/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsDS5ReplicationAgreement } from "../LdapCore389/id-oc-nsDS5ReplicationAgreement.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { nsDS5ReplicaBindDN } from "./nsDS5ReplicaBindDN.oa.mjs";
import { nsDS5ReplicaBindMethod } from "./nsDS5ReplicaBindMethod.oa.mjs";
import { nsDS5ReplicaBootstrapBindDN } from "./nsDS5ReplicaBootstrapBindDN.oa.mjs";
import { nsDS5ReplicaBootstrapBindMethod } from "./nsDS5ReplicaBootstrapBindMethod.oa.mjs";
import { nsDS5ReplicaBootstrapCredentials } from "./nsDS5ReplicaBootstrapCredentials.oa.mjs";
import { nsDS5ReplicaBootstrapTransportInfo } from "./nsDS5ReplicaBootstrapTransportInfo.oa.mjs";
import { nsDS5ReplicaCredentials } from "./nsDS5ReplicaCredentials.oa.mjs";
import { nsDS5ReplicaHost } from "./nsDS5ReplicaHost.oa.mjs";
import { nsDS5ReplicaPort } from "./nsDS5ReplicaPort.oa.mjs";
import { nsDS5ReplicaRoot } from "./nsDS5ReplicaRoot.oa.mjs";
import { nsDS5ReplicaTransportInfo } from "./nsDS5ReplicaTransportInfo.oa.mjs";
import { nsDS5ReplicaUpdateSchedule } from "./nsDS5ReplicaUpdateSchedule.oa.mjs";
import { nsDS5ReplicaWaitForAsyncResults } from "./nsDS5ReplicaWaitForAsyncResults.oa.mjs";
import { nsDS5ReplicatedAttributeList } from "./nsDS5ReplicatedAttributeList.oa.mjs";
import { nsDS5ReplicatedAttributeListTotal } from "./nsDS5ReplicatedAttributeListTotal.oa.mjs";
import { nsds50ruv } from "./nsds50ruv.oa.mjs";
import { nsds5BeginReplicaRefresh } from "./nsds5BeginReplicaRefresh.oa.mjs";
import { nsds5ReplicaCleanRUVNotified } from "./nsds5ReplicaCleanRUVNotified.oa.mjs";
import { nsds5ReplicaEnabled } from "./nsds5ReplicaEnabled.oa.mjs";
import { nsds5ReplicaFlowControlPause } from "./nsds5ReplicaFlowControlPause.oa.mjs";
import { nsds5ReplicaFlowControlWindow } from "./nsds5ReplicaFlowControlWindow.oa.mjs";
import { nsds5ReplicaIgnoreMissingChange } from "./nsds5ReplicaIgnoreMissingChange.oa.mjs";
import { nsds5ReplicaProtocolTimeout } from "./nsds5ReplicaProtocolTimeout.oa.mjs";
import { nsds5ReplicaStripAttrs } from "./nsds5ReplicaStripAttrs.oa.mjs";
import { nsds5debugreplicatimeout } from "./nsds5debugreplicatimeout.oa.mjs";
import { nsds5replicaBusyWaitTime } from "./nsds5replicaBusyWaitTime.oa.mjs";
import { nsds5replicaChangesSentSinceStartup } from "./nsds5replicaChangesSentSinceStartup.oa.mjs";
import { nsds5replicaLastInitEnd } from "./nsds5replicaLastInitEnd.oa.mjs";
import { nsds5replicaLastInitStart } from "./nsds5replicaLastInitStart.oa.mjs";
import { nsds5replicaLastInitStatus } from "./nsds5replicaLastInitStatus.oa.mjs";
import { nsds5replicaLastUpdateEnd } from "./nsds5replicaLastUpdateEnd.oa.mjs";
import { nsds5replicaLastUpdateStart } from "./nsds5replicaLastUpdateStart.oa.mjs";
import { nsds5replicaLastUpdateStatus } from "./nsds5replicaLastUpdateStatus.oa.mjs";
import { nsds5replicaSessionPauseTime } from "./nsds5replicaSessionPauseTime.oa.mjs";
import { nsds5replicaTimeout } from "./nsds5replicaTimeout.oa.mjs";
import { nsds5replicaUpdateInProgress } from "./nsds5replicaUpdateInProgress.oa.mjs";
import { nsruvReplicaLastModified } from "./nsruvReplicaLastModified.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsds5ReplicaCleanRUVNotified, nsDS5ReplicaHost, nsDS5ReplicaPort, nsDS5ReplicaTransportInfo, nsDS5ReplicaBindDN, nsDS5ReplicaCredentials, nsDS5ReplicaBindMethod, nsDS5ReplicaRoot, nsDS5ReplicatedAttributeList, nsDS5ReplicatedAttributeListTotal, nsDS5ReplicaUpdateSchedule, nsds5BeginReplicaRefresh, description, nsds50ruv, nsruvReplicaLastModified, nsds5replicaTimeout, nsds5replicaChangesSentSinceStartup, nsds5replicaLastUpdateEnd, nsds5replicaLastUpdateStart, nsds5replicaLastUpdateStatus, nsds5replicaUpdateInProgress, nsds5replicaLastInitEnd, nsds5ReplicaEnabled, nsds5replicaLastInitStart, nsds5replicaLastInitStatus, nsds5debugreplicatimeout, nsds5replicaBusyWaitTime, nsds5ReplicaStripAttrs, nsds5replicaSessionPauseTime, nsds5ReplicaProtocolTimeout, nsds5ReplicaFlowControlWindow, nsds5ReplicaFlowControlPause, nsDS5ReplicaWaitForAsyncResults, nsds5ReplicaIgnoreMissingChange, nsDS5ReplicaBootstrapBindDN, nsDS5ReplicaBootstrapCredentials, nsDS5ReplicaBootstrapBindMethod, nsDS5ReplicaBootstrapTransportInfo] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsDS5ReplicationAgreement"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsDS5ReplicationAgreement /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
