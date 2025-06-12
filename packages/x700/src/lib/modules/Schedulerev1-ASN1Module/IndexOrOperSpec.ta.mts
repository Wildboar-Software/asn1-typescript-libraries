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
    OperationSpecifications,
    _decode_OperationSpecifications,
    _encode_OperationSpecifications,
} from '../Schedulerev1-ASN1Module/OperationSpecifications.ta.mjs';
export {
    OperationSpecifications,
    _decode_OperationSpecifications,
    _encode_OperationSpecifications,
} from '../Schedulerev1-ASN1Module/OperationSpecifications.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IndexOrOperSpec */
/**
 * @summary IndexOrOperSpec
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndexOrOperSpec  ::=  CHOICE {
 *   index      [0]  INTEGER,
 *   operation  [1]  OperationSpecifications
 * }
 * ```
 */
export type IndexOrOperSpec =
    | { index: INTEGER } /* CHOICE_ALT_ROOT */
    | { operation: OperationSpecifications } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION IndexOrOperSpec */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IndexOrOperSpec */
let _cached_decoder_for_IndexOrOperSpec: $.ASN1Decoder<IndexOrOperSpec> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IndexOrOperSpec */

/* START_OF_SYMBOL_DEFINITION _decode_IndexOrOperSpec */
/**
 * @summary Decodes an ASN.1 element into a(n) IndexOrOperSpec
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndexOrOperSpec} The decoded data structure.
 */
export function _decode_IndexOrOperSpec(el: _Element) {
    if (!_cached_decoder_for_IndexOrOperSpec) {
        _cached_decoder_for_IndexOrOperSpec = $._decode_inextensible_choice<IndexOrOperSpec>(
            {
                'CONTEXT 0': [
                    'index',
                    $._decode_implicit<INTEGER>(() => $._decodeInteger),
                ],
                'CONTEXT 1': [
                    'operation',
                    $._decode_implicit<OperationSpecifications>(
                        () => _decode_OperationSpecifications
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_IndexOrOperSpec(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IndexOrOperSpec */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IndexOrOperSpec */
let _cached_encoder_for_IndexOrOperSpec: $.ASN1Encoder<IndexOrOperSpec> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IndexOrOperSpec */

/* START_OF_SYMBOL_DEFINITION _encode_IndexOrOperSpec */
/**
 * @summary Encodes a(n) IndexOrOperSpec into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndexOrOperSpec, encoded as an ASN.1 Element.
 */
export function _encode_IndexOrOperSpec(
    value: IndexOrOperSpec,
    elGetter: $.ASN1Encoder<IndexOrOperSpec>
) {
    if (!_cached_encoder_for_IndexOrOperSpec) {
        _cached_encoder_for_IndexOrOperSpec = $._encode_choice<IndexOrOperSpec>(
            {
                index: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                operation: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_OperationSpecifications,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IndexOrOperSpec(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IndexOrOperSpec */

/* eslint-enable */
