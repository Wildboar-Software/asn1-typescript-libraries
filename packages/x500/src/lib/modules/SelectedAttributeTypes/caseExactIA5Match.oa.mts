/* eslint-disable */
import { IA5String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_lmr_caseExactIA5Match } from "../SelectedAttributeTypes/id-lmr-caseExactIA5Match.va.mjs";
/**
 * @summary caseExactIA5Match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * caseExactIA5Match MATCHING-RULE ::= {
 *   SYNTAX       IA5String
 *   LDAP-SYNTAX  ia5String.&id
 *   LDAP-NAME    {"caseExactIA5Match"}
 *   ID           id-lmr-caseExactIA5Match }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<IA5String>}
 * @implements {MATCHING_RULE<IA5String>}
 */
export const caseExactIA5Match: MATCHING_RULE<IA5String> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeIA5String,
    },
    encoderFor: {
        "&AssertionType": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["caseExactIA5Match"],
    "&id": id_lmr_caseExactIA5Match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
