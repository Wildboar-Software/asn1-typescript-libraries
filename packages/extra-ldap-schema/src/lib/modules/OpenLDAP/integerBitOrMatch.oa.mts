/* eslint-disable */
import {
    type INTEGER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";

/**
 * @summary integerBitOrMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * integerBitOrMatch MATCHING-RULE ::= {
 *     SYNTAX                  INTEGER
 *     LDAP-SYNTAX             integer.&id
 *     LDAP-NAME               {"integerBitOrMatch"}
 *     ID                      { 1 2 840 113556 1 4 804 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<INTEGER>}
 * @implements {MATCHING_RULE<INTEGER>}
 */
export
const integerBitOrMatch: MATCHING_RULE<INTEGER> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeInteger,
    },
    encoderFor: {
        "&AssertionType": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["integerBitOrMatch"],
    "&id": _OID.fromParts([
        1,
        2,
        840,
        113556,
        1,
        4,
        804,
    ]) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
