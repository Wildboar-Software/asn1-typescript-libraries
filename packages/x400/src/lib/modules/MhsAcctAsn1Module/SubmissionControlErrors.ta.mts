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
    SubmissionError,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MhsAcctAsn1Module/SubmissionError.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SubmissionControlErrors */
/**
 * @summary SubmissionControlErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubmissionControlErrors  ::=  SubmissionError(security-error | remote-bind-error)
 * ```
 */
export type SubmissionControlErrors = SubmissionError; // DefinedType
/* END_OF_SYMBOL_DEFINITION SubmissionControlErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionControlErrors */
let _cached_decoder_for_SubmissionControlErrors: $.ASN1Decoder<SubmissionControlErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubmissionControlErrors */

/* START_OF_SYMBOL_DEFINITION _decode_SubmissionControlErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) SubmissionControlErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubmissionControlErrors} The decoded data structure.
 */
export function _decode_SubmissionControlErrors(el: _Element) {
    if (!_cached_decoder_for_SubmissionControlErrors) {
        _cached_decoder_for_SubmissionControlErrors = _decode_SubmissionError;
    }
    return _cached_decoder_for_SubmissionControlErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubmissionControlErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionControlErrors */
let _cached_encoder_for_SubmissionControlErrors: $.ASN1Encoder<SubmissionControlErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubmissionControlErrors */

/* START_OF_SYMBOL_DEFINITION _encode_SubmissionControlErrors */
/**
 * @summary Encodes a(n) SubmissionControlErrors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubmissionControlErrors, encoded as an ASN.1 Element.
 */
export function _encode_SubmissionControlErrors(
    value: SubmissionControlErrors,
    elGetter: $.ASN1Encoder<SubmissionControlErrors>
) {
    if (!_cached_encoder_for_SubmissionControlErrors) {
        _cached_encoder_for_SubmissionControlErrors = _encode_SubmissionError;
    }
    return _cached_encoder_for_SubmissionControlErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubmissionControlErrors */

/* eslint-enable */
