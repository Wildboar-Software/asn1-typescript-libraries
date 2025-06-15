/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_mr_caseExactMatch } from "../SelectedAttributeTypes/id-mr-caseExactMatch.va.mjs";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary caseExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseExactMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseExactMatch"}
 *   ID           id-mr-caseExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UnboundedDirectoryString>}
 * @implements {MATCHING_RULE<UnboundedDirectoryString>}
 */
export const caseExactMatch: MATCHING_RULE<UnboundedDirectoryString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["caseExactMatch"],
    "&id": id_mr_caseExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
