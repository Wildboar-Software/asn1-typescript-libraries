/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_idnsConfigObject } from "../LdapIpadns/id-oc-idnsConfigObject.va.mjs";
import { idnsAllowSyncPTR } from "./idnsAllowSyncPTR.oa.mjs";
import { idnsForwardPolicy } from "./idnsForwardPolicy.oa.mjs";
import { idnsForwarders } from "./idnsForwarders.oa.mjs";
import { idnsPersistentSearch } from "./idnsPersistentSearch.oa.mjs";
import { idnsZoneRefresh } from "./idnsZoneRefresh.oa.mjs";

/**
 * @summary idnsConfigObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * idnsConfigObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { idnsForwardPolicy
 *                               | idnsForwarders
 *                               | idnsAllowSyncPTR
 *                               | idnsZoneRefresh
 *                               | idnsPersistentSearch }
 *   LDAP-NAME                 {"idnsConfigObject"}
 *   LDAP-DESC                 "DNS global config options"
 *   ID                        id-oc-idnsConfigObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const idnsConfigObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [idnsForwardPolicy, idnsForwarders, idnsAllowSyncPTR, idnsZoneRefresh, idnsPersistentSearch] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["idnsConfigObject"],
    "&ldapDesc": "DNS global config options" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_idnsConfigObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
