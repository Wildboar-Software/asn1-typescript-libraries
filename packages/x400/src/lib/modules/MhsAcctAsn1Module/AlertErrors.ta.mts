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
 * @summary AlertErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlertErrors  ::=  RetrievalError(security-error)
 * ```
 */
export type AlertErrors = RetrievalError; // DefinedType

let _cached_decoder_for_AlertErrors: $.ASN1Decoder<AlertErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlertErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlertErrors} The decoded data structure.
 */
export function _decode_AlertErrors(el: _Element): AlertErrors {
    if (!_cached_decoder_for_AlertErrors) {
        _cached_decoder_for_AlertErrors = _decode_RetrievalError;
    }
    return _cached_decoder_for_AlertErrors(el);
}

let _cached_encoder_for_AlertErrors: $.ASN1Encoder<AlertErrors> | null = null;

/**
 * @summary Encodes a(n) AlertErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertErrors, encoded as an ASN.1 Element.
 */
export function _encode_AlertErrors(
    value: AlertErrors,
    elGetter: $.ASN1Encoder<AlertErrors>
): _Element {
    if (!_cached_encoder_for_AlertErrors) {
        _cached_encoder_for_AlertErrors = _encode_RetrievalError;
    }
    return _cached_encoder_for_AlertErrors(value, elGetter);
}


/* eslint-enable */
