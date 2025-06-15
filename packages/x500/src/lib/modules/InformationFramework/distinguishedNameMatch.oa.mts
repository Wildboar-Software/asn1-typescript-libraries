/* eslint-disable */
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
import { id_mr_distinguishedNameMatch } from "../InformationFramework/id-mr-distinguishedNameMatch.va.mjs";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
/**
 * @summary distinguishedNameMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distinguishedNameMatch MATCHING-RULE ::= {
 *   SYNTAX       DistinguishedName
 *   LDAP-SYNTAX  dn.&id
 *   LDAP-NAME    {"distinguishedNameMatch"}
 *   ID           id-mr-distinguishedNameMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<DistinguishedName>}
 * @implements {MATCHING_RULE<DistinguishedName>}
 */
export const distinguishedNameMatch: MATCHING_RULE<DistinguishedName> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DistinguishedName,
    },
    encoderFor: {
        "&AssertionType": _encode_DistinguishedName,
    },
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["distinguishedNameMatch"],
    "&id": id_mr_distinguishedNameMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
