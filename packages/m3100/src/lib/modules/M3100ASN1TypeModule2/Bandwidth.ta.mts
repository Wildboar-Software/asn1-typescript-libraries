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
    Bandwidth_Item,
    _decode_Bandwidth_Item,
    _encode_Bandwidth_Item,
} from '../M3100ASN1TypeModule2/Bandwidth-Item.ta.mjs';

/**
 * @summary Bandwidth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bandwidth  ::=  SEQUENCE OF SEQUENCE {ingress  INTEGER,
 *                                     egress   INTEGER}
 * ```
 */
export type Bandwidth = Bandwidth_Item[]; // SequenceOfType


let _cached_decoder_for_Bandwidth: $.ASN1Decoder<Bandwidth> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Bandwidth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bandwidth} The decoded data structure.
 */
export function _decode_Bandwidth(el: _Element): Bandwidth {
    if (!_cached_decoder_for_Bandwidth) {
        _cached_decoder_for_Bandwidth = $._decodeSequenceOf<Bandwidth_Item>(
            () => _decode_Bandwidth_Item
        );
    }
    return _cached_decoder_for_Bandwidth(el);
}


let _cached_encoder_for_Bandwidth: $.ASN1Encoder<Bandwidth> | null = null;


/**
 * @summary Encodes a(n) Bandwidth into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bandwidth, encoded as an ASN.1 Element.
 */
export function _encode_Bandwidth(
    value: Bandwidth,
    elGetter: $.ASN1Encoder<Bandwidth>
): _Element {
    if (!_cached_encoder_for_Bandwidth) {
        _cached_encoder_for_Bandwidth = $._encodeSequenceOf<Bandwidth_Item>(
            () => _encode_Bandwidth_Item,
            $.BER
        );
    }
    return _cached_encoder_for_Bandwidth(value, elGetter);
}


/* eslint-enable */
