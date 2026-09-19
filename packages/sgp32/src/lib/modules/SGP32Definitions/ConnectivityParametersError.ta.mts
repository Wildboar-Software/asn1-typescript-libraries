/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectivityParametersError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectivityParametersError  ::=  INTEGER {
 *     parametersNotAvailable(1),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ConnectivityParametersError = INTEGER;

/**
 * @summary ConnectivityParametersError_parametersNotAvailable
 * @constant
 * @type {number}
 */
export
const ConnectivityParametersError_parametersNotAvailable: ConnectivityParametersError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_parametersNotAvailable
 * @constant
 * @type {number}
 */
export
const parametersNotAvailable: ConnectivityParametersError = ConnectivityParametersError_parametersNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_undefinedError
 * @constant
 * @type {number}
 */
export
const ConnectivityParametersError_undefinedError: ConnectivityParametersError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectivityParametersError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ConnectivityParametersError = ConnectivityParametersError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ConnectivityParametersError: $.ASN1Decoder<ConnectivityParametersError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityParametersError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectivityParametersError (el: _Element): ConnectivityParametersError {
    if (!_cached_decoder_for_ConnectivityParametersError) { _cached_decoder_for_ConnectivityParametersError = $._decodeInteger; }
    return _cached_decoder_for_ConnectivityParametersError(el);
}

let _cached_encoder_for_ConnectivityParametersError: $.ASN1Encoder<ConnectivityParametersError> | null = null;

/**
 * @summary Encodes a(n) ConnectivityParametersError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityParametersError, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectivityParametersError (value: ConnectivityParametersError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectivityParametersError) { _cached_encoder_for_ConnectivityParametersError = $._encodeInteger; }
    return _cached_encoder_for_ConnectivityParametersError(value, elGetter);
}


/* eslint-enable */
