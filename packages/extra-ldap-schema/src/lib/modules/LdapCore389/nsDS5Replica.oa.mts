/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsDS5Replica } from "../LdapCore389/id-oc-nsDS5Replica.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsDS5Flags } from "./nsDS5Flags.oa.mjs";
import { nsDS5ReplicaAutoReferral } from "./nsDS5ReplicaAutoReferral.oa.mjs";
import { nsDS5ReplicaBindDN } from "./nsDS5ReplicaBindDN.oa.mjs";
import { nsDS5ReplicaBindDNGroup } from "./nsDS5ReplicaBindDNGroup.oa.mjs";
import { nsDS5ReplicaBindDnGroupCheckInterval } from "./nsDS5ReplicaBindDnGroupCheckInterval.oa.mjs";
import { nsDS5ReplicaId } from "./nsDS5ReplicaId.oa.mjs";
import { nsDS5ReplicaName } from "./nsDS5ReplicaName.oa.mjs";
import { nsDS5ReplicaReferral } from "./nsDS5ReplicaReferral.oa.mjs";
import { nsDS5ReplicaRoot } from "./nsDS5ReplicaRoot.oa.mjs";
import { nsDS5ReplicaType } from "./nsDS5ReplicaType.oa.mjs";
import { nsDS5Task } from "./nsDS5Task.oa.mjs";
import { nsState } from "./nsState.oa.mjs";
import { nsds5ReplicaAbortCleanRUV } from "./nsds5ReplicaAbortCleanRUV.oa.mjs";
import { nsds5ReplicaBackoffMax } from "./nsds5ReplicaBackoffMax.oa.mjs";
import { nsds5ReplicaBackoffMin } from "./nsds5ReplicaBackoffMin.oa.mjs";
import { nsds5ReplicaChangeCount } from "./nsds5ReplicaChangeCount.oa.mjs";
import { nsds5ReplicaCleanRUV } from "./nsds5ReplicaCleanRUV.oa.mjs";
import { nsds5ReplicaKeepAliveUpdateInterval } from "./nsds5ReplicaKeepAliveUpdateInterval.oa.mjs";
import { nsds5ReplicaLegacyConsumer } from "./nsds5ReplicaLegacyConsumer.oa.mjs";
import { nsds5ReplicaPreciseTombstonePurging } from "./nsds5ReplicaPreciseTombstonePurging.oa.mjs";
import { nsds5ReplicaProtocolTimeout } from "./nsds5ReplicaProtocolTimeout.oa.mjs";
import { nsds5ReplicaPurgeDelay } from "./nsds5ReplicaPurgeDelay.oa.mjs";
import { nsds5ReplicaReleaseTimeout } from "./nsds5ReplicaReleaseTimeout.oa.mjs";
import { nsds5ReplicaTombstonePurgeInterval } from "./nsds5ReplicaTombstonePurgeInterval.oa.mjs";

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
const nsDS5Replica: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [nsDS5ReplicaRoot, nsDS5ReplicaId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, nsds5ReplicaPreciseTombstonePurging, nsds5ReplicaCleanRUV, nsds5ReplicaAbortCleanRUV, nsDS5ReplicaType, nsDS5ReplicaBindDN, nsDS5ReplicaBindDNGroup, nsState, nsDS5ReplicaName, nsDS5Flags, nsDS5Task, nsDS5ReplicaReferral, nsDS5ReplicaAutoReferral, nsds5ReplicaPurgeDelay, nsds5ReplicaTombstonePurgeInterval, nsds5ReplicaChangeCount, nsds5ReplicaLegacyConsumer, nsds5ReplicaProtocolTimeout, nsds5ReplicaBackoffMin, nsds5ReplicaBackoffMax, nsds5ReplicaReleaseTimeout, nsDS5ReplicaBindDnGroupCheckInterval, nsds5ReplicaKeepAliveUpdateInterval] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsDS5Replica"],
    "&ldapDesc": "Replication configuration objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsDS5Replica /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
