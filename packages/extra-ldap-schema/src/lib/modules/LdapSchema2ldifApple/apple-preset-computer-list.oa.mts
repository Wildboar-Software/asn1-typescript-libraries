/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_apple_preset_computer_list } from "../LdapSchema2ldifApple/id-oc-apple-preset-computer-list.va.mjs";


/**
 * @summary apple_preset_computer_list
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-preset-computer-list OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-computer-list-groups
 *                               | apple-keyword }
 *   LDAP-NAME                 {"apple-preset-computer-list"}
 *   LDAP-DESC                 "preset computer list"
 *   ID                        id-oc-apple-preset-computer-list }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_preset_computer_list: OBJECT_CLASS = undefined;

/* eslint-enable */
