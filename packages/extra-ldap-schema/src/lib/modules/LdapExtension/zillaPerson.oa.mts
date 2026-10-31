/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { officePerson } from "../LdapExtension/officePerson.oa.mjs";
// export { id_oc_zillaPerson } from "../LdapExtension/id-oc-zillaPerson.va.mjs";


/**
 * @summary zillaPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zillaPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { officePerson }
 *   MAY CONTAIN               { mobile
 *                               | pager
 *                               | description
 *                               | uRL
 *                               | telephoneNumber
 *                               | xmozillanickname
 *                               | xmozillausehtmlmail }
 *   LDAP-NAME                 {"zillaPerson"}
 *   LDAP-DESC                 "Netscape Communicator Extensions"
 *   ID                        id-oc-zillaPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zillaPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
