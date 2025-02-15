/* eslint-disable */
import { INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_integerOrderingMatch } from "../SelectedAttributeTypes/id-mr-integerOrderingMatch.va";
import { integer } from "../SelectedAttributeTypes/integer.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_integerOrderingMatch } from "../SelectedAttributeTypes/id-mr-integerOrderingMatch.va";
export { integer } from "../SelectedAttributeTypes/integer.oa";

/* START_OF_SYMBOL_DEFINITION integerOrderingMatch */
/**
 * @summary integerOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integerOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerOrderingMatch"}
 *   ID           id-mr-integerOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<INTEGER>}
 * @implements {MATCHING_RULE<INTEGER>}
 */
export const integerOrderingMatch: MATCHING_RULE<INTEGER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["integerOrderingMatch"],
    "&id": id_mr_integerOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION integerOrderingMatch */

/* eslint-enable */
