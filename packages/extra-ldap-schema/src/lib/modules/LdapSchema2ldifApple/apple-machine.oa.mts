/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_apple_machine } from "../LdapSchema2ldifApple/id-oc-apple-machine.va.mjs";


/**
 * @summary apple_machine
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-machine OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { apple-machine-software
 *                               | apple-machine-hardware
 *                               | apple-machine-serves
 *                               | apple-machine-suffix
 *                               | apple-machine-contactperson }
 *   LDAP-NAME                 {"apple-machine"}
 *   ID                        id-oc-apple-machine }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_machine: OBJECT_CLASS = undefined;

/* eslint-enable */
