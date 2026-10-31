/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { nestedGroup } from "../Ldap60basev2/nestedGroup.oa.mjs";
// export { memberManager } from "../Ldap60basev2/memberManager.oa.mjs";
// export { id_oc_ipaUserGroup } from "../Ldap60basev2/id-oc-ipaUserGroup.va.mjs";


/**
 * @summary ipaUserGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaUserGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nestedGroup }
 *   MAY CONTAIN               { memberManager }
 *   LDAP-NAME                 {"ipaUserGroup"}
 *   LDAP-DESC                 "IPA user group object class"
 *   ID                        id-oc-ipaUserGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaUserGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
