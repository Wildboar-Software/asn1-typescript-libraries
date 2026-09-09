/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DigitsGenerated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitsGenerated  ::=  BIT STRING
 * {     digitsDurationList             ( 0),     -- optional parameters
 *     pauseDurationList             ( 1),     -- optional parameters
 *     connectionInfo                 ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type DigitsGenerated = BIT_STRING;

/**
 * @summary DigitsGenerated_digitsDurationList
 * @constant
 */
export
const DigitsGenerated_digitsDurationList: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary digitsDurationList
 * @constant
 */
export
const digitsDurationList: number = DigitsGenerated_digitsDurationList; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsGenerated_pauseDurationList
 * @constant
 */
export
const DigitsGenerated_pauseDurationList: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary pauseDurationList
 * @constant
 */
export
const pauseDurationList: number = DigitsGenerated_pauseDurationList; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsGenerated_connectionInfo
 * @constant
 */
export
const DigitsGenerated_connectionInfo: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 */
export
const connectionInfo: number = DigitsGenerated_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary DigitsGenerated_privateData
 * @constant
 */
export
const DigitsGenerated_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DigitsGenerated_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DigitsGenerated: $.ASN1Decoder<DigitsGenerated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitsGenerated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitsGenerated (el: _Element): DigitsGenerated {
    if (!_cached_decoder_for_DigitsGenerated) { _cached_decoder_for_DigitsGenerated = $._decodeBitString; }
    return _cached_decoder_for_DigitsGenerated(el);
}

let _cached_encoder_for_DigitsGenerated: $.ASN1Encoder<DigitsGenerated> | null = null;

/**
 * @summary Encodes a(n) DigitsGenerated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitsGenerated, encoded as an ASN.1 Element.
 */
export
function _encode_DigitsGenerated (value: DigitsGenerated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitsGenerated) { _cached_encoder_for_DigitsGenerated = $._encodeBitString; }
    return _cached_encoder_for_DigitsGenerated(value, elGetter);
}


/* eslint-enable */
