/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { pkiPath } from "../AuthenticationFramework/pkiPath.oa.mjs";
// export { id_oc_pkiCertPath } from "../AuthenticationFramework/id-oc-pkiCertPath.va.mjs";


/**
 * @summary pkiCertPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pkiCertPath OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {pkiPath}
 *   LDAP-NAME           {"pkiCertPath"}
 *   LDAP-DESC           "PKI Certification Path"
 *   ID                  id-oc-pkiCertPath }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pkiCertPath: OBJECT_CLASS = undefined;

/* eslint-enable */
