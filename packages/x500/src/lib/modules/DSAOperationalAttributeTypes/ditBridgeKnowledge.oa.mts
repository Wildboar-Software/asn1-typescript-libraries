/* eslint-disable */
import {
    DitBridgeKnowledge,
    _decode_DitBridgeKnowledge,
    _encode_DitBridgeKnowledge,
} from "../DistributedOperations/DitBridgeKnowledge.ta.mjs";
import { id_doa_ditBridgeKnowledge } from "../DSAOperationalAttributeTypes/id-doa-ditBridgeKnowledge.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa.mjs";
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

/* eslint-enable */
