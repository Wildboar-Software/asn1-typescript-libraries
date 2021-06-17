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
    ScriptThreadSet,
    _decode_ScriptThreadSet,
    _encode_ScriptThreadSet,
} from '../CSModule/ScriptThreadSet.ta';
export {
    ScriptThreadSet,
    _decode_ScriptThreadSet,
    _encode_ScriptThreadSet,
} from '../CSModule/ScriptThreadSet.ta';

/* START_OF_SYMBOL_DEFINITION ExecutionType */
/**
 * @summary ExecutionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecutionType  ::=  CHOICE {
 *   singleExecution      ScriptThreadSet,
 *   parallelExecution    SET OF ScriptThreadSet,
 *   sequentialExecution  [1]  SEQUENCE OF ScriptThreadSet
 * }
 * ```
 */
export type ExecutionType =
    | { singleExecution: ScriptThreadSet } /* CHOICE_ALT_ROOT */
    | { parallelExecution: ScriptThreadSet[] } /* CHOICE_ALT_ROOT */
    | { sequentialExecution: ScriptThreadSet[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ExecutionType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecutionType */
let _cached_decoder_for_ExecutionType: $.ASN1Decoder<ExecutionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExecutionType */

/* START_OF_SYMBOL_DEFINITION _decode_ExecutionType */
/**
 * @summary Decodes an ASN.1 element into a(n) ExecutionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExecutionType} The decoded data structure.
 */
export function _decode_ExecutionType(el: _Element) {
    if (!_cached_decoder_for_ExecutionType) {
        _cached_decoder_for_ExecutionType = $._decode_inextensible_choice<ExecutionType>(
            {
                'UNIVERSAL 16': ['singleExecution', _decode_ScriptThreadSet],
                'UNIVERSAL 17': [
                    'parallelExecution',
                    $._decodeSetOf<ScriptThreadSet>(
                        () => _decode_ScriptThreadSet
                    ),
                ],
                'CONTEXT 1': [
                    'sequentialExecution',
                    $._decode_implicit<ScriptThreadSet[]>(() =>
                        $._decodeSequenceOf<ScriptThreadSet>(
                            () => _decode_ScriptThreadSet
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ExecutionType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExecutionType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecutionType */
let _cached_encoder_for_ExecutionType: $.ASN1Encoder<ExecutionType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExecutionType */

/* START_OF_SYMBOL_DEFINITION _encode_ExecutionType */
/**
 * @summary Encodes a(n) ExecutionType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecutionType, encoded as an ASN.1 Element.
 */
export function _encode_ExecutionType(
    value: ExecutionType,
    elGetter: $.ASN1Encoder<ExecutionType>
) {
    if (!_cached_encoder_for_ExecutionType) {
        _cached_encoder_for_ExecutionType = $._encode_choice<ExecutionType>(
            {
                singleExecution: _encode_ScriptThreadSet,
                parallelExecution: $._encodeSetOf<ScriptThreadSet>(
                    () => _encode_ScriptThreadSet,
                    $.BER
                ),
                sequentialExecution: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<ScriptThreadSet>(
                            () => _encode_ScriptThreadSet,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ExecutionType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExecutionType */

/* eslint-enable */
