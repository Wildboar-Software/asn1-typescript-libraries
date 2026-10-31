/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_gLUE2DataStore } from "../LdapGlue708DataStore/id-oc-gLUE2DataStore.va.mjs";


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
const gLUE2DataStore: OBJECT_CLASS = undefined;

/* eslint-enable */
