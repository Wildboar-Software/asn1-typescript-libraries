/* eslint-disable */
import { UTCTime } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_uTCTimeMatch } from "../SelectedAttributeTypes/id-mr-uTCTimeMatch.va.mjs";
/**
 * @summary uTCTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uTCTimeMatch MATCHING-RULE ::= {
 *   SYNTAX       UTCTime
 *   ID           id-mr-uTCTimeMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UTCTime>}
 * @implements {MATCHING_RULE<UTCTime>}
 */
export const uTCTimeMatch: MATCHING_RULE<UTCTime> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTCTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTCTime,
    },
    "&id": id_mr_uTCTimeMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
