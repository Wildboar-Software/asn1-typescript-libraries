/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetRouteingMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetRouteingMode  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2) }
 * ```
 */
export
type SetRouteingMode = BIT_STRING;

/**
 * @summary SetRouteingMode_privateData
 * @constant
 */
export
const SetRouteingMode_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SetRouteingMode_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetRouteingMode_privateDataInAck
 * @constant
 */
export
const SetRouteingMode_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = SetRouteingMode_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetRouteingMode_ackModelMultiStep
 * @constant
 */
export
const SetRouteingMode_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 */
export
const ackModelMultiStep: number = SetRouteingMode_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetRouteingMode: $.ASN1Decoder<SetRouteingMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetRouteingMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetRouteingMode (el: _Element): SetRouteingMode {
    if (!_cached_decoder_for_SetRouteingMode) { _cached_decoder_for_SetRouteingMode = $._decodeBitString; }
    return _cached_decoder_for_SetRouteingMode(el);
}

let _cached_encoder_for_SetRouteingMode: $.ASN1Encoder<SetRouteingMode> | null = null;

/**
 * @summary Encodes a(n) SetRouteingMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetRouteingMode, encoded as an ASN.1 Element.
 */
export
function _encode_SetRouteingMode (value: SetRouteingMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetRouteingMode) { _cached_encoder_for_SetRouteingMode = $._encodeBitString; }
    return _cached_encoder_for_SetRouteingMode(value, elGetter);
}


/* eslint-enable */
