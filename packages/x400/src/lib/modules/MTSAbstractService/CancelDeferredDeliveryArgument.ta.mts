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
    MessageSubmissionIdentifier,
    _decode_MessageSubmissionIdentifier,
    _encode_MessageSubmissionIdentifier,
} from '../MTSAbstractService/MessageSubmissionIdentifier.ta.mjs';
/**
 * @summary CancelDeferredDeliveryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelDeferredDeliveryArgument  ::=  MessageSubmissionIdentifier
 * ```
 */
export type CancelDeferredDeliveryArgument = MessageSubmissionIdentifier; // DefinedType

let _cached_decoder_for_CancelDeferredDeliveryArgument: $.ASN1Decoder<CancelDeferredDeliveryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelDeferredDeliveryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CancelDeferredDeliveryArgument} The decoded data structure.
 */
export function _decode_CancelDeferredDeliveryArgument(el: _Element) {
    if (!_cached_decoder_for_CancelDeferredDeliveryArgument) {
        _cached_decoder_for_CancelDeferredDeliveryArgument = _decode_MessageSubmissionIdentifier;
    }
    return _cached_decoder_for_CancelDeferredDeliveryArgument(el);
}

let _cached_encoder_for_CancelDeferredDeliveryArgument: $.ASN1Encoder<CancelDeferredDeliveryArgument> | null = null;

/**
 * @summary Encodes a(n) CancelDeferredDeliveryArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelDeferredDeliveryArgument, encoded as an ASN.1 Element.
 */
export function _encode_CancelDeferredDeliveryArgument(
    value: CancelDeferredDeliveryArgument,
    elGetter: $.ASN1Encoder<CancelDeferredDeliveryArgument>
) {
    if (!_cached_encoder_for_CancelDeferredDeliveryArgument) {
        _cached_encoder_for_CancelDeferredDeliveryArgument = _encode_MessageSubmissionIdentifier;
    }
    return _cached_encoder_for_CancelDeferredDeliveryArgument(value, elGetter);
}


/* eslint-enable */
