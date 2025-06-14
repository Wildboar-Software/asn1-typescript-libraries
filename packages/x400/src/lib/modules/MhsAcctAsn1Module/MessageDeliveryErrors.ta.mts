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
    DeliveryError,
    _decode_DeliveryError,
    _encode_DeliveryError,
} from '../MhsAcctAsn1Module/DeliveryError.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MessageDeliveryErrors */
/**
 * @summary MessageDeliveryErrors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryErrors  ::=
 *   DeliveryError
 *     (delivery-control-violation | security-error |
 *      unsupported-critical-function)
 * ```
 */
export type MessageDeliveryErrors = DeliveryError; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageDeliveryErrors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDeliveryErrors */
let _cached_decoder_for_MessageDeliveryErrors: $.ASN1Decoder<MessageDeliveryErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDeliveryErrors */

/* START_OF_SYMBOL_DEFINITION _decode_MessageDeliveryErrors */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryErrors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryErrors} The decoded data structure.
 */
export function _decode_MessageDeliveryErrors(el: _Element) {
    if (!_cached_decoder_for_MessageDeliveryErrors) {
        _cached_decoder_for_MessageDeliveryErrors = _decode_DeliveryError;
    }
    return _cached_decoder_for_MessageDeliveryErrors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageDeliveryErrors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDeliveryErrors */
let _cached_encoder_for_MessageDeliveryErrors: $.ASN1Encoder<MessageDeliveryErrors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDeliveryErrors */

/* START_OF_SYMBOL_DEFINITION _encode_MessageDeliveryErrors */
/**
 * @summary Encodes a(n) MessageDeliveryErrors into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryErrors, encoded as an ASN.1 Element.
 */
export function _encode_MessageDeliveryErrors(
    value: MessageDeliveryErrors,
    elGetter: $.ASN1Encoder<MessageDeliveryErrors>
) {
    if (!_cached_encoder_for_MessageDeliveryErrors) {
        _cached_encoder_for_MessageDeliveryErrors = _encode_DeliveryError;
    }
    return _cached_encoder_for_MessageDeliveryErrors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageDeliveryErrors */

/* eslint-enable */
