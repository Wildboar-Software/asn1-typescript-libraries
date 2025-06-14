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

/* START_OF_SYMBOL_DEFINITION SizeInOctets */
/**
 * @summary SizeInOctets
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SizeInOctets  ::=  INTEGER
 * ```
 */
export type SizeInOctets = INTEGER;
/* END_OF_SYMBOL_DEFINITION SizeInOctets */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SizeInOctets */
let _cached_decoder_for_SizeInOctets: $.ASN1Decoder<SizeInOctets> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SizeInOctets */

/* START_OF_SYMBOL_DEFINITION _decode_SizeInOctets */
/**
 * @summary Decodes an ASN.1 element into a(n) SizeInOctets
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SizeInOctets} The decoded data structure.
 */
export function _decode_SizeInOctets(el: _Element) {
    if (!_cached_decoder_for_SizeInOctets) {
        _cached_decoder_for_SizeInOctets = $._decodeInteger;
    }
    return _cached_decoder_for_SizeInOctets(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SizeInOctets */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SizeInOctets */
let _cached_encoder_for_SizeInOctets: $.ASN1Encoder<SizeInOctets> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SizeInOctets */

/* START_OF_SYMBOL_DEFINITION _encode_SizeInOctets */
/**
 * @summary Encodes a(n) SizeInOctets into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SizeInOctets, encoded as an ASN.1 Element.
 */
export function _encode_SizeInOctets(
    value: SizeInOctets,
    elGetter: $.ASN1Encoder<SizeInOctets>
) {
    if (!_cached_encoder_for_SizeInOctets) {
        _cached_encoder_for_SizeInOctets = $._encodeInteger;
    }
    return _cached_encoder_for_SizeInOctets(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SizeInOctets */

/* eslint-enable */
