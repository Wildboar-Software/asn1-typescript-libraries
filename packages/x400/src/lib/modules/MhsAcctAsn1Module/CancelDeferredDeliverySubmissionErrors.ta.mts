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
    type SubmissionError,
    _decode_SubmissionError,
    _encode_SubmissionError,
} from '../MhsAcctAsn1Module/SubmissionError.ta.mjs';
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

/**
 * @summary Decodes an ASN.1 element into a(n) CancelDeferredDeliverySubmissionErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CancelDeferredDeliverySubmissionErrors} The decoded data structure.
 */
export const _decode_CancelDeferredDeliverySubmissionErrors: $.ASN1Decoder<CancelDeferredDeliverySubmissionErrors> = _decode_SubmissionError;

/**
 * @summary Encodes a(n) CancelDeferredDeliverySubmissionErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelDeferredDeliverySubmissionErrors, encoded as an ASN.1 Element.
 */
export const _encode_CancelDeferredDeliverySubmissionErrors: $.ASN1Encoder<CancelDeferredDeliverySubmissionErrors> = _encode_SubmissionError;


/* eslint-enable */
