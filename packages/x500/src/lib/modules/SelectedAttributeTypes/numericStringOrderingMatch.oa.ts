/* eslint-disable */
import { NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_numericStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-numericStringOrderingMatch.va.js";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_numericStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-numericStringOrderingMatch.va.js";
export { numericString } from "../SelectedAttributeTypes/numericString.oa.js";

/* START_OF_SYMBOL_DEFINITION numericStringOrderingMatch */
/**
 * @summary numericStringOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericStringOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       NumericString
 *   LDAP-SYNTAX  numericString.&id
 *   LDAP-NAME    {"numericStringOrderingMatch"}
 *   ID           id-mr-numericStringOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<NumericString>}
 * @implements {MATCHING_RULE<NumericString>}
 */
export const numericStringOrderingMatch: MATCHING_RULE<NumericString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNumericString,
    },
    encoderFor: {
        "&AssertionType": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["numericStringOrderingMatch"],
    "&id": id_mr_numericStringOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION numericStringOrderingMatch */

/* eslint-enable */
