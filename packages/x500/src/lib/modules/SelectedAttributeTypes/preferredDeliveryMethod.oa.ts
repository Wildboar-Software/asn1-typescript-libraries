/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { deliveryMethod } from "../SelectedAttributeTypes/deliveryMethod.oa.js";
import { id_at_preferredDeliveryMethod } from "../SelectedAttributeTypes/id-at-preferredDeliveryMethod.va.js";
import {
    PreferredDeliveryMethod,
    _decode_PreferredDeliveryMethod,
    _encode_PreferredDeliveryMethod,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { deliveryMethod } from "../SelectedAttributeTypes/deliveryMethod.oa.js";
export { id_at_preferredDeliveryMethod } from "../SelectedAttributeTypes/id-at-preferredDeliveryMethod.va.js";
export {
    PreferredDeliveryMethod,
    _decode_PreferredDeliveryMethod,
    _encode_PreferredDeliveryMethod,
} from "../SelectedAttributeTypes/PreferredDeliveryMethod.ta.js";

/* START_OF_SYMBOL_DEFINITION preferredDeliveryMethod */
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
 * @type {ATTRIBUTE<PreferredDeliveryMethod>}
 * @implements {ATTRIBUTE<PreferredDeliveryMethod>}
 */
export const preferredDeliveryMethod: ATTRIBUTE<PreferredDeliveryMethod> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PreferredDeliveryMethod,
    },
    encoderFor: {
        "&Type": _encode_PreferredDeliveryMethod,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": deliveryMethod["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["preferredDeliveryMethod"],
    "&id": id_at_preferredDeliveryMethod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION preferredDeliveryMethod */

/* eslint-enable */
