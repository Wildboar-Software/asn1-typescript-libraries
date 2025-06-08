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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta';

/* START_OF_SYMBOL_DEFINITION CorrelatedDeliveredEDINs */
/**
 * @summary CorrelatedDeliveredEDINs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CorrelatedDeliveredEDINs  ::=  CHOICE {
 *   no-edin-received  [0]  NULL,
 *   edins-received    [1]  SEQUENCE OF SequenceNumber
 * }
 * ```
 */
export type CorrelatedDeliveredEDINs =
    | { no_edin_received: NULL } /* CHOICE_ALT_ROOT */
    | { edins_received: SequenceNumber[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CorrelatedDeliveredEDINs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CorrelatedDeliveredEDINs */
let _cached_decoder_for_CorrelatedDeliveredEDINs: $.ASN1Decoder<CorrelatedDeliveredEDINs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CorrelatedDeliveredEDINs */

/* START_OF_SYMBOL_DEFINITION _decode_CorrelatedDeliveredEDINs */
/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatedDeliveredEDINs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CorrelatedDeliveredEDINs} The decoded data structure.
 */
export function _decode_CorrelatedDeliveredEDINs(el: _Element) {
    if (!_cached_decoder_for_CorrelatedDeliveredEDINs) {
        _cached_decoder_for_CorrelatedDeliveredEDINs = $._decode_inextensible_choice<CorrelatedDeliveredEDINs>(
            {
                'CONTEXT 0': [
                    'no_edin_received',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'edins_received',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CorrelatedDeliveredEDINs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CorrelatedDeliveredEDINs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CorrelatedDeliveredEDINs */
let _cached_encoder_for_CorrelatedDeliveredEDINs: $.ASN1Encoder<CorrelatedDeliveredEDINs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CorrelatedDeliveredEDINs */

/* START_OF_SYMBOL_DEFINITION _encode_CorrelatedDeliveredEDINs */
/**
 * @summary Encodes a(n) CorrelatedDeliveredEDINs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatedDeliveredEDINs, encoded as an ASN.1 Element.
 */
export function _encode_CorrelatedDeliveredEDINs(
    value: CorrelatedDeliveredEDINs,
    elGetter: $.ASN1Encoder<CorrelatedDeliveredEDINs>
) {
    if (!_cached_encoder_for_CorrelatedDeliveredEDINs) {
        _cached_encoder_for_CorrelatedDeliveredEDINs = $._encode_choice<CorrelatedDeliveredEDINs>(
            {
                no_edin_received: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                edins_received: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<SequenceNumber>(
                            () => _encode_SequenceNumber,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CorrelatedDeliveredEDINs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CorrelatedDeliveredEDINs */

/* eslint-enable */
