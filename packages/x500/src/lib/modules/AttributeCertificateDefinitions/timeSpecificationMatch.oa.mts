/* eslint-disable */
import { id_mr_timeSpecMatch } from "../AttributeCertificateDefinitions/id-mr-timeSpecMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta.mjs";
/**
 * @summary timeSpecificationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * timeSpecificationMatch MATCHING-RULE ::= {
 *   SYNTAX  TimeSpecification
 *   ID      id-mr-timeSpecMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<TimeSpecification>}
 * @implements {MATCHING_RULE<TimeSpecification>}
 */
export const timeSpecificationMatch: MATCHING_RULE<TimeSpecification> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TimeSpecification,
    },
    encoderFor: {
        "&AssertionType": _encode_TimeSpecification,
    },
    "&id": id_mr_timeSpecMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
