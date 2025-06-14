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

/* START_OF_SYMBOL_DEFINITION LabelName */
/**
 * @summary LabelName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LabelName  ::=  INTEGER
 * ```
 */
export type LabelName = INTEGER;
/* END_OF_SYMBOL_DEFINITION LabelName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LabelName */
let _cached_decoder_for_LabelName: $.ASN1Decoder<LabelName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LabelName */

/* START_OF_SYMBOL_DEFINITION _decode_LabelName */
/**
 * @summary Decodes an ASN.1 element into a(n) LabelName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LabelName} The decoded data structure.
 */
export function _decode_LabelName(el: _Element) {
    if (!_cached_decoder_for_LabelName) {
        _cached_decoder_for_LabelName = $._decodeInteger;
    }
    return _cached_decoder_for_LabelName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LabelName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LabelName */
let _cached_encoder_for_LabelName: $.ASN1Encoder<LabelName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LabelName */

/* START_OF_SYMBOL_DEFINITION _encode_LabelName */
/**
 * @summary Encodes a(n) LabelName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LabelName, encoded as an ASN.1 Element.
 */
export function _encode_LabelName(
    value: LabelName,
    elGetter: $.ASN1Encoder<LabelName>
) {
    if (!_cached_encoder_for_LabelName) {
        _cached_encoder_for_LabelName = $._encodeInteger;
    }
    return _cached_encoder_for_LabelName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LabelName */

/* eslint-enable */
