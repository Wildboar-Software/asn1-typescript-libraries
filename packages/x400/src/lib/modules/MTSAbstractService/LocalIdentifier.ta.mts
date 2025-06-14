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

/* START_OF_SYMBOL_DEFINITION LocalIdentifier */
/**
 * @summary LocalIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalIdentifier  ::=  IA5String(SIZE (1..ub-local-id-length))
 * ```
 */
export type LocalIdentifier = IA5String; // IA5String
/* END_OF_SYMBOL_DEFINITION LocalIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalIdentifier */
let _cached_decoder_for_LocalIdentifier: $.ASN1Decoder<LocalIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_LocalIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) LocalIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalIdentifier} The decoded data structure.
 */
export function _decode_LocalIdentifier(el: _Element) {
    if (!_cached_decoder_for_LocalIdentifier) {
        _cached_decoder_for_LocalIdentifier = $._decodeIA5String;
    }
    return _cached_decoder_for_LocalIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocalIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalIdentifier */
let _cached_encoder_for_LocalIdentifier: $.ASN1Encoder<LocalIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_LocalIdentifier */
/**
 * @summary Encodes a(n) LocalIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_LocalIdentifier(
    value: LocalIdentifier,
    elGetter: $.ASN1Encoder<LocalIdentifier>
) {
    if (!_cached_encoder_for_LocalIdentifier) {
        _cached_encoder_for_LocalIdentifier = $._encodeIA5String;
    }
    return _cached_encoder_for_LocalIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocalIdentifier */

/* eslint-enable */
