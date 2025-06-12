/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    CompareOK,
    _decode_CompareOK,
    _encode_CompareOK,
} from '../Pbact-access/CompareOK.ta.mjs';
export {
    CompareOK,
    _decode_CompareOK,
    _encode_CompareOK,
} from '../Pbact-access/CompareOK.ta.mjs';
import {
    AccessdErr,
    _decode_AccessdErr,
    _encode_AccessdErr,
} from '../Pbact-access/AccessdErr.ta.mjs';
export {
    AccessdErr,
    _decode_AccessdErr,
    _encode_AccessdErr,
} from '../Pbact-access/AccessdErr.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CompareResult_result */
/**
 * @summary CompareResult_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareResult-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CompareResult_result =
    | { success: CompareOK } /* CHOICE_ALT_ROOT */
    | { failure: AccessdErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CompareResult_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResult_result */
let _cached_decoder_for_CompareResult_result: $.ASN1Decoder<CompareResult_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResult_result */

/* START_OF_SYMBOL_DEFINITION _decode_CompareResult_result */
/**
 * @summary Decodes an ASN.1 element into a(n) CompareResult_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareResult_result} The decoded data structure.
 */
export function _decode_CompareResult_result(el: _Element) {
    if (!_cached_decoder_for_CompareResult_result) {
        _cached_decoder_for_CompareResult_result = $._decode_extensible_choice<CompareResult_result>(
            {
                'CONTEXT 0': [
                    'success',
                    $._decode_implicit<CompareOK>(() => _decode_CompareOK),
                ],
                'CONTEXT 1': [
                    'failure',
                    $._decode_explicit<AccessdErr>(() => _decode_AccessdErr),
                ],
            }
        );
    }
    return _cached_decoder_for_CompareResult_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompareResult_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResult_result */
let _cached_encoder_for_CompareResult_result: $.ASN1Encoder<CompareResult_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResult_result */

/* START_OF_SYMBOL_DEFINITION _encode_CompareResult_result */
/**
 * @summary Encodes a(n) CompareResult_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareResult_result, encoded as an ASN.1 Element.
 */
export function _encode_CompareResult_result(
    value: CompareResult_result,
    elGetter: $.ASN1Encoder<CompareResult_result>
) {
    if (!_cached_encoder_for_CompareResult_result) {
        _cached_encoder_for_CompareResult_result = $._encode_choice<CompareResult_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CompareOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AccessdErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CompareResult_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompareResult_result */

/* eslint-enable */
