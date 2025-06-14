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
/* START_OF_SYMBOL_DEFINITION AlertErrors */
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
/* END_OF_SYMBOL_DEFINITION AlertErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlertErrors */
let _cached_decoder_for_AlertErrors: $.ASN1Decoder<AlertErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlertErrors */

/* START_OF_SYMBOL_DEFINITION _decode_AlertErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) AlertErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlertErrors} The decoded data structure.
 */
export function _decode_AlertErrors(el: _Element) {
    if (!_cached_decoder_for_AlertErrors) {
        _cached_decoder_for_AlertErrors = _decode_RetrievalError;
    }
    return _cached_decoder_for_AlertErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlertErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlertErrors */
let _cached_encoder_for_AlertErrors: $.ASN1Encoder<AlertErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlertErrors */

/* START_OF_SYMBOL_DEFINITION _encode_AlertErrors */
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
) {
    if (!_cached_encoder_for_AlertErrors) {
        _cached_encoder_for_AlertErrors = _encode_RetrievalError;
    }
    return _cached_encoder_for_AlertErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlertErrors */

/* eslint-enable */
