/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedUpdateMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedUpdateMode      ::=    INTEGER
 * {  continuous                    (0)
 * ,  changeBased                   (1)
 * }
 * ```
 */
export
type RequestedUpdateMode = INTEGER;

/**
 * @summary RequestedUpdateMode_continuous
 * @constant
 * @type {number}
 */
export
const RequestedUpdateMode_continuous: RequestedUpdateMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_continuous
 * @constant
 * @type {number}
 */
export
const continuous: RequestedUpdateMode = RequestedUpdateMode_continuous; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_changeBased
 * @constant
 * @type {number}
 */
export
const RequestedUpdateMode_changeBased: RequestedUpdateMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedUpdateMode_changeBased
 * @constant
 * @type {number}
 */
export
const changeBased: RequestedUpdateMode = RequestedUpdateMode_changeBased; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RequestedUpdateMode: $.ASN1Decoder<RequestedUpdateMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedUpdateMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestedUpdateMode (el: _Element): RequestedUpdateMode {
    if (!_cached_decoder_for_RequestedUpdateMode) { _cached_decoder_for_RequestedUpdateMode = $._decodeInteger; }
    return _cached_decoder_for_RequestedUpdateMode(el);
}

let _cached_encoder_for_RequestedUpdateMode: $.ASN1Encoder<RequestedUpdateMode> | null = null;

/**
 * @summary Encodes a(n) RequestedUpdateMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedUpdateMode, encoded as an ASN.1 Element.
 */
export
function _encode_RequestedUpdateMode (value: RequestedUpdateMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestedUpdateMode) { _cached_encoder_for_RequestedUpdateMode = $._encodeInteger; }
    return _cached_encoder_for_RequestedUpdateMode(value, elGetter);
}


/* eslint-enable */
