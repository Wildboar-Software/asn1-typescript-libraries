/* eslint-disable */
import { NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { id_mr_sOAIdentifierMatch } from "../AttributeCertificateDefinitions/id-mr-sOAIdentifierMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/* START_OF_SYMBOL_DEFINITION sOAIdentifierMatch */
/**
 * @summary sOAIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sOAIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX  NULL
 *   ID      id-mr-sOAIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<NULL>}
 * @implements {MATCHING_RULE<NULL>}
 */
export const sOAIdentifierMatch: MATCHING_RULE<NULL> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNull,
    },
    encoderFor: {
        "&AssertionType": $._encodeNull,
    },
    "&id": id_mr_sOAIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sOAIdentifierMatch */

/* eslint-enable */
