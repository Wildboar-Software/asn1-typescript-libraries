/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary integerBitAndMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * integerBitAndMatch MATCHING-RULE ::= {
 *     SYNTAX                  INTEGER
 *     LDAP-SYNTAX             integer.&id
 *     LDAP-NAME               {"integerBitAndMatch"}
 *     ID                      { 1 2 840 113556 1 4 803 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<INTEGER>}
 * @implements {MATCHING_RULE<INTEGER>}
 */
export
const integerBitAndMatch: MATCHING_RULE<INTEGER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "integerBitAndMatch" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 2, 840, 113556, 1, 4, 803,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */

