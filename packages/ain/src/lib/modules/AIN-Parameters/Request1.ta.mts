/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Request1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Request1  ::=  BIT STRING{
 *         activationStatus(0)
 *     }
 * ```
 */
export
type Request1 = BIT_STRING;

/**
 * @summary Request1_activationStatus
 * @constant
 */
export
const Request1_activationStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activationStatus
 * @constant
 */
export
const activationStatus: number = Request1_activationStatus; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Request1: $.ASN1Decoder<Request1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Request1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Request1 (el: _Element): Request1 {
    if (!_cached_decoder_for_Request1) { _cached_decoder_for_Request1 = $._decodeBitString; }
    return _cached_decoder_for_Request1(el);
}

let _cached_encoder_for_Request1: $.ASN1Encoder<Request1> | null = null;

/**
 * @summary Encodes a(n) Request1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request1, encoded as an ASN.1 Element.
 */
export
function _encode_Request1 (value: Request1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Request1) { _cached_encoder_for_Request1 = $._encodeBitString; }
    return _cached_encoder_for_Request1(value, elGetter);
}


/* eslint-enable */
