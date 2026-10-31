/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_goGlpiServer } from "../LdapGosaCoreGoserver/id-oc-goGlpiServer.va.mjs";


/**
 * @summary goGlpiServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goGlpiServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goGlpiAdmin
 *                               | goGlpiDatabase }
 *   MAY CONTAIN               { description
 *                               | goGlpiPassword
 *                               | goGlpiServerStatus }
 *   LDAP-NAME                 {"goGlpiServer"}
 *   LDAP-DESC                 "Glpi server definition (v2.7)"
 *   ID                        id-oc-goGlpiServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goGlpiServer: OBJECT_CLASS = undefined;

/* eslint-enable */
