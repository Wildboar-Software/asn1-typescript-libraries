/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const CSREvent_cSREventMessage: CSREvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSREventMessage
 * @constant
 * @type {number}
 */
export
const cSREventMessage: CSREvent = CSREvent_cSREventMessage; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CSREvent: $.ASN1Decoder<CSREvent> = $._decodeEnumerated;
export const _encode_CSREvent: $.ASN1Encoder<CSREvent> = $._encodeEnumerated;


/* eslint-enable */
