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
/* START_OF_SYMBOL_DEFINITION MessageSubmissionErrors */
/**
 * @summary MessageSubmissionErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionErrors  ::=
 *   SubmissionError
 *     (submission-control-violated | element-of-service-not-subscribed |
 *      originator-invalid | recipient-improperly-specified | inconsistent-request
 *      | security-error | unsupported-critical-function | remote-bind-error)
 * ```
 */
export type MessageSubmissionErrors = SubmissionError; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionErrors */
let _cached_decoder_for_MessageSubmissionErrors: $.ASN1Decoder<MessageSubmissionErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _decode_MessageSubmissionErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionErrors} The decoded data structure.
 */
export function _decode_MessageSubmissionErrors(el: _Element) {
    if (!_cached_decoder_for_MessageSubmissionErrors) {
        _cached_decoder_for_MessageSubmissionErrors = _decode_SubmissionError;
    }
    return _cached_decoder_for_MessageSubmissionErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionErrors */
let _cached_encoder_for_MessageSubmissionErrors: $.ASN1Encoder<MessageSubmissionErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _encode_MessageSubmissionErrors */
/**
 * @summary Encodes a(n) MessageSubmissionErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionErrors, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionErrors(
    value: MessageSubmissionErrors,
    elGetter: $.ASN1Encoder<MessageSubmissionErrors>
) {
    if (!_cached_encoder_for_MessageSubmissionErrors) {
        _cached_encoder_for_MessageSubmissionErrors = _encode_SubmissionError;
    }
    return _cached_encoder_for_MessageSubmissionErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageSubmissionErrors */

/* eslint-enable */
