/* eslint-disable */
import {
    REAL,
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

/**
 * @summary AccessRatePerDeliveryServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessRatePerDeliveryServiceType  ::=  SET OF REAL
 * ```
 */
export type AccessRatePerDeliveryServiceType = REAL[]; // SetOfType

let _cached_decoder_for_AccessRatePerDeliveryServiceType: $.ASN1Decoder<AccessRatePerDeliveryServiceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessRatePerDeliveryServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessRatePerDeliveryServiceType} The decoded data structure.
 */
export function _decode_AccessRatePerDeliveryServiceType(el: _Element) {
    if (!_cached_decoder_for_AccessRatePerDeliveryServiceType) {
        _cached_decoder_for_AccessRatePerDeliveryServiceType = $._decodeSetOf<REAL>(
            () => $._decodeReal
        );
    }
    return _cached_decoder_for_AccessRatePerDeliveryServiceType(el);
}

let _cached_encoder_for_AccessRatePerDeliveryServiceType: $.ASN1Encoder<AccessRatePerDeliveryServiceType> | null = null;

/**
 * @summary Encodes a(n) AccessRatePerDeliveryServiceType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessRatePerDeliveryServiceType, encoded as an ASN.1 Element.
 */
export function _encode_AccessRatePerDeliveryServiceType(
    value: AccessRatePerDeliveryServiceType,
    elGetter: $.ASN1Encoder<AccessRatePerDeliveryServiceType>
) {
    if (!_cached_encoder_for_AccessRatePerDeliveryServiceType) {
        _cached_encoder_for_AccessRatePerDeliveryServiceType = $._encodeSetOf<REAL>(
            () => $._encodeReal,
            $.BER
        );
    }
    return _cached_encoder_for_AccessRatePerDeliveryServiceType(
        value,
        elGetter
    );
}


/* eslint-enable */
