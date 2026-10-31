/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_soniaEmployeeType } from "../Ldapmigration97sonia/id-oc-soniaEmployeeType.va.mjs";


/**
 * @summary soniaEmployeeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaEmployeeType OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | employeeType
 *                               | employeeNumber }
 *   MAY CONTAIN               { description
 *                               | soniaEmployeeTypeIsVisible }
 *   LDAP-NAME                 {"soniaEmployeeType"}
 *   ID                        id-oc-soniaEmployeeType }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaEmployeeType: OBJECT_CLASS = undefined;

/* eslint-enable */
