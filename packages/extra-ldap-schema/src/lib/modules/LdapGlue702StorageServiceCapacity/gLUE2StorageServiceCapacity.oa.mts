/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { id_oc_gLUE2StorageServiceCapacity } from "../LdapGlue702StorageServiceCapacity/id-oc-gLUE2StorageServiceCapacity.va.mjs";


/**
 * @summary gLUE2StorageServiceCapacity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageServiceCapacity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2StorageServiceCapacityID
 *                               | gLUE2StorageServiceCapacityType
 *                               | gLUE2StorageServiceCapacityStorageServiceForeignKey }
 *   MAY CONTAIN               { gLUE2StorageServiceCapacityTotalSize
 *                               | gLUE2StorageServiceCapacityFreeSize
 *                               | gLUE2StorageServiceCapacityUsedSize
 *                               | gLUE2StorageServiceCapacityReservedSize }
 *   LDAP-NAME                 {"GLUE2StorageServiceCapacity"}
 *   LDAP-DESC                 "Description of the size and state of an homogeneous storage extent"
 *   ID                        id-oc-gLUE2StorageServiceCapacity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageServiceCapacity: OBJECT_CLASS = undefined;

/* eslint-enable */
