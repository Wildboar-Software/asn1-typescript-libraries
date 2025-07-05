/* eslint-disable */
import { id_kmr_accessPointMatch } from "../DSAOperationalAttributeTypes/id-kmr-accessPointMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary accessPointMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessPointMatch MATCHING-RULE ::= {
 *   SYNTAX  Name
 *   ID      id-kmr-accessPointMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<Name>}
 * @implements {MATCHING_RULE<Name>}
 */
export const accessPointMatch: MATCHING_RULE<Name> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_Name,
    },
    encoderFor: {
        "&AssertionType": _encode_Name,
    },
    "&id": id_kmr_accessPointMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
