/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ipaOverrideAnchor } from "../LdapIdviews/ipaOverrideAnchor.oa.mjs";
// export { id_oc_ipaUserOverride } from "../LdapIdviews/id-oc-ipaUserOverride.va.mjs";


/**
 * @summary ipaUserOverride
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaUserOverride OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaOverrideAnchor }
 *   MAY CONTAIN               { uid
 *                               | uidNumber
 *                               | gidNumber
 *                               | homeDirectory
 *                               | loginShell
 *                               | gecos
 *                               | ipaOriginalUid }
 *   LDAP-NAME                 {"ipaUserOverride"}
 *   LDAP-DESC                 "Override for User Attributes"
 *   ID                        id-oc-ipaUserOverride }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaUserOverride: OBJECT_CLASS = undefined;

/* eslint-enable */
