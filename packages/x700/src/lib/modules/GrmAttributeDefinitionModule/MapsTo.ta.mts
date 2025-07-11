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
    MapsToPair,
    _decode_MapsToPair,
    _encode_MapsToPair,
} from '../GrmAttributeDefinitionModule/MapsToPair.ta.mjs';
/**
 * @summary MapsTo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MapsTo  ::=  SET OF MapsToPair
 * ```
 */
export type MapsTo = MapsToPair[]; // SetOfType

let _cached_decoder_for_MapsTo: $.ASN1Decoder<MapsTo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MapsTo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MapsTo} The decoded data structure.
 */
export function _decode_MapsTo(el: _Element): MapsTo {
    if (!_cached_decoder_for_MapsTo) {
        _cached_decoder_for_MapsTo = $._decodeSetOf<MapsToPair>(
            () => _decode_MapsToPair
        );
    }
    return _cached_decoder_for_MapsTo(el);
}

let _cached_encoder_for_MapsTo: $.ASN1Encoder<MapsTo> | null = null;

/**
 * @summary Encodes a(n) MapsTo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MapsTo, encoded as an ASN.1 Element.
 */
export function _encode_MapsTo(value: MapsTo, elGetter: $.ASN1Encoder<MapsTo>): _Element {
    if (!_cached_encoder_for_MapsTo) {
        _cached_encoder_for_MapsTo = $._encodeSetOf<MapsToPair>(
            () => _encode_MapsToPair,
            $.BER
        );
    }
    return _cached_encoder_for_MapsTo(value, elGetter);
}


/* eslint-enable */
