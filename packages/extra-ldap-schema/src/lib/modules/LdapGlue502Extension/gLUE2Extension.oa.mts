/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_gLUE2Extension } from "../LdapGlue502Extension/id-oc-gLUE2Extension.va.mjs";


/**
 * @summary gLUE2Extension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Extension OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2ExtensionLocalID
 *                               | gLUE2ExtensionKey
 *                               | gLUE2ExtensionValue
 *                               | gLUE2ExtensionEntityForeignKey }
 *   LDAP-NAME                 {"GLUE2Extension"}
 *   LDAP-DESC                 "A key/value pair enabling the association of extra information"
 *   ID                        id-oc-gLUE2Extension }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Extension: OBJECT_CLASS = undefined;

/* eslint-enable */
