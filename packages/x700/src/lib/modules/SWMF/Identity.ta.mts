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

/* START_OF_SYMBOL_DEFINITION Identity */
/**
 * @summary Identity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identity  ::=  GraphicString
 * ```
 */
export type Identity = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION Identity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Identity */
let _cached_decoder_for_Identity: $.ASN1Decoder<Identity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Identity */

/* START_OF_SYMBOL_DEFINITION _decode_Identity */
/**
 * @summary Decodes an ASN.1 element into a(n) Identity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Identity} The decoded data structure.
 */
export function _decode_Identity(el: _Element) {
    if (!_cached_decoder_for_Identity) {
        _cached_decoder_for_Identity = $._decodeGraphicString;
    }
    return _cached_decoder_for_Identity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Identity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Identity */
let _cached_encoder_for_Identity: $.ASN1Encoder<Identity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Identity */

/* START_OF_SYMBOL_DEFINITION _encode_Identity */
/**
 * @summary Encodes a(n) Identity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identity, encoded as an ASN.1 Element.
 */
export function _encode_Identity(
    value: Identity,
    elGetter: $.ASN1Encoder<Identity>
) {
    if (!_cached_encoder_for_Identity) {
        _cached_encoder_for_Identity = $._encodeGraphicString;
    }
    return _cached_encoder_for_Identity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Identity */

/* eslint-enable */
