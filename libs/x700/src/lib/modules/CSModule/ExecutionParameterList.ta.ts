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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ExecutionParameter,
    _decode_ExecutionParameter,
    _encode_ExecutionParameter,
} from '../CSModule/ExecutionParameter.ta';
export {
    ExecutionParameter,
    _decode_ExecutionParameter,
    _encode_ExecutionParameter,
} from '../CSModule/ExecutionParameter.ta';

/* START_OF_SYMBOL_DEFINITION ExecutionParameterList */
/**
 * @summary ExecutionParameterList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecutionParameterList  ::=  CHOICE {
 *   executionParameter       ExecutionParameter,
 *   sequentialExecutionList  [1]  SEQUENCE OF ExecutionParameter,
 *   parallelExecutionList    SET OF ExecutionParameter
 * }
 * ```
 */
export type ExecutionParameterList =
    | { executionParameter: ExecutionParameter } /* CHOICE_ALT_ROOT */
    | { sequentialExecutionList: ExecutionParameter[] } /* CHOICE_ALT_ROOT */
    | { parallelExecutionList: ExecutionParameter[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ExecutionParameterList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecutionParameterList */
let _cached_decoder_for_ExecutionParameterList: $.ASN1Decoder<ExecutionParameterList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecutionParameterList */

/* START_OF_SYMBOL_DEFINITION _decode_ExecutionParameterList */
/**
 * @summary Decodes an ASN.1 element into a(n) ExecutionParameterList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExecutionParameterList} The decoded data structure.
 */
export function _decode_ExecutionParameterList(el: _Element) {
    if (!_cached_decoder_for_ExecutionParameterList) {
        _cached_decoder_for_ExecutionParameterList = $._decode_inextensible_choice<ExecutionParameterList>(
            {
                'UNIVERSAL 16': [
                    'executionParameter',
                    _decode_ExecutionParameter,
                ],
                'CONTEXT 1': [
                    'sequentialExecutionList',
                    $._decode_implicit<ExecutionParameter[]>(() =>
                        $._decodeSequenceOf<ExecutionParameter>(
                            () => _decode_ExecutionParameter
                        )
                    ),
                ],
                'UNIVERSAL 17': [
                    'parallelExecutionList',
                    $._decodeSetOf<ExecutionParameter>(
                        () => _decode_ExecutionParameter
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExecutionParameterList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExecutionParameterList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecutionParameterList */
let _cached_encoder_for_ExecutionParameterList: $.ASN1Encoder<ExecutionParameterList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecutionParameterList */

/* START_OF_SYMBOL_DEFINITION _encode_ExecutionParameterList */
/**
 * @summary Encodes a(n) ExecutionParameterList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecutionParameterList, encoded as an ASN.1 Element.
 */
export function _encode_ExecutionParameterList(
    value: ExecutionParameterList,
    elGetter: $.ASN1Encoder<ExecutionParameterList>
) {
    if (!_cached_encoder_for_ExecutionParameterList) {
        _cached_encoder_for_ExecutionParameterList = $._encode_choice<ExecutionParameterList>(
            {
                executionParameter: _encode_ExecutionParameter,
                sequentialExecutionList: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<ExecutionParameter>(
                            () => _encode_ExecutionParameter,
                            $.BER
                        ),
                    $.BER
                ),
                parallelExecutionList: $._encodeSetOf<ExecutionParameter>(
                    () => _encode_ExecutionParameter,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExecutionParameterList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExecutionParameterList */

/* eslint-enable */
