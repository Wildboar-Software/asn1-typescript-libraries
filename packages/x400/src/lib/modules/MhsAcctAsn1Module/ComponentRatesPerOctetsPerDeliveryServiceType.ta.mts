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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ComponentRatesPerOctetsPerDeliveryServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ComponentRatesPerOctetsPerDeliveryServiceType  ::=  SET OF REAL
 * ```
 */
export type ComponentRatesPerOctetsPerDeliveryServiceType = REAL[]; // SetOfType

let _cached_decoder_for_ComponentRatesPerOctetsPerDeliveryServiceType: $.ASN1Decoder<ComponentRatesPerOctetsPerDeliveryServiceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComponentRatesPerOctetsPerDeliveryServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ComponentRatesPerOctetsPerDeliveryServiceType} The decoded data structure.
 */
export function _decode_ComponentRatesPerOctetsPerDeliveryServiceType(
    el: _Element
) {
    if (!_cached_decoder_for_ComponentRatesPerOctetsPerDeliveryServiceType) {
        _cached_decoder_for_ComponentRatesPerOctetsPerDeliveryServiceType = $._decodeSetOf<REAL>(
            () => $._decodeReal
        );
    }
    return _cached_decoder_for_ComponentRatesPerOctetsPerDeliveryServiceType(
        el
    );
}

let _cached_encoder_for_ComponentRatesPerOctetsPerDeliveryServiceType: $.ASN1Encoder<ComponentRatesPerOctetsPerDeliveryServiceType> | null = null;

/**
 * @summary Encodes a(n) ComponentRatesPerOctetsPerDeliveryServiceType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentRatesPerOctetsPerDeliveryServiceType, encoded as an ASN.1 Element.
 */
export function _encode_ComponentRatesPerOctetsPerDeliveryServiceType(
    value: ComponentRatesPerOctetsPerDeliveryServiceType,
    elGetter: $.ASN1Encoder<ComponentRatesPerOctetsPerDeliveryServiceType>
) {
    if (!_cached_encoder_for_ComponentRatesPerOctetsPerDeliveryServiceType) {
        _cached_encoder_for_ComponentRatesPerOctetsPerDeliveryServiceType = $._encodeSetOf<REAL>(
            () => $._encodeReal,
            $.BER
        );
    }
    return _cached_encoder_for_ComponentRatesPerOctetsPerDeliveryServiceType(
        value,
        elGetter
    );
}


/* eslint-enable */
