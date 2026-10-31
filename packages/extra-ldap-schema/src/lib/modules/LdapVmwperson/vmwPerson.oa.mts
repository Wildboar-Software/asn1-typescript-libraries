/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { id_oc_vmwPerson } from "../LdapVmwperson/id-oc-vmwPerson.va.mjs";


/**
 * @summary vmwPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vmwPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetOrgPerson
 *                               | organizationalPerson
 *                               | person
 *                               | top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { jiveID
 *                               | userStatus
 *                               | userType
 *                               | createdBy
 *                               | modifiedBy
 *                               | customernumber
 *                               | vmwEnrollmentFlag }
 *   LDAP-NAME                 {"vmwPerson"}
 *   LDAP-DESC                 "VMware defined objectclass"
 *   ID                        id-oc-vmwPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const vmwPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
