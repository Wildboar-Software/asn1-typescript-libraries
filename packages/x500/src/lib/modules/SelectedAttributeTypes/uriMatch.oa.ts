/* eslint-disable */
import { UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.js";
import { id_mr_uriMatch } from "../SelectedAttributeTypes/id-mr-uriMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.js";
export { id_mr_uriMatch } from "../SelectedAttributeTypes/id-mr-uriMatch.va.js";

/* START_OF_SYMBOL_DEFINITION uriMatch */
/**
 * @summary uriMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uriMatch MATCHING-RULE ::= {
 *   SYNTAX       UTF8String
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"uriMatch"}
 *   ID           id-mr-uriMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UTF8String>}
 * @implements {MATCHING_RULE<UTF8String>}
 */
export const uriMatch: MATCHING_RULE<UTF8String> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTF8String,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTF8String,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uriMatch"],
    "&id": id_mr_uriMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uriMatch */

/* eslint-enable */
