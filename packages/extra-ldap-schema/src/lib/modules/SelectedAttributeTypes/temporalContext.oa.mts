/* eslint-disable */
// export { TimeSpecification, _decode_TimeSpecification, _encode_TimeSpecification } from "../SelectedAttributeTypes/TimeSpecification.ta.mjs";
// export { TimeAssertion, _decode_TimeAssertion, _encode_TimeAssertion } from "../SelectedAttributeTypes/TimeAssertion.ta.mjs";
// export { id_avc_temporal } from "../SelectedAttributeTypes/id-avc-temporal.va.mjs";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";


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
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export
const temporalContext: CONTEXT = undefined;

/* eslint-enable */
