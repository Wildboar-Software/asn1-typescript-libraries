/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
import {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../SelectedAttributeTypes/DomainName.ta.mjs";
import { id_mr_dnsNameMatch } from "../SelectedAttributeTypes/id-mr-dnsNameMatch.va.mjs";
/**
 * @summary dnsNameMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dnsNameMatch MATCHING-RULE ::= {
 *   SYNTAX       DomainName
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"dnsNameMatch"}
 *   ID           id-mr-dnsNameMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<DomainName>}
 * @implements {MATCHING_RULE<DomainName>}
 */
export const dnsNameMatch: MATCHING_RULE<DomainName> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DomainName,
    },
    encoderFor: {
        "&AssertionType": _encode_DomainName,
    },
    "&ldapSyntax": dnsString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dnsNameMatch"],
    "&id": id_mr_dnsNameMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
