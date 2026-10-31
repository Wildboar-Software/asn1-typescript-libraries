/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_goFonServer } from "../LdapGosaCoreGoserver/id-oc-goFonServer.va.mjs";


/**
 * @summary goFonServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName
 *                               | goFonAdmin
 *                               | goFonPassword
 *                               | goFonAreaCode
 *                               | goFonCountryCode }
 *   MAY CONTAIN               { description
 *                               | goFonServerStatus }
 *   LDAP-NAME                 {"goFonServer"}
 *   LDAP-DESC                 "Fon server description (v2.7)"
 *   ID                        id-oc-goFonServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonServer: OBJECT_CLASS = undefined;

/* eslint-enable */
