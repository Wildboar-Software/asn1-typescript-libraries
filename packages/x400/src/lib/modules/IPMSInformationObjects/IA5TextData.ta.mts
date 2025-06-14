/* eslint-disable */
import {
    IA5String,
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

/* START_OF_SYMBOL_DEFINITION IA5TextData */
/**
 * @summary IA5TextData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IA5TextData  ::=  IA5String
 * ```
 */
export type IA5TextData = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION IA5TextData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IA5TextData */
let _cached_decoder_for_IA5TextData: $.ASN1Decoder<IA5TextData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IA5TextData */

/* START_OF_SYMBOL_DEFINITION _decode_IA5TextData */
/**
 * @summary Decodes an ASN.1 element into a(n) IA5TextData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IA5TextData} The decoded data structure.
 */
export function _decode_IA5TextData(el: _Element) {
    if (!_cached_decoder_for_IA5TextData) {
        _cached_decoder_for_IA5TextData = $._decodeIA5String;
    }
    return _cached_decoder_for_IA5TextData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IA5TextData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IA5TextData */
let _cached_encoder_for_IA5TextData: $.ASN1Encoder<IA5TextData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IA5TextData */

/* START_OF_SYMBOL_DEFINITION _encode_IA5TextData */
/**
 * @summary Encodes a(n) IA5TextData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IA5TextData, encoded as an ASN.1 Element.
 */
export function _encode_IA5TextData(
    value: IA5TextData,
    elGetter: $.ASN1Encoder<IA5TextData>
) {
    if (!_cached_encoder_for_IA5TextData) {
        _cached_encoder_for_IA5TextData = $._encodeIA5String;
    }
    return _cached_encoder_for_IA5TextData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IA5TextData */

/* eslint-enable */
