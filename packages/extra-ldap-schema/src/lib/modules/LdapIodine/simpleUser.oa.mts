/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { id_oc_simpleUser } from "../LdapIodine/id-oc-simpleUser.va.mjs";


/**
 * @summary simpleUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * simpleUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson }
 *   MUST CONTAIN              { iodineUid
 *                               | iodineUidNumber }
 *   MAY CONTAIN               { startpage
 *                               | style
 *                               | chrome
 *                               | header
 *                               | startpage
 *                               | givenName
 *                               | surname
 *                               | commonName
 *                               | is-admin }
 *   LDAP-NAME                 {"simpleUser"}
 *   ID                        id-oc-simpleUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const simpleUser: OBJECT_CLASS = undefined;

/* eslint-enable */
