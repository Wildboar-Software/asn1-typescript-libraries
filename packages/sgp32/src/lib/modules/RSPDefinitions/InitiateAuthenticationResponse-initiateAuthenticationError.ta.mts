/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAuthenticationResponse-initiateAuthenticationError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type InitiateAuthenticationResponse_initiateAuthenticationError = INTEGER;

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress: InitiateAuthenticationResponse_initiateAuthenticationError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress
 * @constant
 * @type {number}
 */
export
const invalidDpAddress: InitiateAuthenticationResponse_initiateAuthenticationError = InitiateAuthenticationResponse_initiateAuthenticationError_invalidDpAddress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp: InitiateAuthenticationResponse_initiateAuthenticationError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp
 * @constant
 * @type {number}
 */
export
const euiccVersionNotSupportedByDp: InitiateAuthenticationResponse_initiateAuthenticationError = InitiateAuthenticationResponse_initiateAuthenticationError_euiccVersionNotSupportedByDp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported
 * @constant
 * @type {number}
 */
export
const InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported: InitiateAuthenticationResponse_initiateAuthenticationError = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported
 * @constant
 * @type {number}
 */
export
const ciPKIdNotSupported: InitiateAuthenticationResponse_initiateAuthenticationError = InitiateAuthenticationResponse_initiateAuthenticationError_ciPKIdNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_InitiateAuthenticationResponse_initiateAuthenticationError: $.ASN1Decoder<InitiateAuthenticationResponse_initiateAuthenticationError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateAuthenticationResponse_initiateAuthenticationError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateAuthenticationResponse_initiateAuthenticationError (el: _Element): InitiateAuthenticationResponse_initiateAuthenticationError {
    if (!_cached_decoder_for_InitiateAuthenticationResponse_initiateAuthenticationError) { _cached_decoder_for_InitiateAuthenticationResponse_initiateAuthenticationError = $._decodeInteger; }
    return _cached_decoder_for_InitiateAuthenticationResponse_initiateAuthenticationError(el);
}

let _cached_encoder_for_InitiateAuthenticationResponse_initiateAuthenticationError: $.ASN1Encoder<InitiateAuthenticationResponse_initiateAuthenticationError> | null = null;

/**
 * @summary Encodes a(n) InitiateAuthenticationResponse_initiateAuthenticationError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateAuthenticationResponse_initiateAuthenticationError, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateAuthenticationResponse_initiateAuthenticationError (value: InitiateAuthenticationResponse_initiateAuthenticationError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateAuthenticationResponse_initiateAuthenticationError) { _cached_encoder_for_InitiateAuthenticationResponse_initiateAuthenticationError = $._encodeInteger; }
    return _cached_encoder_for_InitiateAuthenticationResponse_initiateAuthenticationError(value, elGetter);
}


/* eslint-enable */
