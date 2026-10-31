/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_idnsZone } from "../LdapIpadns/id-oc-idnsZone.va.mjs";
import { idnsRecord } from "../LdapIpadns/idnsRecord.oa.mjs";
import { idnsAllowQuery } from "./idnsAllowQuery.oa.mjs";
import { idnsAllowSyncPTR } from "./idnsAllowSyncPTR.oa.mjs";
import { idnsAllowTransfer } from "./idnsAllowTransfer.oa.mjs";
import { idnsForwardPolicy } from "./idnsForwardPolicy.oa.mjs";
import { idnsForwarders } from "./idnsForwarders.oa.mjs";
import { idnsName } from "./idnsName.oa.mjs";
import { idnsSOAexpire } from "./idnsSOAexpire.oa.mjs";
import { idnsSOAmName } from "./idnsSOAmName.oa.mjs";
import { idnsSOAminimum } from "./idnsSOAminimum.oa.mjs";
import { idnsSOArName } from "./idnsSOArName.oa.mjs";
import { idnsSOArefresh } from "./idnsSOArefresh.oa.mjs";
import { idnsSOAretry } from "./idnsSOAretry.oa.mjs";
import { idnsSOAserial } from "./idnsSOAserial.oa.mjs";
import { idnsUpdatePolicy } from "./idnsUpdatePolicy.oa.mjs";
import { idnsZoneActive } from "./idnsZoneActive.oa.mjs";

/**
 * @summary idnsZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * idnsZone OBJECT-CLASS ::= {
 *   SUBCLASS OF               { idnsRecord }
 *   MUST CONTAIN              { idnsName
 *                               | idnsZoneActive
 *                               | idnsSOAmName
 *                               | idnsSOArName
 *                               | idnsSOAserial
 *                               | idnsSOArefresh
 *                               | idnsSOAretry
 *                               | idnsSOAexpire
 *                               | idnsSOAminimum }
 *   MAY CONTAIN               { idnsUpdatePolicy
 *                               | idnsAllowQuery
 *                               | idnsAllowTransfer
 *                               | idnsAllowSyncPTR
 *                               | idnsForwardPolicy
 *                               | idnsForwarders }
 *   LDAP-NAME                 {"idnsZone"}
 *   LDAP-DESC                 "Zone class"
 *   ID                        id-oc-idnsZone }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const idnsZone: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [idnsRecord] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [idnsName, idnsZoneActive, idnsSOAmName, idnsSOArName, idnsSOAserial, idnsSOArefresh, idnsSOAretry, idnsSOAexpire, idnsSOAminimum] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [idnsUpdatePolicy, idnsAllowQuery, idnsAllowTransfer, idnsAllowSyncPTR, idnsForwardPolicy, idnsForwarders] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["idnsZone"],
    "&ldapDesc": "Zone class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_idnsZone /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
