/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ECParameters_version */
/**
 * @summary ECParameters_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECParameters-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ECParameters_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION ECParameters_version */

/* START_OF_SYMBOL_DEFINITION ECParameters_version_ecpVerl */
/**
 * @summary ECParameters_version_ecpVerl
 * @constant
 * @type {number}
 */
export const ECParameters_version_ecpVerl: ECParameters_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ECParameters_version_ecpVerl */

/* START_OF_SYMBOL_DEFINITION ecpVerl */
/**
 * @summary ECParameters_version_ecpVerl
 * @constant
 * @type {number}
 */
export const ecpVerl: ECParameters_version = ECParameters_version_ecpVerl; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ecpVerl */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECParameters_version */
let _cached_decoder_for_ECParameters_version: $.ASN1Decoder<ECParameters_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECParameters_version */

/* START_OF_SYMBOL_DEFINITION _decode_ECParameters_version */
/**
 * @summary Decodes an ASN.1 element into a(n) ECParameters_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECParameters_version} The decoded data structure.
 */
export function _decode_ECParameters_version(el: _Element) {
    if (!_cached_decoder_for_ECParameters_version) {
        _cached_decoder_for_ECParameters_version = $._decodeInteger;
    }
    return _cached_decoder_for_ECParameters_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECParameters_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECParameters_version */
let _cached_encoder_for_ECParameters_version: $.ASN1Encoder<ECParameters_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECParameters_version */

/* START_OF_SYMBOL_DEFINITION _encode_ECParameters_version */
/**
 * @summary Encodes a(n) ECParameters_version into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECParameters_version, encoded as an ASN.1 Element.
 */
export function _encode_ECParameters_version(
    value: ECParameters_version,
    elGetter: $.ASN1Encoder<ECParameters_version>
) {
    if (!_cached_encoder_for_ECParameters_version) {
        _cached_encoder_for_ECParameters_version = $._encodeInteger;
    }
    return _cached_encoder_for_ECParameters_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECParameters_version */

/* eslint-enable */
