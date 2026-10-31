/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_nsDS5Replica } from "../LdapCore389/id-oc-nsDS5Replica.va.mjs";


/**
 * @summary nsDS5Replica
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsDS5Replica OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { nsDS5ReplicaRoot
 *                               | nsDS5ReplicaId }
 *   MAY CONTAIN               { commonName
 *                               | nsds5ReplicaPreciseTombstonePurging
 *                               | nsds5ReplicaCleanRUV
 *                               | nsds5ReplicaAbortCleanRUV
 *                               | nsDS5ReplicaType
 *                               | nsDS5ReplicaBindDN
 *                               | nsDS5ReplicaBindDNGroup
 *                               | nsState
 *                               | nsDS5ReplicaName
 *                               | nsDS5Flags
 *                               | nsDS5Task
 *                               | nsDS5ReplicaReferral
 *                               | nsDS5ReplicaAutoReferral
 *                               | nsds5ReplicaPurgeDelay
 *                               | nsds5ReplicaTombstonePurgeInterval
 *                               | nsds5ReplicaChangeCount
 *                               | nsds5ReplicaLegacyConsumer
 *                               | nsds5ReplicaProtocolTimeout
 *                               | nsds5ReplicaBackoffMin
 *                               | nsds5ReplicaBackoffMax
 *                               | nsds5ReplicaReleaseTimeout
 *                               | nsDS5ReplicaBindDnGroupCheckInterval
 *                               | nsds5ReplicaKeepAliveUpdateInterval }
 *   LDAP-NAME                 {"nsDS5Replica"}
 *   LDAP-DESC                 "Replication configuration objectclass"
 *   ID                        id-oc-nsDS5Replica }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsDS5Replica: OBJECT_CLASS = undefined;

/* eslint-enable */
