/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DiffieHellmanPublicNumber */
/**
 * @summary DiffieHellmanPublicNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DiffieHellmanPublicNumber  ::=  INTEGER
 * ```
 */
export type DiffieHellmanPublicNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION DiffieHellmanPublicNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DiffieHellmanPublicNumber */
let _cached_decoder_for_DiffieHellmanPublicNumber: $.ASN1Decoder<DiffieHellmanPublicNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DiffieHellmanPublicNumber */

/* START_OF_SYMBOL_DEFINITION _decode_DiffieHellmanPublicNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) DiffieHellmanPublicNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DiffieHellmanPublicNumber} The decoded data structure.
 */
export function _decode_DiffieHellmanPublicNumber(el: _Element) {
    if (!_cached_decoder_for_DiffieHellmanPublicNumber) {
        _cached_decoder_for_DiffieHellmanPublicNumber = $._decodeInteger;
    }
    return _cached_decoder_for_DiffieHellmanPublicNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DiffieHellmanPublicNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DiffieHellmanPublicNumber */
let _cached_encoder_for_DiffieHellmanPublicNumber: $.ASN1Encoder<DiffieHellmanPublicNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DiffieHellmanPublicNumber */

/* START_OF_SYMBOL_DEFINITION _encode_DiffieHellmanPublicNumber */
/**
 * @summary Encodes a(n) DiffieHellmanPublicNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiffieHellmanPublicNumber, encoded as an ASN.1 Element.
 */
export function _encode_DiffieHellmanPublicNumber(
    value: DiffieHellmanPublicNumber,
    elGetter: $.ASN1Encoder<DiffieHellmanPublicNumber>
) {
    if (!_cached_encoder_for_DiffieHellmanPublicNumber) {
        _cached_encoder_for_DiffieHellmanPublicNumber = $._encodeInteger;
    }
    return _cached_encoder_for_DiffieHellmanPublicNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DiffieHellmanPublicNumber */

/* eslint-enable */
