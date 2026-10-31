/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { PreferredDeliveryMethod, _decode_PreferredDeliveryMethod, _encode_PreferredDeliveryMethod } from "../SelectedAttributeTypes/PreferredDeliveryMethod.ta.mjs";
// export { deliveryMethod } from "../SelectedAttributeTypes/deliveryMethod.oa.mjs";
// export { id_at_preferredDeliveryMethod } from "../SelectedAttributeTypes/id-at-preferredDeliveryMethod.va.mjs";


/**
 * @summary preferredDeliveryMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * preferredDeliveryMethod ATTRIBUTE ::= {
 *   WITH SYNTAX              PreferredDeliveryMethod
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              deliveryMethod.&id
 *   LDAP-NAME                {"preferredDeliveryMethod"}
 *   ID                       id-at-preferredDeliveryMethod }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const preferredDeliveryMethod: ATTRIBUTE = undefined;

/* eslint-enable */
