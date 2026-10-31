/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { gLUE2StorageManagerStorageServiceForeignKey } from "../LdapGlue707StorageManager/gLUE2StorageManagerStorageServiceForeignKey.oa.mjs";
// export { id_oc_gLUE2StorageManager } from "../LdapGlue707StorageManager/id-oc-gLUE2StorageManager.va.mjs";


/**
 * @summary gLUE2StorageManager
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageManager OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { gLUE2StorageManagerStorageServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2StorageManager"}
 *   LDAP-DESC                 "The primary software component locally managing one or more storage resources. It can describe also aggregated information about the managed resources."
 *   ID                        id-oc-gLUE2StorageManager }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageManager: OBJECT_CLASS = undefined;

/* eslint-enable */
