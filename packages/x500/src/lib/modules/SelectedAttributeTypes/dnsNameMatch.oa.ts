/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { dnsString } from "../SelectedAttributeTypes/dnsString.oa.js";
import {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../SelectedAttributeTypes/DomainName.ta.js";
import { id_mr_dnsNameMatch } from "../SelectedAttributeTypes/id-mr-dnsNameMatch.va.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { dnsString } from "../SelectedAttributeTypes/dnsString.oa.js";
export {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../SelectedAttributeTypes/DomainName.ta.js";
export { id_mr_dnsNameMatch } from "../SelectedAttributeTypes/id-mr-dnsNameMatch.va.js";

/* START_OF_SYMBOL_DEFINITION dnsNameMatch */
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
/* END_OF_SYMBOL_DEFINITION dnsNameMatch */

/* eslint-enable */
