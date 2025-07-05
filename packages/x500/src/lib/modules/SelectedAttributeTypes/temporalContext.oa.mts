/* eslint-disable */
import { TRUE } from "@wildboar/asn1";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
import { id_avc_temporal } from "../SelectedAttributeTypes/id-avc-temporal.va.mjs";
import {
    TimeAssertion,
    _decode_TimeAssertion,
    _encode_TimeAssertion,
} from "../SelectedAttributeTypes/TimeAssertion.ta.mjs";
import {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta.mjs";
/**
 * @summary temporalContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * temporalContext CONTEXT ::= {
 *   WITH SYNTAX  TimeSpecification
 *   ASSERTED AS  TimeAssertion
 *   ID           id-avc-temporal }
 * ```
 *
 * @constant
 * @type {CONTEXT<TimeSpecification, TimeAssertion>}
 * @implements {CONTEXT<TimeSpecification, TimeAssertion>}
 */
export const temporalContext: CONTEXT<TimeSpecification, TimeAssertion> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_TimeSpecification,
        "&Assertion": _decode_TimeAssertion,
    },
    encoderFor: {
        "&Type": _encode_TimeSpecification,
        "&Assertion": _encode_TimeAssertion,
    },
    "&id": id_avc_temporal /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": TRUE /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
