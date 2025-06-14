/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION ResynchronizeMode */
/**
 * @summary ResynchronizeMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResynchronizeMode  ::=  BOOLEAN
 * ```
 */
export type ResynchronizeMode = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION ResynchronizeMode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResynchronizeMode */
let _cached_decoder_for_ResynchronizeMode: $.ASN1Decoder<ResynchronizeMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResynchronizeMode */

/* START_OF_SYMBOL_DEFINITION _decode_ResynchronizeMode */
/**
 * @summary Decodes an ASN.1 element into a(n) ResynchronizeMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResynchronizeMode} The decoded data structure.
 */
export function _decode_ResynchronizeMode(el: _Element) {
    if (!_cached_decoder_for_ResynchronizeMode) {
        _cached_decoder_for_ResynchronizeMode = $._decodeBoolean;
    }
    return _cached_decoder_for_ResynchronizeMode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResynchronizeMode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResynchronizeMode */
let _cached_encoder_for_ResynchronizeMode: $.ASN1Encoder<ResynchronizeMode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResynchronizeMode */

/* START_OF_SYMBOL_DEFINITION _encode_ResynchronizeMode */
/**
 * @summary Encodes a(n) ResynchronizeMode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResynchronizeMode, encoded as an ASN.1 Element.
 */
export function _encode_ResynchronizeMode(
    value: ResynchronizeMode,
    elGetter: $.ASN1Encoder<ResynchronizeMode>
) {
    if (!_cached_encoder_for_ResynchronizeMode) {
        _cached_encoder_for_ResynchronizeMode = $._encodeBoolean;
    }
    return _cached_encoder_for_ResynchronizeMode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResynchronizeMode */

/* eslint-enable */
