/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_cpCps } from "../AuthenticationFramework/id-oc-cpCps.va.mjs";


/**
 * @summary cpCps
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cpCps OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {certificatePolicy |
 *                        certificationPracticeStmt}
 *   LDAP-NAME           {"cpCps"}
 *   LDAP-DESC           "Certificate Policy and Certification Practice Statement"
 *   ID                  id-oc-cpCps }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cpCps: OBJECT_CLASS = undefined;

/* eslint-enable */
