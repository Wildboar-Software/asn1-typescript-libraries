/* eslint-disable */
import { OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { id_mr_octetStringMatch } from "../SelectedAttributeTypes/id-mr-octetStringMatch.va.js";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_mr_octetStringMatch } from "../SelectedAttributeTypes/id-mr-octetStringMatch.va.js";
export { octetString } from "../SelectedAttributeTypes/octetString.oa.js";

/* START_OF_SYMBOL_DEFINITION octetStringMatch */
/**
 * @summary octetStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetStringMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   LDAP-SYNTAX  octetString.&id
 *   LDAP-NAME    {"octetStringMatch"}
 *   ID           id-mr-octetStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<OCTET_STRING>}
 * @implements {MATCHING_RULE<OCTET_STRING>}
 */
export const octetStringMatch: MATCHING_RULE<OCTET_STRING> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeOctetString,
    },
    encoderFor: {
        "&AssertionType": $._encodeOctetString,
    },
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["octetStringMatch"],
    "&id": id_mr_octetStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION octetStringMatch */

/* eslint-enable */
