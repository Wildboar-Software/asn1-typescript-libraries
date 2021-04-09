/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ECCAlgorithm,
    _decode_ECCAlgorithm,
    _encode_ECCAlgorithm,
} from "../ANSI-X9-62/ECCAlgorithm.ta";
export {
    ECCAlgorithm,
    _decode_ECCAlgorithm,
    _encode_ECCAlgorithm,
} from "../ANSI-X9-62/ECCAlgorithm.ta";

/* START_OF_SYMBOL_DEFINITION ECCAlgorithms */
/**
 * @summary ECCAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECCAlgorithms  ::=  SEQUENCE OF ECCAlgorithm
 * ```
 */
export type ECCAlgorithms = ECCAlgorithm[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ECCAlgorithms */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECCAlgorithms */
let _cached_decoder_for_ECCAlgorithms: $.ASN1Decoder<ECCAlgorithms> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECCAlgorithms */

/* START_OF_SYMBOL_DEFINITION _decode_ECCAlgorithms */
/**
 * @summary Decodes an ASN.1 element into a(n) ECCAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECCAlgorithms} The decoded data structure.
 */
export function _decode_ECCAlgorithms(el: _Element) {
    if (!_cached_decoder_for_ECCAlgorithms) {
        _cached_decoder_for_ECCAlgorithms = $._decodeSequenceOf<ECCAlgorithm>(
            () => _decode_ECCAlgorithm
        );
    }
    return _cached_decoder_for_ECCAlgorithms(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECCAlgorithms */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECCAlgorithms */
let _cached_encoder_for_ECCAlgorithms: $.ASN1Encoder<ECCAlgorithms> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECCAlgorithms */

/* START_OF_SYMBOL_DEFINITION _encode_ECCAlgorithms */
/**
 * @summary Encodes a(n) ECCAlgorithms into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECCAlgorithms, encoded as an ASN.1 Element.
 */
export function _encode_ECCAlgorithms(
    value: ECCAlgorithms,
    elGetter: $.ASN1Encoder<ECCAlgorithms>
) {
    if (!_cached_encoder_for_ECCAlgorithms) {
        _cached_encoder_for_ECCAlgorithms = $._encodeSequenceOf<ECCAlgorithm>(
            () => _encode_ECCAlgorithm,
            $.BER
        );
    }
    return _cached_encoder_for_ECCAlgorithms(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECCAlgorithms */

/* eslint-enable */
