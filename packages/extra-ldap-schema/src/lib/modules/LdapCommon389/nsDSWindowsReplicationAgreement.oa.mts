/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_nsDSWindowsReplicationAgreement } from "../LdapCommon389/id-oc-nsDSWindowsReplicationAgreement.va.mjs";
import { nsDS5ReplicaHost } from "../LdapCore389/nsDS5ReplicaHost.oa.mjs";
import { nsDS5ReplicaPort } from "../LdapCore389/nsDS5ReplicaPort.oa.mjs";
import { nsDS5ReplicaTransportInfo } from "../LdapCore389/nsDS5ReplicaTransportInfo.oa.mjs";
import { nsDS5ReplicaBindDN } from "../LdapCore389/nsDS5ReplicaBindDN.oa.mjs";
import { nsDS5ReplicaCredentials } from "../LdapCore389/nsDS5ReplicaCredentials.oa.mjs";
import { nsDS5ReplicaBindMethod } from "../LdapCore389/nsDS5ReplicaBindMethod.oa.mjs";
import { nsDS5ReplicaRoot } from "../LdapCore389/nsDS5ReplicaRoot.oa.mjs";
import { nsDS5ReplicatedAttributeList } from "../LdapCore389/nsDS5ReplicatedAttributeList.oa.mjs";
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
import { nsds5replicaLastInitStart } from "../LdapCore389/nsds5replicaLastInitStart.oa.mjs";
import { nsds5replicaLastInitStatus } from "../LdapCore389/nsds5replicaLastInitStatus.oa.mjs";
import { nsds5debugreplicatimeout } from "../LdapCore389/nsds5debugreplicatimeout.oa.mjs";
import { nsds5replicaBusyWaitTime } from "../LdapCore389/nsds5replicaBusyWaitTime.oa.mjs";
import { nsds5replicaSessionPauseTime } from "../LdapCore389/nsds5replicaSessionPauseTime.oa.mjs";
import { nsds7WindowsReplicaSubtree } from "../LdapCommon389/nsds7WindowsReplicaSubtree.oa.mjs";
import { nsds7DirectoryReplicaSubtree } from "../LdapCommon389/nsds7DirectoryReplicaSubtree.oa.mjs";
import { nsds7NewWinUserSyncEnabled } from "../LdapCommon389/nsds7NewWinUserSyncEnabled.oa.mjs";
import { nsds7NewWinGroupSyncEnabled } from "../LdapCommon389/nsds7NewWinGroupSyncEnabled.oa.mjs";
import { nsds7WindowsDomain } from "../LdapCommon389/nsds7WindowsDomain.oa.mjs";
import { nsds7DirsyncCookie } from "../LdapCommon389/nsds7DirsyncCookie.oa.mjs";
import { winSyncInterval } from "../LdapCommon389/winSyncInterval.oa.mjs";
import { oneWaySync } from "../LdapCommon389/oneWaySync.oa.mjs";
import { winSyncMoveAction } from "../LdapCommon389/winSyncMoveAction.oa.mjs";
import { nsds5ReplicaEnabled } from "../LdapCore389/nsds5ReplicaEnabled.oa.mjs";
import { winSyncDirectoryFilter } from "../LdapCommon389/winSyncDirectoryFilter.oa.mjs";
import { winSyncWindowsFilter } from "../LdapCommon389/winSyncWindowsFilter.oa.mjs";
import { winSyncSubtreePair } from "../LdapCommon389/winSyncSubtreePair.oa.mjs";
import { winSyncFlattenTree } from "../LdapCommon389/winSyncFlattenTree.oa.mjs";
// export { id_oc_nsDSWindowsReplicationAgreement } from "../LdapCommon389/id-oc-nsDSWindowsReplicationAgreement.va.mjs";


/**
 * @summary nsDSWindowsReplicationAgreement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsDSWindowsReplicationAgreement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { nsDS5ReplicaHost
 *                               | nsDS5ReplicaPort
 *                               | nsDS5ReplicaTransportInfo
 *                               | nsDS5ReplicaBindDN
 *                               | nsDS5ReplicaCredentials
 *                               | nsDS5ReplicaBindMethod
 *                               | nsDS5ReplicaRoot
 *                               | nsDS5ReplicatedAttributeList
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
 *                               | nsds5replicaLastInitStart
 *                               | nsds5replicaLastInitStatus
 *                               | nsds5debugreplicatimeout
 *                               | nsds5replicaBusyWaitTime
 *                               | nsds5replicaSessionPauseTime
 *                               | nsds7WindowsReplicaSubtree
 *                               | nsds7DirectoryReplicaSubtree
 *                               | nsds7NewWinUserSyncEnabled
 *                               | nsds7NewWinGroupSyncEnabled
 *                               | nsds7WindowsDomain
 *                               | nsds7DirsyncCookie
 *                               | winSyncInterval
 *                               | oneWaySync
 *                               | winSyncMoveAction
 *                               | nsds5ReplicaEnabled
 *                               | winSyncDirectoryFilter
 *                               | winSyncWindowsFilter
 *                               | winSyncSubtreePair
 *                               | winSyncFlattenTree }
 *   LDAP-NAME                 {"nsDSWindowsReplicationAgreement"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsDSWindowsReplicationAgreement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsDSWindowsReplicationAgreement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsDS5ReplicaHost, nsDS5ReplicaPort, nsDS5ReplicaTransportInfo, nsDS5ReplicaBindDN, nsDS5ReplicaCredentials, nsDS5ReplicaBindMethod, nsDS5ReplicaRoot, nsDS5ReplicatedAttributeList, nsDS5ReplicaUpdateSchedule, nsds5BeginReplicaRefresh, description, nsds50ruv, nsruvReplicaLastModified, nsds5replicaTimeout, nsds5replicaChangesSentSinceStartup, nsds5replicaLastUpdateEnd, nsds5replicaLastUpdateStart, nsds5replicaLastUpdateStatus, nsds5replicaUpdateInProgress, nsds5replicaLastInitEnd, nsds5replicaLastInitStart, nsds5replicaLastInitStatus, nsds5debugreplicatimeout, nsds5replicaBusyWaitTime, nsds5replicaSessionPauseTime, nsds7WindowsReplicaSubtree, nsds7DirectoryReplicaSubtree, nsds7NewWinUserSyncEnabled, nsds7NewWinGroupSyncEnabled, nsds7WindowsDomain, nsds7DirsyncCookie, winSyncInterval, oneWaySync, winSyncMoveAction, nsds5ReplicaEnabled, winSyncDirectoryFilter, winSyncWindowsFilter, winSyncSubtreePair, winSyncFlattenTree, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsDSWindowsReplicationAgreement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsDSWindowsReplicationAgreement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
