/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_integerFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-integerFirstComponentMatch.va.mjs";
// export { id_mr_integerFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-integerFirstComponentMatch.va.mjs";


/**
 * @summary integerFirstComponentMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * integerFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX  INTEGER
 *   ID      id-mr-integerFirstComponentMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<INTEGER>}
 * @implements {MATCHING_RULE<INTEGER>}
 */
export
const integerFirstComponentMatch: MATCHING_RULE<INTEGER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&id": id_mr_integerFirstComponentMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
