/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../ANSI-X9-42/AlgorithmIdentifier.ta.mjs";
/* START_OF_SYMBOL_DEFINITION SchemeParameters */
/**
 * @summary SchemeParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeParameters  ::=  AlgorithmIdentifier {{ KeyDerivationAlgorithm }}
 * ```
 */
export type SchemeParameters = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION SchemeParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeParameters */
let _cached_decoder_for_SchemeParameters: $.ASN1Decoder<SchemeParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SchemeParameters */

/* START_OF_SYMBOL_DEFINITION _decode_SchemeParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) SchemeParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchemeParameters} The decoded data structure.
 */
export function _decode_SchemeParameters(el: _Element) {
    if (!_cached_decoder_for_SchemeParameters) {
        _cached_decoder_for_SchemeParameters = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_SchemeParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SchemeParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeParameters */
let _cached_encoder_for_SchemeParameters: $.ASN1Encoder<SchemeParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SchemeParameters */

/* START_OF_SYMBOL_DEFINITION _encode_SchemeParameters */
/**
 * @summary Encodes a(n) SchemeParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeParameters, encoded as an ASN.1 Element.
 */
export function _encode_SchemeParameters(
    value: SchemeParameters,
    elGetter: $.ASN1Encoder<SchemeParameters>
) {
    if (!_cached_encoder_for_SchemeParameters) {
        _cached_encoder_for_SchemeParameters = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_SchemeParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SchemeParameters */

/* eslint-enable */
