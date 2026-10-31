/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { ipaCertMapPromptUsername } from "../LdapCertmap/ipaCertMapPromptUsername.oa.mjs";
// export { id_oc_ipaCertMapConfigObject } from "../LdapCertmap/id-oc-ipaCertMapConfigObject.va.mjs";


/**
 * @summary ipaCertMapConfigObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaCertMapConfigObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ipaCertMapPromptUsername }
 *   LDAP-NAME                 {"ipaCertMapConfigObject"}
 *   LDAP-DESC                 "IPA Certificate Mapping global config options"
 *   ID                        id-oc-ipaCertMapConfigObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaCertMapConfigObject: OBJECT_CLASS = undefined;

/* eslint-enable */
