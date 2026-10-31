/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { apple_xmlplist } from "../LdapSchema2ldifApple/apple-xmlplist.oa.mjs";
// export { id_oc_apple_serverassistant_config } from "../LdapSchema2ldifApple/id-oc-apple-serverassistant-config.va.mjs";


/**
 * @summary apple_serverassistant_config
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-serverassistant-config OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { apple-xmlplist }
 *   LDAP-NAME                 {"apple-serverassistant-config"}
 *   ID                        id-oc-apple-serverassistant-config }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_serverassistant_config: OBJECT_CLASS = undefined;

/* eslint-enable */
