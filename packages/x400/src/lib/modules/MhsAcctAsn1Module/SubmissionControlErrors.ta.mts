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
    SubmissionError,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MhsAcctAsn1Module/SubmissionError.ta.mjs';
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

let _cached_decoder_for_SubmissionControlErrors: $.ASN1Decoder<SubmissionControlErrors> | null = null;

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

let _cached_encoder_for_SubmissionControlErrors: $.ASN1Encoder<SubmissionControlErrors> | null = null;

/**
 * @summary Encodes a(n) SubmissionControlErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
