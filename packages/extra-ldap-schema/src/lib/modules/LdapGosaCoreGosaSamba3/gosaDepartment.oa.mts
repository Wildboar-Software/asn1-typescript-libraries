/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { manager } from "../LdapSchema2ldifCosine/manager.oa.mjs";
// export { id_oc_gosaDepartment } from "../LdapGosaCoreGosaSamba3/id-oc-gosaDepartment.va.mjs";


/**
 * @summary gosaDepartment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaDepartment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { organizationalUnitName
 *                               | description }
 *   MAY CONTAIN               { manager }
 *   LDAP-NAME                 {"gosaDepartment"}
 *   LDAP-DESC                 "Class to mark Departments for GOsa (v2.7)"
 *   ID                        id-oc-gosaDepartment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaDepartment: OBJECT_CLASS = undefined;

/* eslint-enable */
