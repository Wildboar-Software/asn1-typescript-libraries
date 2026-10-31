/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { x_plug_paymentDescription } from "../LdapPlugpen/x-plug-paymentDescription.oa.mjs";
// export { id_oc_x_plug_payment } from "../LdapPlugpen/id-oc-x-plug-payment.va.mjs";


/**
 * @summary x_plug_payment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * x-plug-payment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { x-plug-paymentDate
 *                               | x-plug-paymentID
 *                               | x-plug-paymentAmount
 *                               | x-plug-paymentType
 *                               | x-plug-paymentYears }
 *   MAY CONTAIN               { x-plug-paymentDescription }
 *   LDAP-NAME                 {"x-plug-payment"}
 *   LDAP-DESC                 "Payment"
 *   ID                        id-oc-x-plug-payment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const x_plug_payment: OBJECT_CLASS = undefined;

/* eslint-enable */
