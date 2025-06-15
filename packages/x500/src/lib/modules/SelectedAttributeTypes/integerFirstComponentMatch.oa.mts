/* eslint-disable */
import { INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_integerFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-integerFirstComponentMatch.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
/**
 * @summary integerFirstComponentMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integerFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerFirstComponentMatch"}
 *   ID           id-mr-integerFirstComponentMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<INTEGER>}
 * @implements {MATCHING_RULE<INTEGER>}
 */
export const integerFirstComponentMatch: MATCHING_RULE<INTEGER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["integerFirstComponentMatch"],
    "&id": id_mr_integerFirstComponentMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
