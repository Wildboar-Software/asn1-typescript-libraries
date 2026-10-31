/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_ipaCertMapRule } from "../LdapCertmap/id-oc-ipaCertMapRule.va.mjs";


/**
 * @summary ipaCertMapRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaCertMapRule OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | ipaCertMapMapRule
 *                               | ipaCertMapMatchRule
 *                               | associatedDomain
 *                               | ipaCertMapPriority
 *                               | ipaEnabledFlag }
 *   LDAP-NAME                 {"ipaCertMapRule"}
 *   LDAP-DESC                 "IPA Certificate Mapping rule"
 *   ID                        id-oc-ipaCertMapRule }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaCertMapRule: OBJECT_CLASS = undefined;

/* eslint-enable */
