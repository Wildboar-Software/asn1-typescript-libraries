/* eslint-disable */
import { NumericString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_numericStringMatch } from "../SelectedAttributeTypes/id-mr-numericStringMatch.va.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
/**
 * @summary numericStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericStringMatch MATCHING-RULE ::= {
 *   SYNTAX       NumericString
 *   LDAP-SYNTAX  numericString.&id
 *   LDAP-NAME    {"numericStringMatch"}
 *   ID           id-mr-numericStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<NumericString>}
 * @implements {MATCHING_RULE<NumericString>}
 */
export const numericStringMatch: MATCHING_RULE<NumericString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNumericString,
    },
    encoderFor: {
        "&AssertionType": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["numericStringMatch"],
    "&id": id_mr_numericStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
