/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Share } from "../LdapGlue508Share/gLUE2Share.oa.mjs";
// export { id_oc_gLUE2StorageShare } from "../LdapGlue705StorageShare/id-oc-gLUE2StorageShare.va.mjs";


/**
 * @summary gLUE2StorageShare
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageShare OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Share }
 *   MUST CONTAIN              { gLUE2StorageShareServingState
 *                               | gLUE2StorageShareSharingID
 *                               | gLUE2StorageShareAccessLatency }
 *   MAY CONTAIN               { gLUE2StorageSharePath
 *                               | gLUE2StorageShareAccessMode
 *                               | gLUE2StorageShareRetentionPolicy
 *                               | gLUE2StorageShareExpirationMode
 *                               | gLUE2StorageShareDefaultLifeTime
 *                               | gLUE2StorageShareMaximumLifeTime
 *                               | gLUE2StorageShareTag
 *                               | gLUE2StorageShareStorageEndpointForeignKey
 *                               | gLUE2StorageShareDataStoreForeignKey
 *                               | gLUE2StorageShareStorageServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2StorageShare"}
 *   LDAP-DESC                 "A utilization target for a set of storage resources defined by a set of configuration parameters and characterized by status information"
 *   ID                        id-oc-gLUE2StorageShare }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageShare: OBJECT_CLASS = undefined;

/* eslint-enable */
