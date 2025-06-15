/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_uuidpairmatch } from "../SelectedAttributeTypes/id-mr-uuidpairmatch.va.mjs";
import {
    UUIDPair,
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta.mjs";
/**
 * @summary uUIDPairMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uUIDPairMatch MATCHING-RULE ::= {
 *   SYNTAX       UUIDPair
 *   ID           id-mr-uuidpairmatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UUIDPair>}
 * @implements {MATCHING_RULE<UUIDPair>}
 */
export const uUIDPairMatch: MATCHING_RULE<UUIDPair> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UUIDPair,
    },
    encoderFor: {
        "&AssertionType": _encode_UUIDPair,
    },
    "&id": id_mr_uuidpairmatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
