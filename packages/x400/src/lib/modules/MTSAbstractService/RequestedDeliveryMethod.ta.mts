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
    RequestedDeliveryMethod_Item,
    _decode_RequestedDeliveryMethod_Item,
    _encode_RequestedDeliveryMethod_Item,
} from '../MTSAbstractService/RequestedDeliveryMethod-Item.ta.mjs';
/**
 * @summary RequestedDeliveryMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedDeliveryMethod  ::=
 *   SEQUENCE OF INTEGER { -- each different in order of preference,
 *       -- most preferred first
 *       any-delivery-method(0), mhs-delivery(1), physical-delivery(2),
 *       telex-delivery(3), teletex-delivery(4), g3-facsimile-delivery(5),
 *       g4-facsimile-delivery(6), ia5-terminal-delivery(7), videotex-delivery(8),
 *       telephone-delivery(9)}(0..ub-integer-options)
 * ```
 */
export type RequestedDeliveryMethod = RequestedDeliveryMethod_Item[]; // SequenceOfType

let _cached_decoder_for_RequestedDeliveryMethod: $.ASN1Decoder<RequestedDeliveryMethod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedDeliveryMethod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestedDeliveryMethod} The decoded data structure.
 */
export function _decode_RequestedDeliveryMethod(el: _Element): RequestedDeliveryMethod {
    if (!_cached_decoder_for_RequestedDeliveryMethod) {
        _cached_decoder_for_RequestedDeliveryMethod = $._decodeSequenceOf<RequestedDeliveryMethod_Item>(
            () => _decode_RequestedDeliveryMethod_Item
        );
    }
    return _cached_decoder_for_RequestedDeliveryMethod(el);
}

let _cached_encoder_for_RequestedDeliveryMethod: $.ASN1Encoder<RequestedDeliveryMethod> | null = null;

/**
 * @summary Encodes a(n) RequestedDeliveryMethod into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedDeliveryMethod, encoded as an ASN.1 Element.
 */
export function _encode_RequestedDeliveryMethod(
    value: RequestedDeliveryMethod,
    elGetter: $.ASN1Encoder<RequestedDeliveryMethod>
): _Element {
    if (!_cached_encoder_for_RequestedDeliveryMethod) {
        _cached_encoder_for_RequestedDeliveryMethod = $._encodeSequenceOf<RequestedDeliveryMethod_Item>(
            () => _encode_RequestedDeliveryMethod_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RequestedDeliveryMethod(value, elGetter);
}


/* eslint-enable */
