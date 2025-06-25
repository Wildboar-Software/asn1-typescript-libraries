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
    SubmissionError,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MhsAcctAsn1Module/SubmissionError.ta.mjs';
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

let _cached_decoder_for_ProbeSubmissionErrors: $.ASN1Decoder<ProbeSubmissionErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProbeSubmissionErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProbeSubmissionErrors} The decoded data structure.
 */
export function _decode_ProbeSubmissionErrors(el: _Element): ProbeSubmissionErrors {
    if (!_cached_decoder_for_ProbeSubmissionErrors) {
        _cached_decoder_for_ProbeSubmissionErrors = _decode_SubmissionError;
    }
    return _cached_decoder_for_ProbeSubmissionErrors(el);
}

let _cached_encoder_for_ProbeSubmissionErrors: $.ASN1Encoder<ProbeSubmissionErrors> | null = null;

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
): _Element {
    if (!_cached_encoder_for_ProbeSubmissionErrors) {
        _cached_encoder_for_ProbeSubmissionErrors = _encode_SubmissionError;
    }
    return _cached_encoder_for_ProbeSubmissionErrors(value, elGetter);
}


/* eslint-enable */
