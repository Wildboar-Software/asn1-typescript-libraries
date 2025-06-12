/* eslint-disable */
import { id_doa_supplierKnowledge } from "../DSAOperationalAttributeTypes/id-doa-supplierKnowledge.va.mjs";
import {
    SupplierInformation,
    _decode_SupplierInformation,
    _encode_SupplierInformation,
} from "../DSAOperationalAttributeTypes/SupplierInformation.ta.mjs";
import { supplierOrConsumerInformationMatch } from "../DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch.oa.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { id_doa_supplierKnowledge } from "../DSAOperationalAttributeTypes/id-doa-supplierKnowledge.va.mjs";
export {
    SupplierInformation,
    _decode_SupplierInformation,
    _encode_SupplierInformation,
} from "../DSAOperationalAttributeTypes/SupplierInformation.ta.mjs";
export { supplierOrConsumerInformationMatch } from "../DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch.oa.mjs";
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

/* START_OF_SYMBOL_DEFINITION supplierKnowledge */
/**
 * @summary supplierKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             SupplierInformation
 *   EQUALITY MATCHING RULE  supplierOrConsumerInformationMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-supplierKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SupplierInformation>}
 * @implements {ATTRIBUTE<SupplierInformation>}
 */
export const supplierKnowledge: ATTRIBUTE<SupplierInformation> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupplierInformation,
    },
    encoderFor: {
        "&Type": _encode_SupplierInformation,
    },
    "&equality-match": supplierOrConsumerInformationMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_supplierKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supplierKnowledge */

/* eslint-enable */
