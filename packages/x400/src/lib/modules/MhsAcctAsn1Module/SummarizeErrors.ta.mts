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
import * as $ from '@wildboar/asn1/functional';
import {
    RetrievalError,
    _decode_RetrievalError,
    _encode_RetrievalError,
} from '../MhsAcctAsn1Module/RetrievalError.ta.mjs';
/**
 * @summary SummarizeErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SummarizeErrors  ::=
 *   RetrievalError
 *     (attribute-error | invalid-parameter-error | range-error | security-error |
 *      sequence-number-error | service-error)
 * ```
 */
export type SummarizeErrors = RetrievalError; // DefinedType

let _cached_decoder_for_SummarizeErrors: $.ASN1Decoder<SummarizeErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SummarizeErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SummarizeErrors} The decoded data structure.
 */
export function _decode_SummarizeErrors(el: _Element) {
    if (!_cached_decoder_for_SummarizeErrors) {
        _cached_decoder_for_SummarizeErrors = _decode_RetrievalError;
    }
    return _cached_decoder_for_SummarizeErrors(el);
}

let _cached_encoder_for_SummarizeErrors: $.ASN1Encoder<SummarizeErrors> | null = null;

/**
 * @summary Encodes a(n) SummarizeErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SummarizeErrors, encoded as an ASN.1 Element.
 */
export function _encode_SummarizeErrors(
    value: SummarizeErrors,
    elGetter: $.ASN1Encoder<SummarizeErrors>
) {
    if (!_cached_encoder_for_SummarizeErrors) {
        _cached_encoder_for_SummarizeErrors = _encode_RetrievalError;
    }
    return _cached_encoder_for_SummarizeErrors(value, elGetter);
}


/* eslint-enable */
