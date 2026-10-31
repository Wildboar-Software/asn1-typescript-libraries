/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gLUE2DataStore } from "../LdapGlue708DataStore/id-oc-gLUE2DataStore.va.mjs";
import { gLUE2DataStoreFreeSize } from "./gLUE2DataStoreFreeSize.oa.mjs";
import { gLUE2DataStoreLatency } from "./gLUE2DataStoreLatency.oa.mjs";
import { gLUE2DataStoreStorageManagerForeignKey } from "./gLUE2DataStoreStorageManagerForeignKey.oa.mjs";
import { gLUE2DataStoreTotalSize } from "./gLUE2DataStoreTotalSize.oa.mjs";
import { gLUE2DataStoreType } from "./gLUE2DataStoreType.oa.mjs";
import { gLUE2DataStoreUsedSize } from "./gLUE2DataStoreUsedSize.oa.mjs";

/**
 * @summary gLUE2DataStore
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2DataStore OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2DataStoreType
 *                               | gLUE2DataStoreLatency }
 *   MAY CONTAIN               { gLUE2DataStoreTotalSize
 *                               | gLUE2DataStoreFreeSize
 *                               | gLUE2DataStoreUsedSize
 *                               | gLUE2DataStoreStorageManagerForeignKey }
 *   LDAP-NAME                 {"GLUE2DataStore"}
 *   LDAP-DESC                 "Abstraction of a sufficiently homogeneous storage device providing a storage capacity, managed by a local software component (storage manager), part of a storage service, reachable via one or more endpoints and having one or more shares defined on it. A storage resource refers to a category with summary information on the capacity"
 *   ID                        id-oc-gLUE2DataStore }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2DataStore: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2DataStoreType, gLUE2DataStoreLatency] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2DataStoreTotalSize, gLUE2DataStoreFreeSize, gLUE2DataStoreUsedSize, gLUE2DataStoreStorageManagerForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2DataStore"],
    "&ldapDesc": "Abstraction of a sufficiently homogeneous storage device providing a storage capacity, managed by a local software component (storage manager), part of a storage service, reachable via one or more endpoints and having one or more shares defined on it. A storage resource refers to a category with summary information on the capacity" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2DataStore /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
