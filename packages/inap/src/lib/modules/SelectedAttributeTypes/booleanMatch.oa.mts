/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va.mjs";
// export { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va.mjs";


/**
 * @summary booleanMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * booleanMatch MATCHING-RULE ::= {SYNTAX  BOOLEAN
 *                                 ID      id-mr-booleanMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<BOOLEAN>}
 * @implements {MATCHING_RULE<BOOLEAN>}
 */
export
const booleanMatch: MATCHING_RULE<BOOLEAN> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeBoolean,
    },
    encoderFor: {
        "&AssertionType": $._encodeBoolean,
    },
    "&id": id_mr_booleanMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
