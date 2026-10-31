/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_puppetClient } from "../LdapPuppet/id-oc-puppetClient.va.mjs";


/**
 * @summary puppetClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * puppetClient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { puppetClass
 *                               | parentNode
 *                               | environment
 *                               | puppetVar }
 *   LDAP-NAME                 {"puppetClient"}
 *   LDAP-DESC                 "Puppet Client objectclass"
 *   ID                        id-oc-puppetClient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const puppetClient: OBJECT_CLASS = undefined;

/* eslint-enable */
