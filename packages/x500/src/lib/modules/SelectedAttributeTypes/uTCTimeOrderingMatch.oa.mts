/* eslint-disable */
import { UTCTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_uTCTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-uTCTimeOrderingMatch.va.mjs";
/**
 * @summary uTCTimeOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uTCTimeOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       UTCTime
 *   ID           id-mr-uTCTimeOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UTCTime>}
 * @implements {MATCHING_RULE<UTCTime>}
 */
export const uTCTimeOrderingMatch: MATCHING_RULE<UTCTime> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTCTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTCTime,
    },
    "&id": id_mr_uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
