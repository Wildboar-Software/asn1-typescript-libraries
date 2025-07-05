/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
import { id_mr_jidMatch } from "../SelectedAttributeTypes/id-mr-jidMatch.va.mjs";
import {
    Jid,
    _decode_Jid,
    _encode_Jid,
} from "../SelectedAttributeTypes/Jid.ta.mjs";
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

/* eslint-enable */
