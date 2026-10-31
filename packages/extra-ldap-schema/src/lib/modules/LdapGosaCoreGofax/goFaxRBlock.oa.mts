/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_goFaxRBlock } from "../LdapGosaCoreGofax/id-oc-goFaxRBlock.va.mjs";


/**
 * @summary goFaxRBlock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFaxRBlock OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goFaxRBlocklist
 *                               | description }
 *   LDAP-NAME                 {"goFaxRBlock"}
 *   LDAP-DESC                 "goFax receive blocklist groups (v1.0.4)"
 *   ID                        id-oc-goFaxRBlock }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFaxRBlock: OBJECT_CLASS = undefined;

/* eslint-enable */
