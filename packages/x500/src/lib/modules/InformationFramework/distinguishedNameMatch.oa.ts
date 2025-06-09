/* eslint-disable */
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.js";
import { id_mr_distinguishedNameMatch } from "../InformationFramework/id-mr-distinguishedNameMatch.va.js";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
import { dn } from "../SelectedAttributeTypes/dn.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.js";
export { id_mr_distinguishedNameMatch } from "../InformationFramework/id-mr-distinguishedNameMatch.va.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { dn } from "../SelectedAttributeTypes/dn.oa.js";

/* START_OF_SYMBOL_DEFINITION distinguishedNameMatch */
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
/* END_OF_SYMBOL_DEFINITION distinguishedNameMatch */

/* eslint-enable */
