/* eslint-disable */
import {
    NULL,
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
    RegisterResult_non_empty_result,
    _decode_RegisterResult_non_empty_result,
    _encode_RegisterResult_non_empty_result,
} from '../MTSAbstractService/RegisterResult-non-empty-result.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RegisterResult */
/**
 * @summary RegisterResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterResult  ::=  CHOICE {
 *   empty-result      NULL,
 *   non-empty-result
 *     SET {registered-information
 *            [0]  RegisterArgument
 *                   (WITH COMPONENTS {
 *                      ...,
 *                      retrieve-registrations  ABSENT
 *                    }) OPTIONAL,
 *          extensions
 *            [1]  SET OF ExtensionField{{RegisterResultExtensions}} DEFAULT {}
 *   }
 * }
 * ```
 */
export type RegisterResult =
    | { empty_result: NULL } /* CHOICE_ALT_ROOT */
    | {
          non_empty_result: RegisterResult_non_empty_result;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION RegisterResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisterResult */
let _cached_decoder_for_RegisterResult: $.ASN1Decoder<RegisterResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisterResult */

/* START_OF_SYMBOL_DEFINITION _decode_RegisterResult */
/**
 * @summary Decodes an ASN.1 element into a(n) RegisterResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterResult} The decoded data structure.
 */
export function _decode_RegisterResult(el: _Element) {
    if (!_cached_decoder_for_RegisterResult) {
        _cached_decoder_for_RegisterResult = $._decode_inextensible_choice<RegisterResult>(
            {
                'UNIVERSAL 5': ['empty_result', $._decodeNull],
                'UNIVERSAL 17': [
                    'non_empty_result',
                    _decode_RegisterResult_non_empty_result,
                ],
            }
        );
    }
    return _cached_decoder_for_RegisterResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegisterResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisterResult */
let _cached_encoder_for_RegisterResult: $.ASN1Encoder<RegisterResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisterResult */

/* START_OF_SYMBOL_DEFINITION _encode_RegisterResult */
/**
 * @summary Encodes a(n) RegisterResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterResult, encoded as an ASN.1 Element.
 */
export function _encode_RegisterResult(
    value: RegisterResult,
    elGetter: $.ASN1Encoder<RegisterResult>
) {
    if (!_cached_encoder_for_RegisterResult) {
        _cached_encoder_for_RegisterResult = $._encode_choice<RegisterResult>(
            {
                empty_result: $._encodeNull,
                non_empty_result: _encode_RegisterResult_non_empty_result,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RegisterResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegisterResult */

/* eslint-enable */
