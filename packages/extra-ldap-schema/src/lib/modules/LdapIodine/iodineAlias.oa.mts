/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { alias } from "../InformationFramework/alias.oa.mjs";
// export { id_oc_iodineAlias } from "../LdapIodine/id-oc-iodineAlias.va.mjs";


/**
 * @summary iodineAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iodineAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { alias }
 *   MAY CONTAIN               { iodineUid
 *                               | tjhsstGroupId
 *                               | tjhsstActivityId
 *                               | tjhsstStudentId
 *                               | tjhsstSectionId
 *                               | tjhsstClassId
 *                               | roomNumber
 *                               | uid }
 *   LDAP-NAME                 {"iodineAlias"}
 *   ID                        id-oc-iodineAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iodineAlias: OBJECT_CLASS = undefined;

/* eslint-enable */
