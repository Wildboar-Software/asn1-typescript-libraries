/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_apple_group } from "../LdapSchema2ldifApple/id-oc-apple-group.va.mjs";


/**
 * @summary apple_group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { apple-group-homeurl
 *                               | apple-group-homeowner
 *                               | apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-group-realname
 *                               | apple-user-picture
 *                               | apple-keyword
 *                               | apple-generateduid
 *                               | apple-group-nestedgroup
 *                               | apple-group-memberguid
 *                               | mail
 *                               | rid
 *                               | sambaSID
 *                               | ttl }
 *   LDAP-NAME                 {"apple-group"}
 *   LDAP-DESC                 "group account"
 *   ID                        id-oc-apple-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_group: OBJECT_CLASS = undefined;

/* eslint-enable */
