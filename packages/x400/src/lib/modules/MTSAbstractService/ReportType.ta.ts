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
    DeliveryReport,
    _decode_DeliveryReport,
    _encode_DeliveryReport,
} from '../MTSAbstractService/DeliveryReport.ta';
export {
    DeliveryReport,
    _decode_DeliveryReport,
    _encode_DeliveryReport,
} from '../MTSAbstractService/DeliveryReport.ta';
import {
    NonDeliveryReport,
    _decode_NonDeliveryReport,
    _encode_NonDeliveryReport,
} from '../MTSAbstractService/NonDeliveryReport.ta';
export {
    NonDeliveryReport,
    _decode_NonDeliveryReport,
    _encode_NonDeliveryReport,
} from '../MTSAbstractService/NonDeliveryReport.ta';

/* START_OF_SYMBOL_DEFINITION ReportType */
/**
 * @summary ReportType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportType  ::=  CHOICE {
 *   delivery      [0]  DeliveryReport,
 *   non-delivery  [1]  NonDeliveryReport
 * }
 * ```
 */
export type ReportType =
    | { delivery: DeliveryReport } /* CHOICE_ALT_ROOT */
    | { non_delivery: NonDeliveryReport } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ReportType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportType */
let _cached_decoder_for_ReportType: $.ASN1Decoder<ReportType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportType */

/* START_OF_SYMBOL_DEFINITION _decode_ReportType */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportType} The decoded data structure.
 */
export function _decode_ReportType(el: _Element) {
    if (!_cached_decoder_for_ReportType) {
        _cached_decoder_for_ReportType = $._decode_inextensible_choice<ReportType>(
            {
                'CONTEXT 0': [
                    'delivery',
                    $._decode_implicit<DeliveryReport>(
                        () => _decode_DeliveryReport
                    ),
                ],
                'CONTEXT 1': [
                    'non_delivery',
                    $._decode_implicit<NonDeliveryReport>(
                        () => _decode_NonDeliveryReport
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ReportType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportType */
let _cached_encoder_for_ReportType: $.ASN1Encoder<ReportType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportType */

/* START_OF_SYMBOL_DEFINITION _encode_ReportType */
/**
 * @summary Encodes a(n) ReportType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportType, encoded as an ASN.1 Element.
 */
export function _encode_ReportType(
    value: ReportType,
    elGetter: $.ASN1Encoder<ReportType>
) {
    if (!_cached_encoder_for_ReportType) {
        _cached_encoder_for_ReportType = $._encode_choice<ReportType>(
            {
                delivery: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DeliveryReport,
                    $.BER
                ),
                non_delivery: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_NonDeliveryReport,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ReportType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportType */

/* eslint-enable */
