/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";

/**
 * @summary ia5StringApproxMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ia5StringApproxMatch MATCHING-RULE ::= {
 *     SYNTAX                  IA5String
 *     LDAP-SYNTAX             ia5String.&id
 *     LDAP-NAME               {"ia5StringApproxMatch"}
 *     ID                      { 1 3 6 1 4 1 4203 666 4 5 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<IA5String>}
 * @implements {MATCHING_RULE<IA5String>}
 */
export
const ia5StringApproxMatch: MATCHING_RULE<IA5String> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeIA5String,
    },
    encoderFor: {
        "&AssertionType": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ia5StringApproxMatch" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 4203, 666, 4, 5,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
