/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Endpoint } from "../LdapGlue507Endpoint/gLUE2Endpoint.oa.mjs";
// export { gLUE2StorageEndpointStorageServiceForeignKey } from "../LdapGlue704StorageEndpoint/gLUE2StorageEndpointStorageServiceForeignKey.oa.mjs";
// export { id_oc_gLUE2StorageEndpoint } from "../LdapGlue704StorageEndpoint/id-oc-gLUE2StorageEndpoint.va.mjs";


/**
 * @summary gLUE2StorageEndpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageEndpoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Endpoint }
 *   MAY CONTAIN               { gLUE2StorageEndpointStorageServiceForeignKey }
 *   LDAP-NAME                 {"GLUE2StorageEndpoint"}
 *   LDAP-DESC                 "A network location having a well-defined interface and exposing the service functionalities"
 *   ID                        id-oc-gLUE2StorageEndpoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageEndpoint: OBJECT_CLASS = undefined;

/* eslint-enable */
