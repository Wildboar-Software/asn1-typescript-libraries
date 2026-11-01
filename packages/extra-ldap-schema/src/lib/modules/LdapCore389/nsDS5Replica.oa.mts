/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsDS5Replica } from "../LdapCore389/id-oc-nsDS5Replica.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nsds5ReplicaPreciseTombstonePurging } from "../LdapCore389/nsds5ReplicaPreciseTombstonePurging.oa.mjs";
import { nsds5ReplicaCleanRUV } from "../LdapCore389/nsds5ReplicaCleanRUV.oa.mjs";
import { nsds5ReplicaAbortCleanRUV } from "../LdapCore389/nsds5ReplicaAbortCleanRUV.oa.mjs";
import { nsDS5ReplicaType } from "../LdapCore389/nsDS5ReplicaType.oa.mjs";
import { nsDS5ReplicaBindDN } from "../LdapCore389/nsDS5ReplicaBindDN.oa.mjs";
import { nsDS5ReplicaBindDNGroup } from "../LdapCore389/nsDS5ReplicaBindDNGroup.oa.mjs";
import { nsState } from "../LdapCore389/nsState.oa.mjs";
import { nsDS5ReplicaName } from "../LdapCore389/nsDS5ReplicaName.oa.mjs";
import { nsDS5Flags } from "../LdapCore389/nsDS5Flags.oa.mjs";
import { nsDS5Task } from "../LdapCore389/nsDS5Task.oa.mjs";
import { nsDS5ReplicaReferral } from "../LdapCore389/nsDS5ReplicaReferral.oa.mjs";
import { nsDS5ReplicaAutoReferral } from "../LdapCore389/nsDS5ReplicaAutoReferral.oa.mjs";
import { nsds5ReplicaPurgeDelay } from "../LdapCore389/nsds5ReplicaPurgeDelay.oa.mjs";
import { nsds5ReplicaTombstonePurgeInterval } from "../LdapCore389/nsds5ReplicaTombstonePurgeInterval.oa.mjs";
import { nsds5ReplicaChangeCount } from "../LdapCore389/nsds5ReplicaChangeCount.oa.mjs";
import { nsds5ReplicaLegacyConsumer } from "../LdapCore389/nsds5ReplicaLegacyConsumer.oa.mjs";
import { nsds5ReplicaProtocolTimeout } from "../LdapCore389/nsds5ReplicaProtocolTimeout.oa.mjs";
import { nsds5ReplicaBackoffMin } from "../LdapCore389/nsds5ReplicaBackoffMin.oa.mjs";
import { nsds5ReplicaBackoffMax } from "../LdapCore389/nsds5ReplicaBackoffMax.oa.mjs";
import { nsds5ReplicaReleaseTimeout } from "../LdapCore389/nsds5ReplicaReleaseTimeout.oa.mjs";
import { nsDS5ReplicaBindDnGroupCheckInterval } from "../LdapCore389/nsDS5ReplicaBindDnGroupCheckInterval.oa.mjs";
import { nsds5ReplicaKeepAliveUpdateInterval } from "../LdapCore389/nsds5ReplicaKeepAliveUpdateInterval.oa.mjs";
import { nsDS5ReplicaRoot } from "../LdapCore389/nsDS5ReplicaRoot.oa.mjs";
import { nsDS5ReplicaId } from "../LdapCore389/nsDS5ReplicaId.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ nsDS5ReplicaRoot, nsDS5ReplicaId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, nsds5ReplicaPreciseTombstonePurging, nsds5ReplicaCleanRUV, nsds5ReplicaAbortCleanRUV, nsDS5ReplicaType, nsDS5ReplicaBindDN, nsDS5ReplicaBindDNGroup, nsState, nsDS5ReplicaName, nsDS5Flags, nsDS5Task, nsDS5ReplicaReferral, nsDS5ReplicaAutoReferral, nsds5ReplicaPurgeDelay, nsds5ReplicaTombstonePurgeInterval, nsds5ReplicaChangeCount, nsds5ReplicaLegacyConsumer, nsds5ReplicaProtocolTimeout, nsds5ReplicaBackoffMin, nsds5ReplicaBackoffMax, nsds5ReplicaReleaseTimeout, nsDS5ReplicaBindDnGroupCheckInterval, nsds5ReplicaKeepAliveUpdateInterval, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsDS5Replica" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Replication configuration objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsDS5Replica /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
