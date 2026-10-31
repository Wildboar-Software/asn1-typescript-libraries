/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_goFonMacro_2 } from "../LdapGosaCoreGofon/id-oc-goFonMacro-2.va.mjs";


/**
 * @summary goFonMacro_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonMacro-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goFonMacroVisible
 *                               | displayName
 *                               | goFonMacroContent
 *                               | description
 *                               | goFonMacroParameter }
 *   LDAP-NAME                 {"goFonMacro"}
 *   LDAP-DESC                 "Macro definitions for asterisk machines (v2.7)"
 *   ID                        id-oc-goFonMacro-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonMacro_2: OBJECT_CLASS = undefined;

/* eslint-enable */
