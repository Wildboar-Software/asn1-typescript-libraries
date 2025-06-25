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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    RetrievalError,
    _decode_RetrievalError,
    _encode_RetrievalError,
} from '../MhsAcctAsn1Module/RetrievalError.ta.mjs';
/**
 * @summary DeleteErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteErrors  ::=
 *   RetrievalError
 *     (delete-error | invalid-parameter-error | range-error | security-error |
 *      sequence-number-error | service-error)
 * ```
 */
export type DeleteErrors = RetrievalError; // DefinedType

let _cached_decoder_for_DeleteErrors: $.ASN1Decoder<DeleteErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteErrors} The decoded data structure.
 */
export function _decode_DeleteErrors(el: _Element): DeleteErrors {
    if (!_cached_decoder_for_DeleteErrors) {
        _cached_decoder_for_DeleteErrors = _decode_RetrievalError;
    }
    return _cached_decoder_for_DeleteErrors(el);
}

let _cached_encoder_for_DeleteErrors: $.ASN1Encoder<DeleteErrors> | null = null;

/**
 * @summary Encodes a(n) DeleteErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteErrors, encoded as an ASN.1 Element.
 */
export function _encode_DeleteErrors(
    value: DeleteErrors,
    elGetter: $.ASN1Encoder<DeleteErrors>
): _Element {
    if (!_cached_encoder_for_DeleteErrors) {
        _cached_encoder_for_DeleteErrors = _encode_RetrievalError;
    }
    return _cached_encoder_for_DeleteErrors(value, elGetter);
}


/* eslint-enable */
