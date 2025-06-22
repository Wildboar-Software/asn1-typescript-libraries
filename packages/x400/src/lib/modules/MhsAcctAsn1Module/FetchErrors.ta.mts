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
 * @summary FetchErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchErrors  ::=
 *   RetrievalError(INCLUDES SummarizeErrors | fetch-restriction-error)
 * ```
 */
export type FetchErrors = RetrievalError; // DefinedType

let _cached_decoder_for_FetchErrors: $.ASN1Decoder<FetchErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FetchErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchErrors} The decoded data structure.
 */
export function _decode_FetchErrors(el: _Element) {
    if (!_cached_decoder_for_FetchErrors) {
        _cached_decoder_for_FetchErrors = _decode_RetrievalError;
    }
    return _cached_decoder_for_FetchErrors(el);
}

let _cached_encoder_for_FetchErrors: $.ASN1Encoder<FetchErrors> | null = null;

/**
 * @summary Encodes a(n) FetchErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchErrors, encoded as an ASN.1 Element.
 */
export function _encode_FetchErrors(
    value: FetchErrors,
    elGetter: $.ASN1Encoder<FetchErrors>
) {
    if (!_cached_encoder_for_FetchErrors) {
        _cached_encoder_for_FetchErrors = _encode_RetrievalError;
    }
    return _cached_encoder_for_FetchErrors(value, elGetter);
}


/* eslint-enable */
