/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetCertsResponse_getCertsError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetCertsResponse-getCertsError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetCertsResponse_getCertsError = INTEGER;

/**
 * @summary GetCertsResponse_getCertsError_invalidCiPKId
 * @constant
 * @type {number}
 */
export
const GetCertsResponse_getCertsError_invalidCiPKId: GetCertsResponse_getCertsError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_invalidCiPKId
 * @constant
 * @type {number}
 */
export
const invalidCiPKId: GetCertsResponse_getCertsError = GetCertsResponse_getCertsError_invalidCiPKId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_undfinedError
 * @constant
 * @type {number}
 */
export
const GetCertsResponse_getCertsError_undfinedError: GetCertsResponse_getCertsError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetCertsResponse_getCertsError_undfinedError
 * @constant
 * @type {number}
 */
export
const undfinedError: GetCertsResponse_getCertsError = GetCertsResponse_getCertsError_undfinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_GetCertsResponse_getCertsError: $.ASN1Decoder<GetCertsResponse_getCertsError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetCertsResponse_getCertsError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetCertsResponse_getCertsError (el: _Element): GetCertsResponse_getCertsError {
    if (!_cached_decoder_for_GetCertsResponse_getCertsError) { _cached_decoder_for_GetCertsResponse_getCertsError = $._decodeInteger; }
    return _cached_decoder_for_GetCertsResponse_getCertsError(el);
}

let _cached_encoder_for_GetCertsResponse_getCertsError: $.ASN1Encoder<GetCertsResponse_getCertsError> | null = null;

/**
 * @summary Encodes a(n) GetCertsResponse_getCertsError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetCertsResponse_getCertsError, encoded as an ASN.1 Element.
 */
export
function _encode_GetCertsResponse_getCertsError (value: GetCertsResponse_getCertsError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetCertsResponse_getCertsError) { _cached_encoder_for_GetCertsResponse_getCertsError = $._encodeInteger; }
    return _cached_encoder_for_GetCertsResponse_getCertsError(value, elGetter);
}


/* eslint-enable */
