/* eslint-disable */
import { INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_integerMatch } from "../SelectedAttributeTypes/id-mr-integerMatch.va.js";
import { integer } from "../SelectedAttributeTypes/integer.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_integerMatch } from "../SelectedAttributeTypes/id-mr-integerMatch.va.js";
export { integer } from "../SelectedAttributeTypes/integer.oa.js";

/* START_OF_SYMBOL_DEFINITION integerMatch */
/**
 * @summary integerMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integerMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerMatch"}
 *   ID           id-mr-integerMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<INTEGER>}
 * @implements {MATCHING_RULE<INTEGER>}
 */
export const integerMatch: MATCHING_RULE<INTEGER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["integerMatch"],
    "&id": id_mr_integerMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION integerMatch */

/* eslint-enable */
