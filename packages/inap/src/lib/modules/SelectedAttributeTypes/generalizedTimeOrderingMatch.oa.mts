/* eslint-disable */
import {
    GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-generalizedTimeOrderingMatch.va.mjs";
// export { id_mr_generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-generalizedTimeOrderingMatch.va.mjs";


/**
 * @summary generalizedTimeOrderingMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * generalizedTimeOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX  GeneralizedTime
 *   -- as per 41.3 b) or c) of ITU-T Rec. X.680 | ISO/IEC 8824-1
 *   ID      id-mr-generalizedTimeOrderingMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<GeneralizedTime>}
 * @implements {MATCHING_RULE<GeneralizedTime>}
 */
export
const generalizedTimeOrderingMatch: MATCHING_RULE<GeneralizedTime> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeGeneralizedTime,
    },
    "&id": id_mr_generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
