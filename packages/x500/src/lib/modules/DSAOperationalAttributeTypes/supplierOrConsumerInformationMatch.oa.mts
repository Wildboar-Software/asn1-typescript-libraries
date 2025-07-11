/* eslint-disable */
import { id_kmr_supplierConsumerMatch } from "../DSAOperationalAttributeTypes/id-kmr-supplierConsumerMatch.va.mjs";
import {
    supplierOrConsumerInformationMatch_AssertionType,
    _decode_supplierOrConsumerInformationMatch_AssertionType,
    _encode_supplierOrConsumerInformationMatch_AssertionType,
} from "../DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary supplierOrConsumerInformationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierOrConsumerInformationMatch MATCHING-RULE ::= {
 *   SYNTAX SET {
 *     ae-title              [0]  Name,
 *     agreement-identifier  [2]  INTEGER}
 *   ID      id-kmr-supplierConsumerMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<supplierOrConsumerInformationMatch_AssertionType>}
 * @implements {MATCHING_RULE<supplierOrConsumerInformationMatch_AssertionType>}
 */
export const supplierOrConsumerInformationMatch: MATCHING_RULE<supplierOrConsumerInformationMatch_AssertionType> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_supplierOrConsumerInformationMatch_AssertionType,
    },
    encoderFor: {
        "&AssertionType": _encode_supplierOrConsumerInformationMatch_AssertionType,
    },
    "&id": id_kmr_supplierConsumerMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
