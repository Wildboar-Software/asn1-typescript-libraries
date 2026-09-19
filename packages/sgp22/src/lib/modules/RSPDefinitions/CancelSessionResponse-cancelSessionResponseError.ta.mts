/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionResponse_cancelSessionResponseError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponse-cancelSessionResponseError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CancelSessionResponse_cancelSessionResponseError = INTEGER;

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const CancelSessionResponse_cancelSessionResponseError_invalidTransactionId: CancelSessionResponse_cancelSessionResponseError = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: CancelSessionResponse_cancelSessionResponseError = CancelSessionResponse_cancelSessionResponseError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_undefinedError
 * @constant
 * @type {number}
 */
export
const CancelSessionResponse_cancelSessionResponseError_undefinedError: CancelSessionResponse_cancelSessionResponseError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponse_cancelSessionResponseError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: CancelSessionResponse_cancelSessionResponseError = CancelSessionResponse_cancelSessionResponseError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CancelSessionResponse_cancelSessionResponseError: $.ASN1Decoder<CancelSessionResponse_cancelSessionResponseError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponse_cancelSessionResponseError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponse_cancelSessionResponseError (el: _Element): CancelSessionResponse_cancelSessionResponseError {
    if (!_cached_decoder_for_CancelSessionResponse_cancelSessionResponseError) { _cached_decoder_for_CancelSessionResponse_cancelSessionResponseError = $._decodeInteger; }
    return _cached_decoder_for_CancelSessionResponse_cancelSessionResponseError(el);
}

let _cached_encoder_for_CancelSessionResponse_cancelSessionResponseError: $.ASN1Encoder<CancelSessionResponse_cancelSessionResponseError> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponse_cancelSessionResponseError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponse_cancelSessionResponseError, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponse_cancelSessionResponseError (value: CancelSessionResponse_cancelSessionResponseError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponse_cancelSessionResponseError) { _cached_encoder_for_CancelSessionResponse_cancelSessionResponseError = $._encodeInteger; }
    return _cached_encoder_for_CancelSessionResponse_cancelSessionResponseError(value, elGetter);
}


/* eslint-enable */
