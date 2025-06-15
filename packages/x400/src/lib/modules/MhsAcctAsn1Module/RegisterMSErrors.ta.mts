/* eslint-disable */
import {
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
import {
    RetrievalError,
    _decode_RetrievalError,
    _encode_RetrievalError,
} from '../MhsAcctAsn1Module/RetrievalError.ta.mjs';
/**
 * @summary RegisterMSErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterMSErrors  ::=
 *   RetrievalError
 *     (attribute-error | auto-action-request-error | invalid-parameter-error |
 *      security-error | service-error)
 * ```
 */
export type RegisterMSErrors = RetrievalError; // DefinedType

let _cached_decoder_for_RegisterMSErrors: $.ASN1Decoder<RegisterMSErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegisterMSErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterMSErrors} The decoded data structure.
 */
export function _decode_RegisterMSErrors(el: _Element) {
    if (!_cached_decoder_for_RegisterMSErrors) {
        _cached_decoder_for_RegisterMSErrors = _decode_RetrievalError;
    }
    return _cached_decoder_for_RegisterMSErrors(el);
}

let _cached_encoder_for_RegisterMSErrors: $.ASN1Encoder<RegisterMSErrors> | null = null;

/**
 * @summary Encodes a(n) RegisterMSErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterMSErrors, encoded as an ASN.1 Element.
 */
export function _encode_RegisterMSErrors(
    value: RegisterMSErrors,
    elGetter: $.ASN1Encoder<RegisterMSErrors>
) {
    if (!_cached_encoder_for_RegisterMSErrors) {
        _cached_encoder_for_RegisterMSErrors = _encode_RetrievalError;
    }
    return _cached_encoder_for_RegisterMSErrors(value, elGetter);
}


/* eslint-enable */
