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
    ErrorUnitThreshold,
    _decode_ErrorUnitThreshold,
    _encode_ErrorUnitThreshold,
} from '../TestCategories-ASN1Module/ErrorUnitThreshold.ta';
export {
    ErrorUnitThreshold,
    _decode_ErrorUnitThreshold,
    _encode_ErrorUnitThreshold,
} from '../TestCategories-ASN1Module/ErrorUnitThreshold.ta';

/* START_OF_SYMBOL_DEFINITION TestThreshold */
/**
 * @summary TestThreshold
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestThreshold  ::=  CHOICE {
 *   bitErrorThreshold         [0]  INTEGER,
 *   percentageErrorThreshold  [1]  REAL,
 *   errorUnitThreshold        [2]  ErrorUnitThreshold
 * }
 * ```
 */
export type TestThreshold =
    | { bitErrorThreshold: INTEGER } /* CHOICE_ALT_ROOT */
    | { percentageErrorThreshold: REAL } /* CHOICE_ALT_ROOT */
    | { errorUnitThreshold: ErrorUnitThreshold } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TestThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestThreshold */
let _cached_decoder_for_TestThreshold: $.ASN1Decoder<TestThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestThreshold */

/* START_OF_SYMBOL_DEFINITION _decode_TestThreshold */
/**
 * @summary Decodes an ASN.1 element into a(n) TestThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestThreshold} The decoded data structure.
 */
export function _decode_TestThreshold(el: _Element) {
    if (!_cached_decoder_for_TestThreshold) {
        _cached_decoder_for_TestThreshold = $._decode_inextensible_choice<TestThreshold>(
            {
                'CONTEXT 0': [
                    'bitErrorThreshold',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 1': [
                    'percentageErrorThreshold',
                    $._decode_implicit<REAL>(() => $._decodeReal),
                ],
                'CONTEXT 2': [
                    'errorUnitThreshold',
                    $._decode_implicit<ErrorUnitThreshold>(
                        () => _decode_ErrorUnitThreshold
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TestThreshold(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestThreshold */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestThreshold */
let _cached_encoder_for_TestThreshold: $.ASN1Encoder<TestThreshold> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestThreshold */

/* START_OF_SYMBOL_DEFINITION _encode_TestThreshold */
/**
 * @summary Encodes a(n) TestThreshold into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestThreshold, encoded as an ASN.1 Element.
 */
export function _encode_TestThreshold(
    value: TestThreshold,
    elGetter: $.ASN1Encoder<TestThreshold>
) {
    if (!_cached_encoder_for_TestThreshold) {
        _cached_encoder_for_TestThreshold = $._encode_choice<TestThreshold>(
            {
                bitErrorThreshold: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                percentageErrorThreshold: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeReal,
                    $.BER
                ),
                errorUnitThreshold: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ErrorUnitThreshold,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TestThreshold(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestThreshold */

/* eslint-enable */
