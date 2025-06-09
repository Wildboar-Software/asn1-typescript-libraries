/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa.js";
import { id_mr_jidMatch } from "../SelectedAttributeTypes/id-mr-jidMatch.va.js";
import {
    Jid,
    _decode_Jid,
    _encode_Jid,
} from "../SelectedAttributeTypes/Jid.ta.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { dnsString } from "../SelectedAttributeTypes/dnsString.oa.js";
export { id_mr_jidMatch } from "../SelectedAttributeTypes/id-mr-jidMatch.va.js";
export {
    Jid,
    _decode_Jid,
    _encode_Jid,
} from "../SelectedAttributeTypes/Jid.ta.js";

/* START_OF_SYMBOL_DEFINITION jidMatch */
/**
 * @summary jidMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * jidMatch MATCHING-RULE ::= {
 *   SYNTAX       Jid
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"jidMatch"}
 *   ID           id-mr-jidMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<Jid>}
 * @implements {MATCHING_RULE<Jid>}
 */
export const jidMatch: MATCHING_RULE<Jid> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_Jid,
    },
    encoderFor: {
        "&AssertionType": _encode_Jid,
    },
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["jidMatch"],
    "&id": id_mr_jidMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION jidMatch */

/* eslint-enable */
