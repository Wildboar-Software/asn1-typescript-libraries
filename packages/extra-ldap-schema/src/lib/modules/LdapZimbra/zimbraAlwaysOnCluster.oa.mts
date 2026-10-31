/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraAlwaysOnCluster } from "../LdapZimbra/id-oc-zimbraAlwaysOnCluster.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraMemcachedClientServerList } from "./zimbraMemcachedClientServerList.oa.mjs";
import { zimbraZookeeperClientServerList } from "./zimbraZookeeperClientServerList.oa.mjs";

/**
 * @summary zimbraAlwaysOnCluster
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAlwaysOnCluster OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraCreateTimestamp
 *                               | zimbraMemcachedClientServerList
 *                               | zimbraZookeeperClientServerList }
 *   LDAP-NAME                 {"zimbraAlwaysOnCluster"}
 *   LDAP-DESC                 "AlwaysOn Cluster"
 *   ID                        id-oc-zimbraAlwaysOnCluster }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraAlwaysOnCluster: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, zimbraId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraACE, zimbraCreateTimestamp, zimbraMemcachedClientServerList, zimbraZookeeperClientServerList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraAlwaysOnCluster"],
    "&ldapDesc": "AlwaysOn Cluster" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraAlwaysOnCluster /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
