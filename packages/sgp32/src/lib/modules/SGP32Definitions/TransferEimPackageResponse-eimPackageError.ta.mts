/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransferEimPackageResponse_eimPackageError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferEimPackageResponse-eimPackageError ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TransferEimPackageResponse_eimPackageError = INTEGER;

/**
 * @summary TransferEimPackageResponse_eimPackageError_invalidPackageFormat
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_invalidPackageFormat: TransferEimPackageResponse_eimPackageError = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_invalidPackageFormat
 * @constant
 * @type {number}
 */
export
const invalidPackageFormat: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_invalidPackageFormat; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_unknownPackage
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_unknownPackage: TransferEimPackageResponse_eimPackageError = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_unknownPackage
 * @constant
 * @type {number}
 */
export
const unknownPackage: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_unknownPackage; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const TransferEimPackageResponse_eimPackageError_undefinedError: TransferEimPackageResponse_eimPackageError = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransferEimPackageResponse_eimPackageError_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: TransferEimPackageResponse_eimPackageError = TransferEimPackageResponse_eimPackageError_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_TransferEimPackageResponse_eimPackageError: $.ASN1Decoder<TransferEimPackageResponse_eimPackageError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferEimPackageResponse_eimPackageError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferEimPackageResponse_eimPackageError (el: _Element): TransferEimPackageResponse_eimPackageError {
    if (!_cached_decoder_for_TransferEimPackageResponse_eimPackageError) { _cached_decoder_for_TransferEimPackageResponse_eimPackageError = $._decodeInteger; }
    return _cached_decoder_for_TransferEimPackageResponse_eimPackageError(el);
}

let _cached_encoder_for_TransferEimPackageResponse_eimPackageError: $.ASN1Encoder<TransferEimPackageResponse_eimPackageError> | null = null;

/**
 * @summary Encodes a(n) TransferEimPackageResponse_eimPackageError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferEimPackageResponse_eimPackageError, encoded as an ASN.1 Element.
 */
export
function _encode_TransferEimPackageResponse_eimPackageError (value: TransferEimPackageResponse_eimPackageError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferEimPackageResponse_eimPackageError) { _cached_encoder_for_TransferEimPackageResponse_eimPackageError = $._encodeInteger; }
    return _cached_encoder_for_TransferEimPackageResponse_eimPackageError(value, elGetter);
}


/* eslint-enable */
