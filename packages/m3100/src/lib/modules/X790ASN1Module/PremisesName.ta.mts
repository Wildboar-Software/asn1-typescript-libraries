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

/* START_OF_SYMBOL_DEFINITION PremisesName */
/**
 * @summary PremisesName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PremisesName  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PremisesName = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PremisesName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PremisesName */
let _cached_decoder_for_PremisesName: $.ASN1Decoder<PremisesName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PremisesName */

/* START_OF_SYMBOL_DEFINITION _decode_PremisesName */
/**
 * @summary Decodes an ASN.1 element into a(n) PremisesName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PremisesName} The decoded data structure.
 */
export function _decode_PremisesName(el: _Element) {
    if (!_cached_decoder_for_PremisesName) {
        _cached_decoder_for_PremisesName = $._decodeGraphicString;
    }
    return _cached_decoder_for_PremisesName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PremisesName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PremisesName */
let _cached_encoder_for_PremisesName: $.ASN1Encoder<PremisesName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PremisesName */

/* START_OF_SYMBOL_DEFINITION _encode_PremisesName */
/**
 * @summary Encodes a(n) PremisesName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PremisesName, encoded as an ASN.1 Element.
 */
export function _encode_PremisesName(
    value: PremisesName,
    elGetter: $.ASN1Encoder<PremisesName>
) {
    if (!_cached_encoder_for_PremisesName) {
        _cached_encoder_for_PremisesName = $._encodeGraphicString;
    }
    return _cached_encoder_for_PremisesName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PremisesName */

/* eslint-enable */
