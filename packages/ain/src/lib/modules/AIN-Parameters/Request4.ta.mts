/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Request4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Request4  ::=  BIT STRING{
 *         activationStatus(0),
 *         forwardingDn(1)
 *     }
 * ```
 */
export
type Request4 = BIT_STRING;

/**
 * @summary Request4_activationStatus
 * @constant
 */
export
const Request4_activationStatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary activationStatus
 * @constant
 */
export
const activationStatus: number = Request4_activationStatus; /* SHORT_NAMED_BIT */

/**
 * @summary Request4_forwardingDn
 * @constant
 */
export
const Request4_forwardingDn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary forwardingDn
 * @constant
 */
export
const forwardingDn: number = Request4_forwardingDn; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Request4: $.ASN1Decoder<Request4> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Request4
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Request4 (el: _Element): Request4 {
    if (!_cached_decoder_for_Request4) { _cached_decoder_for_Request4 = $._decodeBitString; }
    return _cached_decoder_for_Request4(el);
}

let _cached_encoder_for_Request4: $.ASN1Encoder<Request4> | null = null;

/**
 * @summary Encodes a(n) Request4 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request4, encoded as an ASN.1 Element.
 */
export
function _encode_Request4 (value: Request4, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Request4) { _cached_encoder_for_Request4 = $._encodeBitString; }
    return _cached_encoder_for_Request4(value, elGetter);
}


/* eslint-enable */
