/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary caseExactIA5SubstringsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseExactIA5SubstringsMatch MATCHING-RULE ::= {
 *     SYNTAX                  IA5String
 *     LDAP-SYNTAX             ia5String.&id
 *     LDAP-NAME               {"caseExactIA5SubstringsMatch"}
 *     ID                      { 1 3 6 1 4 1 4203 1 2 1 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<IA5String>}
 * @implements {MATCHING_RULE<IA5String>}
 */
export
const caseExactIA5SubstringsMatch: MATCHING_RULE<IA5String> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeIA5String,
    },
    encoderFor: {
        "&AssertionType": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "caseExactIA5SubstringsMatch" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 4203, 1, 2, 1,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

