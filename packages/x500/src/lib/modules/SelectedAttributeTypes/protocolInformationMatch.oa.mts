/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_protocolInformationMatch } from "../SelectedAttributeTypes/id-mr-protocolInformationMatch.va.mjs";
/**
 * @summary protocolInformationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protocolInformationMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   ID           id-mr-protocolInformationMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<OCTET_STRING>}
 * @implements {MATCHING_RULE<OCTET_STRING>}
 */
export const protocolInformationMatch: MATCHING_RULE<OCTET_STRING> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeOctetString,
    },
    encoderFor: {
        "&AssertionType": $._encodeOctetString,
    },
    "&id": id_mr_protocolInformationMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
