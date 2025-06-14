/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION HMAC */
/**
 * @summary HMAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HMAC  ::=  OCTET STRING
 * ```
 */
export type HMAC = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION HMAC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HMAC */
let _cached_decoder_for_HMAC: $.ASN1Decoder<HMAC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HMAC */

/* START_OF_SYMBOL_DEFINITION _decode_HMAC */
/**
 * @summary Decodes an ASN.1 element into a(n) HMAC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HMAC} The decoded data structure.
 */
export function _decode_HMAC(el: _Element) {
    if (!_cached_decoder_for_HMAC) {
        _cached_decoder_for_HMAC = $._decodeOctetString;
    }
    return _cached_decoder_for_HMAC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HMAC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HMAC */
let _cached_encoder_for_HMAC: $.ASN1Encoder<HMAC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HMAC */

/* START_OF_SYMBOL_DEFINITION _encode_HMAC */
/**
 * @summary Encodes a(n) HMAC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HMAC, encoded as an ASN.1 Element.
 */
export function _encode_HMAC(value: HMAC, elGetter: $.ASN1Encoder<HMAC>) {
    if (!_cached_encoder_for_HMAC) {
        _cached_encoder_for_HMAC = $._encodeOctetString;
    }
    return _cached_encoder_for_HMAC(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HMAC */

/* eslint-enable */
