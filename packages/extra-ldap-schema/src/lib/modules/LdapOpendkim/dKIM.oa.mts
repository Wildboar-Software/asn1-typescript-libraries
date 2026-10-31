/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { dKIMSelector } from "../LdapOpendkim/dKIMSelector.oa.mjs";
// export { id_oc_dKIM } from "../LdapOpendkim/id-oc-dKIM.va.mjs";


/**
 * @summary dKIM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dKIM OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { dKIMSelector }
 *   MAY CONTAIN               { dKIMIdentity
 *                               | dKIMDomain
 *                               | dKIMKey }
 *   LDAP-NAME                 {"DKIM"}
 *   LDAP-DESC                 "DKIM Selector and Key container"
 *   ID                        id-oc-dKIM }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dKIM: OBJECT_CLASS = undefined;

/* eslint-enable */
