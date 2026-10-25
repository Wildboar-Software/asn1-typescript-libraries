/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CSREvent {
    cSREventMessage = 1,
}

/**
 * @summary CSREvent
 * @description
 * 
 * Event type of a cell-site report. The only defined value marks a CSR event
 * message.
 * 
 * The MF sends an IRI-Report when it could not enrich the original IRI with
 * cell-site supplemental information. If that information was already sent for
 * the intercept and has not changed, the CSP need not send it again.
 * 
 * 3GPP TS 33.108, clause 16.4 and table 16.2.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSREvent  ::=  ENUMERATED
 * {
 *     cSREventMessage                         (1),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSREvent = _enum_for_CSREvent | ENUMERATED;

/**
 * @summary CSREvent_cSREventMessage
 * @description
 * 
 * This IRI-Report is a cell-site report. The MF sends it when the original IRI
 * could not be enriched, and does not repeat unchanged cell-site information.
 * 
 * 3GPP TS 33.108, clause 16.4 and table 16.2.
 * @constant
 * @type {number}
 */
export
const CSREvent_cSREventMessage = _enum_for_CSREvent.cSREventMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSREventMessage
 * @description
 * 
 * Cell-site report (clause 16.4).
 * @constant
 * @type {number}
 */
export
const cSREventMessage = CSREvent_cSREventMessage; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CSREvent: $.ASN1Decoder<CSREvent> = $._decodeEnumerated;
export const _encode_CSREvent: $.ASN1Encoder<CSREvent> = $._encodeEnumerated;


/* eslint-enable */
