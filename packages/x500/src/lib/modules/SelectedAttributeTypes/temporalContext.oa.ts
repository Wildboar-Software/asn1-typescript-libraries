/* eslint-disable */
import { CONTEXT } from "../InformationFramework/CONTEXT.oca.js";
import { id_avc_temporal } from "../SelectedAttributeTypes/id-avc-temporal.va.js";
import {
    TimeAssertion,
    _decode_TimeAssertion,
    _encode_TimeAssertion,
} from "../SelectedAttributeTypes/TimeAssertion.ta.js";
import {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta.js";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca.js";
export { id_avc_temporal } from "../SelectedAttributeTypes/id-avc-temporal.va.js";
export {
    TimeAssertion,
    _decode_TimeAssertion,
    _encode_TimeAssertion,
} from "../SelectedAttributeTypes/TimeAssertion.ta.js";
export {
    TimeSpecification,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
} from "../SelectedAttributeTypes/TimeSpecification.ta.js";

/* START_OF_SYMBOL_DEFINITION temporalContext */
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
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION temporalContext */

/* eslint-enable */
