/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Suspend
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Suspend  ::=  BIT STRING
 * {     message                 ( 0),     -- optional parameters
 *     resource                ( 3),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type Suspend = BIT_STRING;

/**
 * @summary Suspend_message
 * @constant
 */
export
const Suspend_message: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 */
export
const message: number = Suspend_message; /* SHORT_NAMED_BIT */

/**
 * @summary Suspend_resource
 * @constant
 */
export
const Suspend_resource: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Suspend_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Suspend_privateData
 * @constant
 */
export
const Suspend_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Suspend_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Suspend_privateDataInAck
 * @constant
 */
export
const Suspend_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Suspend_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Suspend: $.ASN1Decoder<Suspend> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Suspend
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Suspend (el: _Element): Suspend {
    if (!_cached_decoder_for_Suspend) { _cached_decoder_for_Suspend = $._decodeBitString; }
    return _cached_decoder_for_Suspend(el);
}

let _cached_encoder_for_Suspend: $.ASN1Encoder<Suspend> | null = null;

/**
 * @summary Encodes a(n) Suspend into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Suspend, encoded as an ASN.1 Element.
 */
export
function _encode_Suspend (value: Suspend, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Suspend) { _cached_encoder_for_Suspend = $._encodeBitString; }
    return _cached_encoder_for_Suspend(value, elGetter);
}


/* eslint-enable */
