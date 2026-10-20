/* eslint-disable */
import {
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_numericStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-numericStringOrderingMatch.va.mjs";
// export { id_mr_numericStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-numericStringOrderingMatch.va.mjs";


/**
 * @summary numericStringOrderingMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * numericStringOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX  NumericString
 *   ID      id-mr-numericStringOrderingMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<NumericString>}
 * @implements {MATCHING_RULE<NumericString>}
 */
export
const numericStringOrderingMatch: MATCHING_RULE<NumericString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNumericString,
    },
    encoderFor: {
        "&AssertionType": $._encodeNumericString,
    },
    "&id": id_mr_numericStringOrderingMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
