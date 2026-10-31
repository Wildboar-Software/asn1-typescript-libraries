/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_nsDS5ReplicationAgreement } from "../LdapCore389/id-oc-nsDS5ReplicationAgreement.va.mjs";


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
const nsDS5ReplicationAgreement: OBJECT_CLASS = undefined;

/* eslint-enable */
