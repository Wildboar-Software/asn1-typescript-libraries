/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_goVirusServer } from "../LdapGosaCoreGoserver/id-oc-goVirusServer.va.mjs";


/**
 * @summary goVirusServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goVirusServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { avMaxThreads
 *                               | avMaxDirectoryRecursions
 *                               | avUser
 *                               | avFlags
 *                               | avArchiveMaxFileSize
 *                               | avArchiveMaxRecursion
 *                               | avArchiveMaxCompressionRatio
 *                               | avDatabaseMirror
 *                               | avChecksPerDay
 *                               | avHttpProxyURL
 *                               | avStatus }
 *   LDAP-NAME                 {"goVirusServer"}
 *   LDAP-DESC                 "Virus server definition (v2.7)"
 *   ID                        id-oc-goVirusServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goVirusServer: OBJECT_CLASS = undefined;

/* eslint-enable */
