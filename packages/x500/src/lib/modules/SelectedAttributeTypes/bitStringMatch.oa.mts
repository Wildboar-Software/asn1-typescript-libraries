/* eslint-disable */
import { BIT_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { bitString } from "../SelectedAttributeTypes/bitString.oa.mjs";
import { id_mr_bitStringMatch } from "../SelectedAttributeTypes/id-mr-bitStringMatch.va.mjs";
/**
 * @summary bitStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bitStringMatch MATCHING-RULE ::= {
 *   SYNTAX       BIT STRING
 *   LDAP-SYNTAX  bitString.&id
 *   LDAP-NAME    {"bitStringMatch"}
 *   ID           id-mr-bitStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<BIT_STRING>}
 * @implements {MATCHING_RULE<BIT_STRING>}
 */
export const bitStringMatch: MATCHING_RULE<BIT_STRING> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeBitString,
    },
    encoderFor: {
        "&AssertionType": $._encodeBitString,
    },
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["bitStringMatch"],
    "&id": id_mr_bitStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
