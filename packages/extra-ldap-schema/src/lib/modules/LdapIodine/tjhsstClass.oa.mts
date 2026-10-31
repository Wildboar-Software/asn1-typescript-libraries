/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_tjhsstClass } from "../LdapIodine/id-oc-tjhsstClass.va.mjs";


/**
 * @summary tjhsstClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tjhsstClass OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { tjhsstClassId
 *                               | tjhsstSectionId
 *                               | courseLength
 *                               | commonName
 *                               | sponsorDn
 *                               | graduationYear
 *                               | quarterNumber
 *                               | classPeriod }
 *   MAY CONTAIN               { shortClassName
 *                               | description
 *                               | displayName
 *                               | enrolledStudent
 *                               | roomNumber }
 *   LDAP-NAME                 {"tjhsstClass"}
 *   ID                        id-oc-tjhsstClass }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tjhsstClass: OBJECT_CLASS = undefined;

/* eslint-enable */
