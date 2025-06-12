/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { epcForm } from "../SelectedAttributeTypes/epcForm.oa.mjs";
import {
    EpcFormat,
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "../SelectedAttributeTypes/EpcFormat.ta.mjs";
import { id_at_epcFormat } from "../SelectedAttributeTypes/id-at-epcFormat.va.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
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
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
export { epcForm } from "../SelectedAttributeTypes/epcForm.oa.mjs";
export {
    EpcFormat,
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "../SelectedAttributeTypes/EpcFormat.ta.mjs";
export { id_at_epcFormat } from "../SelectedAttributeTypes/id-at-epcFormat.va.mjs";

/* START_OF_SYMBOL_DEFINITION epcFormat */
/**
 * @summary epcFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcFormat  ATTRIBUTE ::= {
 *   WITH SYNTAX              EpcFormat
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              epcForm.&id
 *   LDAP-NAME                {"epcFormat"}
 *   ID                       id-at-epcFormat }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<EpcFormat>}
 * @implements {ATTRIBUTE<EpcFormat>}
 */
export const epcFormat: ATTRIBUTE<EpcFormat> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EpcFormat,
    },
    encoderFor: {
        "&Type": _encode_EpcFormat,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": epcForm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["epcFormat"],
    "&id": id_at_epcFormat /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION epcFormat */

/* eslint-enable */
