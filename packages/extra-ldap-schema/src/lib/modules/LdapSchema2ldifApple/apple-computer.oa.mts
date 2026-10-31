/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_apple_computer } from "../LdapSchema2ldifApple/id-oc-apple-computer.va.mjs";


/**
 * @summary apple_computer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-computer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { apple-realname
 *                               | description
 *                               | macAddress
 *                               | apple-category
 *                               | apple-computer-list-groups
 *                               | apple-keyword
 *                               | apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-networkview
 *                               | apple-xmlplist
 *                               | apple-service-url
 *                               | authAuthority
 *                               | uidNumber
 *                               | gidNumber
 *                               | apple-generateduid
 *                               | ttl
 *                               | acctFlags
 *                               | pwdLastSet
 *                               | logonTime
 *                               | logoffTime
 *                               | kickoffTime
 *                               | rid
 *                               | primaryGroupID
 *                               | sambaSID
 *                               | sambaPrimaryGroupSID }
 *   LDAP-NAME                 {"apple-computer"}
 *   LDAP-DESC                 "computer"
 *   ID                        id-oc-apple-computer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_computer: OBJECT_CLASS = undefined;

/* eslint-enable */
