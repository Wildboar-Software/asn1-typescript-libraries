/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import {
    CaseIgnoreList,
    _decode_CaseIgnoreList,
    _encode_CaseIgnoreList,
} from "../SelectedAttributeTypes/CaseIgnoreList.ta.mjs";
import { id_mr_caseIgnoreListMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreListMatch.va.mjs";
import { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
/**
 * @summary caseIgnoreListMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseIgnoreListMatch MATCHING-RULE ::= {
 *   SYNTAX       CaseIgnoreList
 *   LDAP-SYNTAX  postalAddr.&id
 *   LDAP-NAME    {"caseIgnoreListMatch"}
 *   ID           id-mr-caseIgnoreListMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CaseIgnoreList>}
 * @implements {MATCHING_RULE<CaseIgnoreList>}
 */
export const caseIgnoreListMatch: MATCHING_RULE<CaseIgnoreList> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_CaseIgnoreList,
    },
    encoderFor: {
        "&AssertionType": _encode_CaseIgnoreList,
    },
    "&ldapSyntax": postalAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["caseIgnoreListMatch"],
    "&id": id_mr_caseIgnoreListMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
