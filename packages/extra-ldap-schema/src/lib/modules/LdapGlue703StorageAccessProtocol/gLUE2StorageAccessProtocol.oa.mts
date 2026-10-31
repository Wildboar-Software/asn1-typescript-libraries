/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2StorageAccessProtocolMaxStreams } from "../LdapGlue703StorageAccessProtocol/gLUE2StorageAccessProtocolMaxStreams.oa.mjs";
// export { id_oc_gLUE2StorageAccessProtocol } from "../LdapGlue703StorageAccessProtocol/id-oc-gLUE2StorageAccessProtocol.va.mjs";


/**
 * @summary gLUE2StorageAccessProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2StorageAccessProtocol OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2StorageAccessProtocolID
 *                               | gLUE2StorageAccessProtocolType
 *                               | gLUE2StorageAccessProtocolVersion
 *                               | gLUE2StorageAccessProtocolStorageServiceForeignKey }
 *   MAY CONTAIN               { gLUE2StorageAccessProtocolMaxStreams }
 *   LDAP-NAME                 {"GLUE2StorageAccessProtocol"}
 *   LDAP-DESC                 "A type of protocol available to access the available storage capacities"
 *   ID                        id-oc-gLUE2StorageAccessProtocol }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2StorageAccessProtocol: OBJECT_CLASS = undefined;

/* eslint-enable */
