/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_accountable } from "../LdapIspenv/id-oc-accountable.va.mjs";


/**
 * @summary accountable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * accountable OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { billPaid
 *                               | price
 *                               | currency
 *                               | payperiod
 *                               | payday
 *                               | dunningCounter
 *                               | productcode }
 *   LDAP-NAME                 {"accountable"}
 *   LDAP-DESC                 "Marks a resource (an entry) as being subject to payment"
 *   ID                        id-oc-accountable }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const accountable: OBJECT_CLASS = undefined;

/* eslint-enable */
