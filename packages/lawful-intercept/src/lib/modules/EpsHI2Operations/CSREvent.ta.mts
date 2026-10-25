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
 * Event type of a cell-site report. The MF sends that report as an IRI-Report
 * when it could not enrich the original IRI with cell-site supplemental
 * information before delivery (clause 16.4). If the same unchanged information
 * was already sent for the intercept, it need not be sent again. 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSREvent  ::=  ENUMERATED
 * {
 *     cSREventMessage                         (1),
 *     ...
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
 * The record is a cell-site report (table 16.2). The specification defines no
 * other value.
 * 
 * @constant
 * @type {number}
 */
export
const CSREvent_cSREventMessage: CSREvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSREventMessage
 * @description
 * 
 * Cell-site report (clause 16.4).
 * 
 * @constant
 * @type {number}
 */
export
const cSREventMessage: CSREvent = CSREvent_cSREventMessage; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CSREvent: $.ASN1Decoder<CSREvent> = $._decodeEnumerated;
export const _encode_CSREvent: $.ASN1Encoder<CSREvent> = $._encodeEnumerated;


/* eslint-enable */
