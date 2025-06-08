/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-62/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-62/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION ECPKAlgorithm */
/**
 * @summary ECPKAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPKAlgorithm  ::=  AlgorithmIdentifier {{ ECPKAlgorithms}}
 * ```
 */
export type ECPKAlgorithm = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ECPKAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPKAlgorithm */
let _cached_decoder_for_ECPKAlgorithm: $.ASN1Decoder<ECPKAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPKAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_ECPKAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) ECPKAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPKAlgorithm} The decoded data structure.
 */
export function _decode_ECPKAlgorithm(el: _Element) {
    if (!_cached_decoder_for_ECPKAlgorithm) {
        _cached_decoder_for_ECPKAlgorithm = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ECPKAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECPKAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPKAlgorithm */
let _cached_encoder_for_ECPKAlgorithm: $.ASN1Encoder<ECPKAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPKAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_ECPKAlgorithm */
/**
 * @summary Encodes a(n) ECPKAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPKAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_ECPKAlgorithm(
    value: ECPKAlgorithm,
    elGetter: $.ASN1Encoder<ECPKAlgorithm>
) {
    if (!_cached_encoder_for_ECPKAlgorithm) {
        _cached_encoder_for_ECPKAlgorithm = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ECPKAlgorithm(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECPKAlgorithm */

/* eslint-enable */
