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

/* START_OF_SYMBOL_DEFINITION DurationInSeconds */
/**
 * @summary DurationInSeconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DurationInSeconds  ::=  INTEGER
 * ```
 */
export type DurationInSeconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION DurationInSeconds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DurationInSeconds */
let _cached_decoder_for_DurationInSeconds: $.ASN1Decoder<DurationInSeconds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DurationInSeconds */

/* START_OF_SYMBOL_DEFINITION _decode_DurationInSeconds */
/**
 * @summary Decodes an ASN.1 element into a(n) DurationInSeconds
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DurationInSeconds} The decoded data structure.
 */
export function _decode_DurationInSeconds(el: _Element) {
    if (!_cached_decoder_for_DurationInSeconds) {
        _cached_decoder_for_DurationInSeconds = $._decodeInteger;
    }
    return _cached_decoder_for_DurationInSeconds(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DurationInSeconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DurationInSeconds */
let _cached_encoder_for_DurationInSeconds: $.ASN1Encoder<DurationInSeconds> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DurationInSeconds */

/* START_OF_SYMBOL_DEFINITION _encode_DurationInSeconds */
/**
 * @summary Encodes a(n) DurationInSeconds into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DurationInSeconds, encoded as an ASN.1 Element.
 */
export function _encode_DurationInSeconds(
    value: DurationInSeconds,
    elGetter: $.ASN1Encoder<DurationInSeconds>
) {
    if (!_cached_encoder_for_DurationInSeconds) {
        _cached_encoder_for_DurationInSeconds = $._encodeInteger;
    }
    return _cached_encoder_for_DurationInSeconds(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DurationInSeconds */

/* eslint-enable */
