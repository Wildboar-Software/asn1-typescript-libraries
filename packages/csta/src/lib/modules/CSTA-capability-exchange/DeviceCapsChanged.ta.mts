/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DeviceCapsChanged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceCapsChanged  ::=  BIT STRING
 * {     cause                     ( 0),     -- optional parameters
 *     privateData                 ( 1) }
 * ```
 */
export
type DeviceCapsChanged = BIT_STRING;

/**
 * @summary DeviceCapsChanged_cause
 * @constant
 */
export
const DeviceCapsChanged_cause: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = DeviceCapsChanged_cause; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceCapsChanged_privateData
 * @constant
 */
export
const DeviceCapsChanged_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DeviceCapsChanged_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DeviceCapsChanged: $.ASN1Decoder<DeviceCapsChanged> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceCapsChanged
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceCapsChanged (el: _Element): DeviceCapsChanged {
    if (!_cached_decoder_for_DeviceCapsChanged) { _cached_decoder_for_DeviceCapsChanged = $._decodeBitString; }
    return _cached_decoder_for_DeviceCapsChanged(el);
}

let _cached_encoder_for_DeviceCapsChanged: $.ASN1Encoder<DeviceCapsChanged> | null = null;

/**
 * @summary Encodes a(n) DeviceCapsChanged into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceCapsChanged, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceCapsChanged (value: DeviceCapsChanged, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceCapsChanged) { _cached_encoder_for_DeviceCapsChanged = $._encodeBitString; }
    return _cached_encoder_for_DeviceCapsChanged(value, elGetter);
}


/* eslint-enable */
