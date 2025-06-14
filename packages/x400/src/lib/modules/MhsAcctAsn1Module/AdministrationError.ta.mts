/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION AdministrationError */
/**
 * @summary AdministrationError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrationError  ::=  INTEGER {
 *   register-rejected(1), new-credentials-unacceptable(2),
 *   old-credentials-incorrectly-specified(3), remote-bind-error(10)}
 * ```
 */
export type AdministrationError = INTEGER;
/* END_OF_SYMBOL_DEFINITION AdministrationError */

/* START_OF_SYMBOL_DEFINITION AdministrationError_register_rejected */
/**
 * @summary AdministrationError_register_rejected
 * @constant
 * @type {number}
 */
export const AdministrationError_register_rejected: AdministrationError = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrationError_register_rejected */

/* START_OF_SYMBOL_DEFINITION register_rejected */
/**
 * @summary AdministrationError_register_rejected
 * @constant
 * @type {number}
 */
export const register_rejected: AdministrationError = AdministrationError_register_rejected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION register_rejected */

/* START_OF_SYMBOL_DEFINITION AdministrationError_new_credentials_unacceptable */
/**
 * @summary AdministrationError_new_credentials_unacceptable
 * @constant
 * @type {number}
 */
export const AdministrationError_new_credentials_unacceptable: AdministrationError = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrationError_new_credentials_unacceptable */

/* START_OF_SYMBOL_DEFINITION new_credentials_unacceptable */
/**
 * @summary AdministrationError_new_credentials_unacceptable
 * @constant
 * @type {number}
 */
export const new_credentials_unacceptable: AdministrationError = AdministrationError_new_credentials_unacceptable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION new_credentials_unacceptable */

/* START_OF_SYMBOL_DEFINITION AdministrationError_old_credentials_incorrectly_specified */
/**
 * @summary AdministrationError_old_credentials_incorrectly_specified
 * @constant
 * @type {number}
 */
export const AdministrationError_old_credentials_incorrectly_specified: AdministrationError = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrationError_old_credentials_incorrectly_specified */

/* START_OF_SYMBOL_DEFINITION old_credentials_incorrectly_specified */
/**
 * @summary AdministrationError_old_credentials_incorrectly_specified
 * @constant
 * @type {number}
 */
export const old_credentials_incorrectly_specified: AdministrationError = AdministrationError_old_credentials_incorrectly_specified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION old_credentials_incorrectly_specified */

/* START_OF_SYMBOL_DEFINITION AdministrationError_remote_bind_error */
/**
 * @summary AdministrationError_remote_bind_error
 * @constant
 * @type {number}
 */
export const AdministrationError_remote_bind_error: AdministrationError = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrationError_remote_bind_error */

/* START_OF_SYMBOL_DEFINITION remote_bind_error */
/**
 * @summary AdministrationError_remote_bind_error
 * @constant
 * @type {number}
 */
export const remote_bind_error: AdministrationError = AdministrationError_remote_bind_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION remote_bind_error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrationError */
let _cached_decoder_for_AdministrationError: $.ASN1Decoder<AdministrationError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrationError */

/* START_OF_SYMBOL_DEFINITION _decode_AdministrationError */
/**
 * @summary Decodes an ASN.1 element into a(n) AdministrationError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministrationError} The decoded data structure.
 */
export function _decode_AdministrationError(el: _Element) {
    if (!_cached_decoder_for_AdministrationError) {
        _cached_decoder_for_AdministrationError = $._decodeInteger;
    }
    return _cached_decoder_for_AdministrationError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdministrationError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrationError */
let _cached_encoder_for_AdministrationError: $.ASN1Encoder<AdministrationError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrationError */

/* START_OF_SYMBOL_DEFINITION _encode_AdministrationError */
/**
 * @summary Encodes a(n) AdministrationError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrationError, encoded as an ASN.1 Element.
 */
export function _encode_AdministrationError(
    value: AdministrationError,
    elGetter: $.ASN1Encoder<AdministrationError>
) {
    if (!_cached_encoder_for_AdministrationError) {
        _cached_encoder_for_AdministrationError = $._encodeInteger;
    }
    return _cached_encoder_for_AdministrationError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdministrationError */

/* eslint-enable */
