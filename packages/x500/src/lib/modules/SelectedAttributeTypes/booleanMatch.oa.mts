/* eslint-disable */
import { BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { bitString } from "../SelectedAttributeTypes/bitString.oa.mjs";
import { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
export { bitString } from "../SelectedAttributeTypes/bitString.oa.mjs";
export { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va.mjs";

/* START_OF_SYMBOL_DEFINITION booleanMatch */
/**
 * @summary booleanMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * booleanMatch MATCHING-RULE ::= {
 *   SYNTAX       BOOLEAN
 *   LDAP-SYNTAX  bitString.&id
 *   LDAP-NAME    {"booleanMatch"}
 *   ID           id-mr-booleanMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<BOOLEAN>}
 * @implements {MATCHING_RULE<BOOLEAN>}
 */
export const booleanMatch: MATCHING_RULE<BOOLEAN> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeBoolean,
    },
    encoderFor: {
        "&AssertionType": $._encodeBoolean,
    },
    "&ldapSyntax": bitString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["booleanMatch"],
    "&id": id_mr_booleanMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION booleanMatch */

/* eslint-enable */
