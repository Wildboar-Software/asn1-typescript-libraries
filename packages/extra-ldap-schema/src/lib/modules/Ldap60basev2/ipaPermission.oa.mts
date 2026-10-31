/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { ipaPermissionType } from "../Ldap60basev2/ipaPermissionType.oa.mjs";
// export { id_oc_ipaPermission } from "../Ldap60basev2/id-oc-ipaPermission.va.mjs";


/**
 * @summary ipaPermission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaPermission OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ipaPermissionType }
 *   LDAP-NAME                 {"ipaPermission"}
 *   LDAP-DESC                 "IPA Permission objectclass"
 *   ID                        id-oc-ipaPermission }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaPermission: OBJECT_CLASS = undefined;

/* eslint-enable */
