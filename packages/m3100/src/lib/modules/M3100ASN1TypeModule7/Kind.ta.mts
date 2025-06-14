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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Kind */
/**
 * @summary Kind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Kind  ::=  GraphicString
 * ```
 */
export type Kind = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION Kind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Kind */
let _cached_decoder_for_Kind: $.ASN1Decoder<Kind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Kind */

/* START_OF_SYMBOL_DEFINITION _decode_Kind */
/**
 * @summary Decodes an ASN.1 element into a(n) Kind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Kind} The decoded data structure.
 */
export function _decode_Kind(el: _Element) {
    if (!_cached_decoder_for_Kind) {
        _cached_decoder_for_Kind = $._decodeGraphicString;
    }
    return _cached_decoder_for_Kind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Kind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Kind */
let _cached_encoder_for_Kind: $.ASN1Encoder<Kind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Kind */

/* START_OF_SYMBOL_DEFINITION _encode_Kind */
/**
 * @summary Encodes a(n) Kind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Kind, encoded as an ASN.1 Element.
 */
export function _encode_Kind(value: Kind, elGetter: $.ASN1Encoder<Kind>) {
    if (!_cached_encoder_for_Kind) {
        _cached_encoder_for_Kind = $._encodeGraphicString;
    }
    return _cached_encoder_for_Kind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Kind */

/* eslint-enable */
