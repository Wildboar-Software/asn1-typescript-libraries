/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary NeAliases
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NeAliases  ::=  SET OF GraphicString
 * ```
 */
export type NeAliases = GraphicString[]; // SetOfType


let _cached_decoder_for_NeAliases: $.ASN1Decoder<NeAliases> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NeAliases
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NeAliases} The decoded data structure.
 */
export function _decode_NeAliases(el: _Element) {
    if (!_cached_decoder_for_NeAliases) {
        _cached_decoder_for_NeAliases = $._decodeSetOf<GraphicString>(
            () => $._decodeGraphicString
        );
    }
    return _cached_decoder_for_NeAliases(el);
}


let _cached_encoder_for_NeAliases: $.ASN1Encoder<NeAliases> | null = null;


/**
 * @summary Encodes a(n) NeAliases into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NeAliases, encoded as an ASN.1 Element.
 */
export function _encode_NeAliases(
    value: NeAliases,
    elGetter: $.ASN1Encoder<NeAliases>
) {
    if (!_cached_encoder_for_NeAliases) {
        _cached_encoder_for_NeAliases = $._encodeSetOf<GraphicString>(
            () => $._encodeGraphicString,
            $.BER
        );
    }
    return _cached_encoder_for_NeAliases(value, elGetter);
}


/* eslint-enable */
