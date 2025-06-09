/* eslint-disable */
import {
    DitBridgeKnowledge,
    _decode_DitBridgeKnowledge,
    _encode_DitBridgeKnowledge,
} from "../DistributedOperations/DitBridgeKnowledge.ta.js";
import { id_doa_ditBridgeKnowledge } from "../DSAOperationalAttributeTypes/id-doa-ditBridgeKnowledge.va.js";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa.js";
export {
    DitBridgeKnowledge,
    _decode_DitBridgeKnowledge,
    _encode_DitBridgeKnowledge,
} from "../DistributedOperations/DitBridgeKnowledge.ta.js";
export { id_doa_ditBridgeKnowledge } from "../DSAOperationalAttributeTypes/id-doa-ditBridgeKnowledge.va.js";
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
export { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa.js";

/* START_OF_SYMBOL_DEFINITION ditBridgeKnowledge */
/**
 * @summary ditBridgeKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ditBridgeKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             DitBridgeKnowledge
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-ditBridgeKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DitBridgeKnowledge>}
 * @implements {ATTRIBUTE<DitBridgeKnowledge>}
 */
export const ditBridgeKnowledge: ATTRIBUTE<DitBridgeKnowledge> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DitBridgeKnowledge,
    },
    encoderFor: {
        "&Type": _encode_DitBridgeKnowledge,
    },
    "&equality-match": directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_ditBridgeKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ditBridgeKnowledge */

/* eslint-enable */
