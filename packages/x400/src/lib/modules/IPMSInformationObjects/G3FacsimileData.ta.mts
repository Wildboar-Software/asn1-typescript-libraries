/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION G3FacsimileData */
/**
 * @summary G3FacsimileData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G3FacsimileData  ::=  SEQUENCE OF BIT STRING
 * ```
 */
export type G3FacsimileData = BIT_STRING[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION G3FacsimileData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_G3FacsimileData */
let _cached_decoder_for_G3FacsimileData: $.ASN1Decoder<G3FacsimileData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_G3FacsimileData */

/* START_OF_SYMBOL_DEFINITION _decode_G3FacsimileData */
/**
 * @summary Decodes an ASN.1 element into a(n) G3FacsimileData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G3FacsimileData} The decoded data structure.
 */
export function _decode_G3FacsimileData(el: _Element) {
    if (!_cached_decoder_for_G3FacsimileData) {
        _cached_decoder_for_G3FacsimileData = $._decodeSequenceOf<BIT_STRING>(
            () => $._decodeBitString
        );
    }
    return _cached_decoder_for_G3FacsimileData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_G3FacsimileData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_G3FacsimileData */
let _cached_encoder_for_G3FacsimileData: $.ASN1Encoder<G3FacsimileData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_G3FacsimileData */

/* START_OF_SYMBOL_DEFINITION _encode_G3FacsimileData */
/**
 * @summary Encodes a(n) G3FacsimileData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G3FacsimileData, encoded as an ASN.1 Element.
 */
export function _encode_G3FacsimileData(
    value: G3FacsimileData,
    elGetter: $.ASN1Encoder<G3FacsimileData>
) {
    if (!_cached_encoder_for_G3FacsimileData) {
        _cached_encoder_for_G3FacsimileData = $._encodeSequenceOf<BIT_STRING>(
            () => $._encodeBitString,
            $.BER
        );
    }
    return _cached_encoder_for_G3FacsimileData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_G3FacsimileData */

/* eslint-enable */
