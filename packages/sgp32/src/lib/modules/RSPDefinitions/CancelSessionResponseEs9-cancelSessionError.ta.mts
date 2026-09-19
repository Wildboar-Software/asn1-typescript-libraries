/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CancelSessionResponseEs9_cancelSessionError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponseEs9-cancelSessionError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CancelSessionResponseEs9_cancelSessionError = INTEGER;

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_invalidTransactionId: CancelSessionResponseEs9_cancelSessionError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_invalidTransactionId
 * @constant
 * @type {number}
 */
export
const invalidTransactionId: CancelSessionResponseEs9_cancelSessionError = CancelSessionResponseEs9_cancelSessionError_invalidTransactionId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid: CancelSessionResponseEs9_cancelSessionError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid
 * @constant
 * @type {number}
 */
export
const euiccSignatureInvalid: CancelSessionResponseEs9_cancelSessionError = CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_undefinedError
 * @constant
 * @type {number}
 */
export
const CancelSessionResponseEs9_cancelSessionError_undefinedError: CancelSessionResponseEs9_cancelSessionError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CancelSessionResponseEs9_cancelSessionError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: CancelSessionResponseEs9_cancelSessionError = CancelSessionResponseEs9_cancelSessionError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CancelSessionResponseEs9_cancelSessionError: $.ASN1Decoder<CancelSessionResponseEs9_cancelSessionError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponseEs9_cancelSessionError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponseEs9_cancelSessionError (el: _Element): CancelSessionResponseEs9_cancelSessionError {
    if (!_cached_decoder_for_CancelSessionResponseEs9_cancelSessionError) { _cached_decoder_for_CancelSessionResponseEs9_cancelSessionError = $._decodeInteger; }
    return _cached_decoder_for_CancelSessionResponseEs9_cancelSessionError(el);
}

let _cached_encoder_for_CancelSessionResponseEs9_cancelSessionError: $.ASN1Encoder<CancelSessionResponseEs9_cancelSessionError> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponseEs9_cancelSessionError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponseEs9_cancelSessionError, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponseEs9_cancelSessionError (value: CancelSessionResponseEs9_cancelSessionError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponseEs9_cancelSessionError) { _cached_encoder_for_CancelSessionResponseEs9_cancelSessionError = $._encodeInteger; }
    return _cached_encoder_for_CancelSessionResponseEs9_cancelSessionError(value, elGetter);
}


/* eslint-enable */
