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

/* START_OF_SYMBOL_DEFINITION CreateError */
/**
 * @summary CreateError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateError  ::=  INTEGER
 * ```
 */
export type CreateError = INTEGER;
/* END_OF_SYMBOL_DEFINITION CreateError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateError */
let _cached_decoder_for_CreateError: $.ASN1Decoder<CreateError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateError */

/* START_OF_SYMBOL_DEFINITION _decode_CreateError */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateError} The decoded data structure.
 */
export function _decode_CreateError(el: _Element) {
    if (!_cached_decoder_for_CreateError) {
        _cached_decoder_for_CreateError = $._decodeInteger;
    }
    return _cached_decoder_for_CreateError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateError */
let _cached_encoder_for_CreateError: $.ASN1Encoder<CreateError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateError */

/* START_OF_SYMBOL_DEFINITION _encode_CreateError */
/**
 * @summary Encodes a(n) CreateError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateError, encoded as an ASN.1 Element.
 */
export function _encode_CreateError(
    value: CreateError,
    elGetter: $.ASN1Encoder<CreateError>
) {
    if (!_cached_encoder_for_CreateError) {
        _cached_encoder_for_CreateError = $._encodeInteger;
    }
    return _cached_encoder_for_CreateError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateError */

/* eslint-enable */
