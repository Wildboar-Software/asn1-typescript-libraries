/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { ansiOrgNumericCode } from "../LdapSchema2ldifNadf/ansiOrgNumericCode.oa.mjs";
// export { id_oc_ansiOrgObject } from "../LdapSchema2ldifNadf/id-oc-ansiOrgObject.va.mjs";


/**
 * @summary ansiOrgObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ansiOrgObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ansiOrgNumericCode }
 *   LDAP-NAME                 {"ansiOrgObject"}
 *   ID                        id-oc-ansiOrgObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ansiOrgObject: OBJECT_CLASS = undefined;

/* eslint-enable */
