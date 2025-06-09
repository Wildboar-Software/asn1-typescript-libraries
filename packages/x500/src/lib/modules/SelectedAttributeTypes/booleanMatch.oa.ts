/* eslint-disable */
import { BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { bitString } from "../SelectedAttributeTypes/bitString.oa.js";
import { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { bitString } from "../SelectedAttributeTypes/bitString.oa.js";
export { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va.js";

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
