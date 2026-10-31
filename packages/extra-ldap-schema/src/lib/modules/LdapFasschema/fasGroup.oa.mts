/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ipaUserGroup } from "../Ldap60basev2/ipaUserGroup.oa.mjs";
// export { id_oc_fasGroup } from "../LdapFasschema/id-oc-fasGroup.va.mjs";


/**
 * @summary fasGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fasGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaUserGroup }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { fasURL
 *                               | fasMailingList
 *                               | fasIRCChannel
 *                               | fasDiscussionURL }
 *   LDAP-NAME                 {"fasGroup"}
 *   LDAP-DESC                 "FAS group objectclass"
 *   ID                        id-oc-fasGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fasGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
