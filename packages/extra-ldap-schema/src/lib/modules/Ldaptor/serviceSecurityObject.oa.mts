/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_serviceSecurityObject } from "../Ldaptor/id-oc-serviceSecurityObject.va.mjs";


/**
 * @summary serviceSecurityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceSecurityObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | owner
 *                               | userPassword }
 *   MAY CONTAIN               { validFrom
 *                               | validUntil }
 *   LDAP-NAME                 {"serviceSecurityObject"}
 *   LDAP-DESC                 "A service-specific authentication method"
 *   ID                        id-oc-serviceSecurityObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serviceSecurityObject: OBJECT_CLASS = undefined;

/* eslint-enable */
