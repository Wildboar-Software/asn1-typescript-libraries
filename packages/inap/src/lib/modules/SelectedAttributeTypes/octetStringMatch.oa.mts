/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_octetStringMatch } from "../SelectedAttributeTypes/id-mr-octetStringMatch.va.mjs";
// export { id_mr_octetStringMatch } from "../SelectedAttributeTypes/id-mr-octetStringMatch.va.mjs";


/**
 * @summary octetStringMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * octetStringMatch MATCHING-RULE ::= {
 *   SYNTAX  OCTET STRING
 *   ID      id-mr-octetStringMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<OCTET_STRING>}
 * @implements {MATCHING_RULE<OCTET_STRING>}
 */
export
const octetStringMatch: MATCHING_RULE<OCTET_STRING> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeOctetString,
    },
    encoderFor: {
        "&AssertionType": $._encodeOctetString,
    },
    "&id": id_mr_octetStringMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ParentMatchingRules": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
