/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION VideoOptions */
/**
 * @summary VideoOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideoOptions  ::=  OBJECT IDENTIFIER
 * ```
 */
export type VideoOptions = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION VideoOptions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VideoOptions */
let _cached_decoder_for_VideoOptions: $.ASN1Decoder<VideoOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VideoOptions */

/* START_OF_SYMBOL_DEFINITION _decode_VideoOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) VideoOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VideoOptions} The decoded data structure.
 */
export function _decode_VideoOptions(el: _Element) {
    if (!_cached_decoder_for_VideoOptions) {
        _cached_decoder_for_VideoOptions = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_VideoOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VideoOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VideoOptions */
let _cached_encoder_for_VideoOptions: $.ASN1Encoder<VideoOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VideoOptions */

/* START_OF_SYMBOL_DEFINITION _encode_VideoOptions */
/**
 * @summary Encodes a(n) VideoOptions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VideoOptions, encoded as an ASN.1 Element.
 */
export function _encode_VideoOptions(
    value: VideoOptions,
    elGetter: $.ASN1Encoder<VideoOptions>
) {
    if (!_cached_encoder_for_VideoOptions) {
        _cached_encoder_for_VideoOptions = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_VideoOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VideoOptions */

/* eslint-enable */
