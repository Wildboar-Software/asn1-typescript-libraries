/* eslint-disable */
import { UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_mr_uriMatch } from "../SelectedAttributeTypes/id-mr-uriMatch.va.mjs";
/**
 * @summary uriMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uriMatch MATCHING-RULE ::= {
 *   SYNTAX       UTF8String
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"uriMatch"}
 *   ID           id-mr-uriMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<UTF8String>}
 * @implements {MATCHING_RULE<UTF8String>}
 */
export const uriMatch: MATCHING_RULE<UTF8String> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTF8String,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTF8String,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uriMatch"],
    "&id": id_mr_uriMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
