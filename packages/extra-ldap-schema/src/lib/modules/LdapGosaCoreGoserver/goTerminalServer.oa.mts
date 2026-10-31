/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_goTerminalServer } from "../LdapGosaCoreGoserver/id-oc-goTerminalServer.va.mjs";


/**
 * @summary goTerminalServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goTerminalServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goXdmcpIsEnabled }
 *   MAY CONTAIN               { description
 *                               | goTerminalServerStatus
 *                               | gotoSessionType
 *                               | goFontPath }
 *   LDAP-NAME                 {"goTerminalServer"}
 *   LDAP-DESC                 "Terminal server description (v2.7)"
 *   ID                        id-oc-goTerminalServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goTerminalServer: OBJECT_CLASS = undefined;

/* eslint-enable */
