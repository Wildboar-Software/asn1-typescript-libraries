/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ipsecBase } from "../LdapSchema2ldifMicrosoft/ipsecBase.oa.mjs";
// export { id_oc_ipsecPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-ipsecPolicy.va.mjs";


/**
 * @summary ipsecPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipsecPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipsecBase }
 *   MAY CONTAIN               { ipsecISAKMPReference
 *                               | ipsecNFAReference }
 *   LDAP-NAME                 {"ipsecPolicy"}
 *   ID                        id-oc-ipsecPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipsecPolicy: OBJECT_CLASS = undefined;

/* eslint-enable */
