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

/* START_OF_SYMBOL_DEFINITION SubprocessIndex */
/**
 * @summary SubprocessIndex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubprocessIndex  ::=  INTEGER (0..65535)
 * ```
 */
export type SubprocessIndex = INTEGER;
/* END_OF_SYMBOL_DEFINITION SubprocessIndex */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubprocessIndex */
let _cached_decoder_for_SubprocessIndex: $.ASN1Decoder<SubprocessIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubprocessIndex */

/* START_OF_SYMBOL_DEFINITION _decode_SubprocessIndex */
/**
 * @summary Decodes an ASN.1 element into a(n) SubprocessIndex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubprocessIndex} The decoded data structure.
 */
export function _decode_SubprocessIndex(el: _Element) {
    if (!_cached_decoder_for_SubprocessIndex) {
        _cached_decoder_for_SubprocessIndex = $._decodeInteger;
    }
    return _cached_decoder_for_SubprocessIndex(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubprocessIndex */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubprocessIndex */
let _cached_encoder_for_SubprocessIndex: $.ASN1Encoder<SubprocessIndex> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubprocessIndex */

/* START_OF_SYMBOL_DEFINITION _encode_SubprocessIndex */
/**
 * @summary Encodes a(n) SubprocessIndex into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubprocessIndex, encoded as an ASN.1 Element.
 */
export function _encode_SubprocessIndex(
    value: SubprocessIndex,
    elGetter: $.ASN1Encoder<SubprocessIndex>
) {
    if (!_cached_encoder_for_SubprocessIndex) {
        _cached_encoder_for_SubprocessIndex = $._encodeInteger;
    }
    return _cached_encoder_for_SubprocessIndex(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubprocessIndex */

/* eslint-enable */
