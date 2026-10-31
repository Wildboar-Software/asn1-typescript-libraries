/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_udGroup_2 } from "../LdapUd/id-oc-udGroup-2.va.mjs";


/**
 * @summary udGroup_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * udGroup-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { udSerial
 *                               | description
 *                               | organizationalUnitName
 *                               | policyClass
 *                               | policyClassDisabled
 *                               | uid
 *                               | uidNumber
 *                               | gidNumber
 *                               | unixGroup
 *                               | udGroup
 *                               | udMemberSerial
 *                               | udMemberContainer
 *                               | fQDN
 *                               | uSID
 *                               | udMemberSerial }
 *   LDAP-NAME                 {"udGroup"}
 *   LDAP-DESC                 "group container for multiple purpose (users, group of group etc)"
 *   ID                        id-oc-udGroup-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const udGroup_2: OBJECT_CLASS = undefined;

/* eslint-enable */
