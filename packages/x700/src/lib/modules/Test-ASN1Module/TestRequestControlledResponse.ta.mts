/* eslint-disable */
import {
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
import {
    IndependentTestResponse,
    _decode_IndependentTestResponse,
    _encode_IndependentTestResponse,
} from '../Test-ASN1Module/IndependentTestResponse.ta.mjs';
import {
    RelatedTestResponse,
    _decode_RelatedTestResponse,
    _encode_RelatedTestResponse,
} from '../Test-ASN1Module/RelatedTestResponse.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TestRequestControlledResponse */
/**
 * @summary TestRequestControlledResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestRequestControlledResponse  ::=  CHOICE {
 *   independentTestResponseList  [0]  SEQUENCE OF IndependentTestResponse,
 *   relatedTestResponse          [1]  RelatedTestResponse
 * }
 * ```
 */
export type TestRequestControlledResponse =
    | {
          independentTestResponseList: IndependentTestResponse[];
      } /* CHOICE_ALT_ROOT */
    | { relatedTestResponse: RelatedTestResponse } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TestRequestControlledResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestRequestControlledResponse */
let _cached_decoder_for_TestRequestControlledResponse: $.ASN1Decoder<TestRequestControlledResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestRequestControlledResponse */

/* START_OF_SYMBOL_DEFINITION _decode_TestRequestControlledResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) TestRequestControlledResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestRequestControlledResponse} The decoded data structure.
 */
export function _decode_TestRequestControlledResponse(el: _Element) {
    if (!_cached_decoder_for_TestRequestControlledResponse) {
        _cached_decoder_for_TestRequestControlledResponse = $._decode_inextensible_choice<TestRequestControlledResponse>(
            {
                'CONTEXT 0': [
                    'independentTestResponseList',
                    $._decode_implicit<IndependentTestResponse[]>(() =>
                        $._decodeSequenceOf<IndependentTestResponse>(
                            () => _decode_IndependentTestResponse
                        )
                    ),
                ],
                'CONTEXT 1': [
                    'relatedTestResponse',
                    $._decode_implicit<RelatedTestResponse>(
                        () => _decode_RelatedTestResponse
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TestRequestControlledResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestRequestControlledResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestRequestControlledResponse */
let _cached_encoder_for_TestRequestControlledResponse: $.ASN1Encoder<TestRequestControlledResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestRequestControlledResponse */

/* START_OF_SYMBOL_DEFINITION _encode_TestRequestControlledResponse */
/**
 * @summary Encodes a(n) TestRequestControlledResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestRequestControlledResponse, encoded as an ASN.1 Element.
 */
export function _encode_TestRequestControlledResponse(
    value: TestRequestControlledResponse,
    elGetter: $.ASN1Encoder<TestRequestControlledResponse>
) {
    if (!_cached_encoder_for_TestRequestControlledResponse) {
        _cached_encoder_for_TestRequestControlledResponse = $._encode_choice<TestRequestControlledResponse>(
            {
                independentTestResponseList: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSequenceOf<IndependentTestResponse>(
                            () => _encode_IndependentTestResponse,
                            $.BER
                        ),
                    $.BER
                ),
                relatedTestResponse: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RelatedTestResponse,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestRequestControlledResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestRequestControlledResponse */

/* eslint-enable */
