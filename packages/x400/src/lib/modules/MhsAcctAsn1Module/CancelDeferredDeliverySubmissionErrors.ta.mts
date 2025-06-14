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
/* START_OF_SYMBOL_DEFINITION CancelDeferredDeliverySubmissionErrors */
/**
 * @summary CancelDeferredDeliverySubmissionErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelDeferredDeliverySubmissionErrors  ::=
 *   SubmissionError
 *     (deferred-delivery-cancellation-rejected |
 *      message-submission-identifier-invalid | remote-bind-error)
 * ```
 */
export type CancelDeferredDeliverySubmissionErrors = SubmissionError; // DefinedType
/* END_OF_SYMBOL_DEFINITION CancelDeferredDeliverySubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CancelDeferredDeliverySubmissionErrors */
let _cached_decoder_for_CancelDeferredDeliverySubmissionErrors: $.ASN1Decoder<CancelDeferredDeliverySubmissionErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CancelDeferredDeliverySubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _decode_CancelDeferredDeliverySubmissionErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) CancelDeferredDeliverySubmissionErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CancelDeferredDeliverySubmissionErrors} The decoded data structure.
 */
export function _decode_CancelDeferredDeliverySubmissionErrors(el: _Element) {
    if (!_cached_decoder_for_CancelDeferredDeliverySubmissionErrors) {
        _cached_decoder_for_CancelDeferredDeliverySubmissionErrors = _decode_SubmissionError;
    }
    return _cached_decoder_for_CancelDeferredDeliverySubmissionErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CancelDeferredDeliverySubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CancelDeferredDeliverySubmissionErrors */
let _cached_encoder_for_CancelDeferredDeliverySubmissionErrors: $.ASN1Encoder<CancelDeferredDeliverySubmissionErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CancelDeferredDeliverySubmissionErrors */

/* START_OF_SYMBOL_DEFINITION _encode_CancelDeferredDeliverySubmissionErrors */
/**
 * @summary Encodes a(n) CancelDeferredDeliverySubmissionErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelDeferredDeliverySubmissionErrors, encoded as an ASN.1 Element.
 */
export function _encode_CancelDeferredDeliverySubmissionErrors(
    value: CancelDeferredDeliverySubmissionErrors,
    elGetter: $.ASN1Encoder<CancelDeferredDeliverySubmissionErrors>
) {
    if (!_cached_encoder_for_CancelDeferredDeliverySubmissionErrors) {
        _cached_encoder_for_CancelDeferredDeliverySubmissionErrors = _encode_SubmissionError;
    }
    return _cached_encoder_for_CancelDeferredDeliverySubmissionErrors(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CancelDeferredDeliverySubmissionErrors */

/* eslint-enable */
