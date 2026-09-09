/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SwFunctionDevicesChanged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwFunctionDevicesChanged  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type SwFunctionDevicesChanged = BIT_STRING;

/**
 * @summary SwFunctionDevicesChanged_privateData
 * @constant
 */
export
const SwFunctionDevicesChanged_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SwFunctionDevicesChanged_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SwFunctionDevicesChanged_privateDataInAck
 * @constant
 */
export
const SwFunctionDevicesChanged_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SwFunctionDevicesChanged_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwFunctionDevicesChanged: $.ASN1Decoder<SwFunctionDevicesChanged> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwFunctionDevicesChanged
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwFunctionDevicesChanged (el: _Element): SwFunctionDevicesChanged {
    if (!_cached_decoder_for_SwFunctionDevicesChanged) { _cached_decoder_for_SwFunctionDevicesChanged = $._decodeBitString; }
    return _cached_decoder_for_SwFunctionDevicesChanged(el);
}

let _cached_encoder_for_SwFunctionDevicesChanged: $.ASN1Encoder<SwFunctionDevicesChanged> | null = null;

/**
 * @summary Encodes a(n) SwFunctionDevicesChanged into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwFunctionDevicesChanged, encoded as an ASN.1 Element.
 */
export
function _encode_SwFunctionDevicesChanged (value: SwFunctionDevicesChanged, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwFunctionDevicesChanged) { _cached_encoder_for_SwFunctionDevicesChanged = $._encodeBitString; }
    return _cached_encoder_for_SwFunctionDevicesChanged(value, elGetter);
}


/* eslint-enable */
