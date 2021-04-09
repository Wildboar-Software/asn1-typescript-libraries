/* eslint-disable */
import { ASN1Element as _Element, NULL, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ECParameters,
    _decode_ECParameters,
    _encode_ECParameters,
} from "../ANSI-X9-62/ECParameters.ta";
export { CurveNames } from "../ANSI-X9-62/CurveNames.osa";
export { CURVES } from "../ANSI-X9-62/CURVES.oca";
export {
    ECParameters,
    _decode_ECParameters,
    _encode_ECParameters,
} from "../ANSI-X9-62/ECParameters.ta";

/* START_OF_SYMBOL_DEFINITION Parameters */
/**
 * @summary Parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Parameters  ::=  CHOICE {
 *     ecParameters        ECParameters,
 *     namedCurve          CURVES.&id({CurveNames}),
 *     implicitlyCA        NULL
 * }
 * ```
 */
export type Parameters =
    | { ecParameters: ECParameters } /* CHOICE_ALT_ROOT */
    | { namedCurve: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { implicitlyCA: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Parameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Parameters */
let _cached_decoder_for_Parameters: $.ASN1Decoder<Parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Parameters */

/* START_OF_SYMBOL_DEFINITION _decode_Parameters */
/**
 * @summary Decodes an ASN.1 element into a(n) Parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Parameters} The decoded data structure.
 */
export function _decode_Parameters(el: _Element) {
    if (!_cached_decoder_for_Parameters) {
        _cached_decoder_for_Parameters = $._decode_inextensible_choice<Parameters>(
            {
                "UNIVERSAL 16": ["ecParameters", _decode_ECParameters],
                "UNIVERSAL 6": ["namedCurve", $._decodeObjectIdentifier],
                "UNIVERSAL 5": ["implicitlyCA", $._decodeNull],
            }
        );
    }
    return _cached_decoder_for_Parameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Parameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Parameters */
let _cached_encoder_for_Parameters: $.ASN1Encoder<Parameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Parameters */

/* START_OF_SYMBOL_DEFINITION _encode_Parameters */
/**
 * @summary Encodes a(n) Parameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parameters, encoded as an ASN.1 Element.
 */
export function _encode_Parameters(
    value: Parameters,
    elGetter: $.ASN1Encoder<Parameters>
) {
    if (!_cached_encoder_for_Parameters) {
        _cached_encoder_for_Parameters = $._encode_choice<Parameters>(
            {
                ecParameters: _encode_ECParameters,
                namedCurve: $._encodeObjectIdentifier,
                implicitlyCA: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Parameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Parameters */

/* eslint-enable */
