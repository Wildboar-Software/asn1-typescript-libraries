/* eslint-disable */
import { NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_mr_sOAIdentifierMatch } from "../AttributeCertificateDefinitions/id-mr-sOAIdentifierMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
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

/* eslint-enable */
