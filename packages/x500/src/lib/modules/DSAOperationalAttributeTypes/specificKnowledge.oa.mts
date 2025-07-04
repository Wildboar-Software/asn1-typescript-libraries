/* eslint-disable */
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta.mjs";
import { id_doa_specificKnowledge } from "../DSAOperationalAttributeTypes/id-doa-specificKnowledge.va.mjs";
import { masterAndShadowAccessPointsMatch } from "../DSAOperationalAttributeTypes/masterAndShadowAccessPointsMatch.oa.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
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

/* eslint-enable */
