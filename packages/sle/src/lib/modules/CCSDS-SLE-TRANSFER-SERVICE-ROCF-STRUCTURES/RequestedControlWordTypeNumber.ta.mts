/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedControlWordTypeNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedControlWordTypeNumber    ::=    INTEGER
 * {  allControlWords                        (0)
 * ,  clcw                                   (1)
 * ,  notClcw                                (2)
 * }
 * ```
 */
export
type RequestedControlWordTypeNumber = INTEGER;

/**
 * @summary RequestedControlWordTypeNumber_allControlWords
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_allControlWords: RequestedControlWordTypeNumber = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_allControlWords
 * @constant
 * @type {number}
 */
export
const allControlWords: RequestedControlWordTypeNumber = RequestedControlWordTypeNumber_allControlWords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_clcw
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_clcw: RequestedControlWordTypeNumber = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_clcw
 * @constant
 * @type {number}
 */
export
const clcw: RequestedControlWordTypeNumber = RequestedControlWordTypeNumber_clcw; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_notClcw
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_notClcw: RequestedControlWordTypeNumber = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_notClcw
 * @constant
 * @type {number}
 */
export
const notClcw: RequestedControlWordTypeNumber = RequestedControlWordTypeNumber_notClcw; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RequestedControlWordTypeNumber: $.ASN1Decoder<RequestedControlWordTypeNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedControlWordTypeNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedControlWordTypeNumber (el: _Element): RequestedControlWordTypeNumber {
    if (!_cached_decoder_for_RequestedControlWordTypeNumber) { _cached_decoder_for_RequestedControlWordTypeNumber = $._decodeInteger; }
    return _cached_decoder_for_RequestedControlWordTypeNumber(el);
}

let _cached_encoder_for_RequestedControlWordTypeNumber: $.ASN1Encoder<RequestedControlWordTypeNumber> | null = null;

/**
 * @summary Encodes a(n) RequestedControlWordTypeNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedControlWordTypeNumber, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedControlWordTypeNumber (value: RequestedControlWordTypeNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedControlWordTypeNumber) { _cached_encoder_for_RequestedControlWordTypeNumber = $._encodeInteger; }
    return _cached_encoder_for_RequestedControlWordTypeNumber(value, elGetter);
}


/* eslint-enable */
