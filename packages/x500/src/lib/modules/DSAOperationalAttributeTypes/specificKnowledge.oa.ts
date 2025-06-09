/* eslint-disable */
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta.js";
import { id_doa_specificKnowledge } from "../DSAOperationalAttributeTypes/id-doa-specificKnowledge.va.js";
import { masterAndShadowAccessPointsMatch } from "../DSAOperationalAttributeTypes/masterAndShadowAccessPointsMatch.oa.js";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
export {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta.js";
export { id_doa_specificKnowledge } from "../DSAOperationalAttributeTypes/id-doa-specificKnowledge.va.js";
export { masterAndShadowAccessPointsMatch } from "../DSAOperationalAttributeTypes/masterAndShadowAccessPointsMatch.oa.js";
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

/* START_OF_SYMBOL_DEFINITION specificKnowledge */
/**
 * @summary specificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * specificKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             MasterAndShadowAccessPoints
 *   EQUALITY MATCHING RULE  masterAndShadowAccessPointsMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   distributedOperation
 *   ID                      id-doa-specificKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<MasterAndShadowAccessPoints>}
 * @implements {ATTRIBUTE<MasterAndShadowAccessPoints>}
 */
export const specificKnowledge: ATTRIBUTE<MasterAndShadowAccessPoints> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MasterAndShadowAccessPoints,
    },
    encoderFor: {
        "&Type": _encode_MasterAndShadowAccessPoints,
    },
    "&equality-match": masterAndShadowAccessPointsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": distributedOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_specificKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION specificKnowledge */

/* eslint-enable */
