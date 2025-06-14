/* eslint-disable */
import {
    GeneralString,
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

/* START_OF_SYMBOL_DEFINITION GeneralTextData */
/**
 * @summary GeneralTextData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralTextData  ::=  GeneralString
 * ```
 */
export type GeneralTextData = GeneralString; // GeneralString
/* END_OF_SYMBOL_DEFINITION GeneralTextData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralTextData */
let _cached_decoder_for_GeneralTextData: $.ASN1Decoder<GeneralTextData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralTextData */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralTextData */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralTextData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralTextData} The decoded data structure.
 */
export function _decode_GeneralTextData(el: _Element) {
    if (!_cached_decoder_for_GeneralTextData) {
        _cached_decoder_for_GeneralTextData = $._decodeGeneralString;
    }
    return _cached_decoder_for_GeneralTextData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralTextData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralTextData */
let _cached_encoder_for_GeneralTextData: $.ASN1Encoder<GeneralTextData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralTextData */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralTextData */
/**
 * @summary Encodes a(n) GeneralTextData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralTextData, encoded as an ASN.1 Element.
 */
export function _encode_GeneralTextData(
    value: GeneralTextData,
    elGetter: $.ASN1Encoder<GeneralTextData>
) {
    if (!_cached_encoder_for_GeneralTextData) {
        _cached_encoder_for_GeneralTextData = $._encodeGeneralString;
    }
    return _cached_encoder_for_GeneralTextData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralTextData */

/* eslint-enable */
