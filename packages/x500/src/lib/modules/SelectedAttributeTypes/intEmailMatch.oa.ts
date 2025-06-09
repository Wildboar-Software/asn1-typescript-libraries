/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa.js";
import { id_mr_intEmailMatch } from "../SelectedAttributeTypes/id-mr-intEmailMatch.va.js";
import {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { dnsString } from "../SelectedAttributeTypes/dnsString.oa.js";
export { id_mr_intEmailMatch } from "../SelectedAttributeTypes/id-mr-intEmailMatch.va.js";
export {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta.js";

/* START_OF_SYMBOL_DEFINITION intEmailMatch */
/**
 * @summary intEmailMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmailMatch MATCHING-RULE ::= {
 *   SYNTAX       IntEmail
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"intEmailMatch"}
 *   ID           id-mr-intEmailMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<IntEmail>}
 * @implements {MATCHING_RULE<IntEmail>}
 */
export const intEmailMatch: MATCHING_RULE<IntEmail> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_IntEmail,
    },
    encoderFor: {
        "&AssertionType": _encode_IntEmail,
    },
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["intEmailMatch"],
    "&id": id_mr_intEmailMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION intEmailMatch */

/* eslint-enable */
