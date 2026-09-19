/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Request2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Request2  ::=  BIT STRING{
 *         activationStatus(0),
 *         delayInterval(1)
 *     }
 * ```
 */
export
type Request2 = BIT_STRING;

/**
 * @summary Request2_activationStatus
 * @constant
 */
export
const Request2_activationStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activationStatus
 * @constant
 */
export
const activationStatus: number = Request2_activationStatus; /* SHORT_NAMED_BIT */

/**
 * @summary Request2_delayInterval
 * @constant
 */
export
const Request2_delayInterval: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary delayInterval
 * @constant
 */
export
const delayInterval: number = Request2_delayInterval; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Request2: $.ASN1Decoder<Request2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Request2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Request2 (el: _Element): Request2 {
    if (!_cached_decoder_for_Request2) { _cached_decoder_for_Request2 = $._decodeBitString; }
    return _cached_decoder_for_Request2(el);
}

let _cached_encoder_for_Request2: $.ASN1Encoder<Request2> | null = null;

/**
 * @summary Encodes a(n) Request2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request2, encoded as an ASN.1 Element.
 */
export
function _encode_Request2 (value: Request2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Request2) { _cached_encoder_for_Request2 = $._encodeBitString; }
    return _cached_encoder_for_Request2(value, elGetter);
}


/* eslint-enable */
