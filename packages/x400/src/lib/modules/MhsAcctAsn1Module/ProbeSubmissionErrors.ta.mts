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
/* START_OF_SYMBOL_DEFINITION ProbeSubmissionErrors */
/**
 * @summary ProbeSubmissionErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeSubmissionErrors  ::=
 *   SubmissionError
 *     (submission-control-violated | element-of-service-not-subscribed |
 *      originator-invalid | recipient-improperly-specified | inconsistent-request
 *      | security-error | unsupported-critical-function | remote-bind-error)
 * ```
 */
export type ProbeSubmissionErrors = SubmissionError; // DefinedType
/* END_OF_SYMBOL_DEFINITION ProbeSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeSubmissionErrors */
let _cached_decoder_for_ProbeSubmissionErrors: $.ASN1Decoder<ProbeSubmissionErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProbeSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _decode_ProbeSubmissionErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) ProbeSubmissionErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeSubmissionErrors} The decoded data structure.
 */
export function _decode_ProbeSubmissionErrors(el: _Element) {
    if (!_cached_decoder_for_ProbeSubmissionErrors) {
        _cached_decoder_for_ProbeSubmissionErrors = _decode_SubmissionError;
    }
    return _cached_decoder_for_ProbeSubmissionErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProbeSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeSubmissionErrors */
let _cached_encoder_for_ProbeSubmissionErrors: $.ASN1Encoder<ProbeSubmissionErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProbeSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _encode_ProbeSubmissionErrors */
/**
 * @summary Encodes a(n) ProbeSubmissionErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProbeSubmissionErrors, encoded as an ASN.1 Element.
 */
export function _encode_ProbeSubmissionErrors(
    value: ProbeSubmissionErrors,
    elGetter: $.ASN1Encoder<ProbeSubmissionErrors>
) {
    if (!_cached_encoder_for_ProbeSubmissionErrors) {
        _cached_encoder_for_ProbeSubmissionErrors = _encode_SubmissionError;
    }
    return _cached_encoder_for_ProbeSubmissionErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProbeSubmissionErrors */

/* eslint-enable */
