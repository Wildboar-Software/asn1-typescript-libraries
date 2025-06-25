/* eslint-disable */
import {
    INTEGER,
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

/**
 * @summary NumberOfMessagesPerDeliveryServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberOfMessagesPerDeliveryServiceType  ::=  SET OF INTEGER
 * ```
 */
export type NumberOfMessagesPerDeliveryServiceType = INTEGER[]; // SetOfType

let _cached_decoder_for_NumberOfMessagesPerDeliveryServiceType: $.ASN1Decoder<NumberOfMessagesPerDeliveryServiceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfMessagesPerDeliveryServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberOfMessagesPerDeliveryServiceType} The decoded data structure.
 */
export function _decode_NumberOfMessagesPerDeliveryServiceType(el: _Element): NumberOfMessagesPerDeliveryServiceType {
    if (!_cached_decoder_for_NumberOfMessagesPerDeliveryServiceType) {
        _cached_decoder_for_NumberOfMessagesPerDeliveryServiceType = $._decodeSetOf<INTEGER>(
            () => $._decodeInteger
        );
    }
    return _cached_decoder_for_NumberOfMessagesPerDeliveryServiceType(el);
}

let _cached_encoder_for_NumberOfMessagesPerDeliveryServiceType: $.ASN1Encoder<NumberOfMessagesPerDeliveryServiceType> | null = null;

/**
 * @summary Encodes a(n) NumberOfMessagesPerDeliveryServiceType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfMessagesPerDeliveryServiceType, encoded as an ASN.1 Element.
 */
export function _encode_NumberOfMessagesPerDeliveryServiceType(
    value: NumberOfMessagesPerDeliveryServiceType,
    elGetter: $.ASN1Encoder<NumberOfMessagesPerDeliveryServiceType>
): _Element {
    if (!_cached_encoder_for_NumberOfMessagesPerDeliveryServiceType) {
        _cached_encoder_for_NumberOfMessagesPerDeliveryServiceType = $._encodeSetOf<INTEGER>(
            () => $._encodeInteger,
            $.BER
        );
    }
    return _cached_encoder_for_NumberOfMessagesPerDeliveryServiceType(
        value,
        elGetter
    );
}


/* eslint-enable */
