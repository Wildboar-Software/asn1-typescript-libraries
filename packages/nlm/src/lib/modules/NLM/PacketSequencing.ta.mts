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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION PacketSequencing */
/**
 * @summary PacketSequencing
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PacketSequencing  ::=  INTEGER
 * ```
 */
export type PacketSequencing = INTEGER;
/* END_OF_SYMBOL_DEFINITION PacketSequencing */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PacketSequencing */
let _cached_decoder_for_PacketSequencing: $.ASN1Decoder<PacketSequencing> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PacketSequencing */

/* START_OF_SYMBOL_DEFINITION _decode_PacketSequencing */
/**
 * @summary Decodes an ASN.1 element into a(n) PacketSequencing
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PacketSequencing} The decoded data structure.
 */
export function _decode_PacketSequencing(el: _Element) {
    if (!_cached_decoder_for_PacketSequencing) {
        _cached_decoder_for_PacketSequencing = $._decodeInteger;
    }
    return _cached_decoder_for_PacketSequencing(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PacketSequencing */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PacketSequencing */
let _cached_encoder_for_PacketSequencing: $.ASN1Encoder<PacketSequencing> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PacketSequencing */

/* START_OF_SYMBOL_DEFINITION _encode_PacketSequencing */
/**
 * @summary Encodes a(n) PacketSequencing into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketSequencing, encoded as an ASN.1 Element.
 */
export function _encode_PacketSequencing(
    value: PacketSequencing,
    elGetter: $.ASN1Encoder<PacketSequencing>
) {
    if (!_cached_encoder_for_PacketSequencing) {
        _cached_encoder_for_PacketSequencing = $._encodeInteger;
    }
    return _cached_encoder_for_PacketSequencing(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PacketSequencing */

/* eslint-enable */
