/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MonitorStop
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorStop  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     switchingFunctionSupportsSending     ( 2),     -- misc characteristics
 *     switchingFunctionSupportsReceiving     ( 3) }
 * ```
 */
export
type MonitorStop = BIT_STRING;

/**
 * @summary MonitorStop_privateData
 * @constant
 */
export
const MonitorStop_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = MonitorStop_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStop_privateDataInAck
 * @constant
 */
export
const MonitorStop_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = MonitorStop_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStop_switchingFunctionSupportsSending
 * @constant
 */
export
const MonitorStop_switchingFunctionSupportsSending: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsSending
 * @constant
 */
export
const switchingFunctionSupportsSending: number = MonitorStop_switchingFunctionSupportsSending; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStop_switchingFunctionSupportsReceiving
 * @constant
 */
export
const MonitorStop_switchingFunctionSupportsReceiving: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary switchingFunctionSupportsReceiving
 * @constant
 */
export
const switchingFunctionSupportsReceiving: number = MonitorStop_switchingFunctionSupportsReceiving; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MonitorStop: $.ASN1Decoder<MonitorStop> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorStop
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorStop (el: _Element): MonitorStop {
    if (!_cached_decoder_for_MonitorStop) { _cached_decoder_for_MonitorStop = $._decodeBitString; }
    return _cached_decoder_for_MonitorStop(el);
}

let _cached_encoder_for_MonitorStop: $.ASN1Encoder<MonitorStop> | null = null;

/**
 * @summary Encodes a(n) MonitorStop into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorStop, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorStop (value: MonitorStop, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorStop) { _cached_encoder_for_MonitorStop = $._encodeBitString; }
    return _cached_encoder_for_MonitorStop(value, elGetter);
}


/* eslint-enable */
