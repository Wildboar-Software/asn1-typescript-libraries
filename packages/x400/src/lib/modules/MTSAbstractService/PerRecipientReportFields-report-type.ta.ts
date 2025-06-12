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
    PerRecipientDeliveryReportFields,
    _decode_PerRecipientDeliveryReportFields,
    _encode_PerRecipientDeliveryReportFields,
} from '../MTSAbstractService/PerRecipientDeliveryReportFields.ta.js';
export {
    PerRecipientDeliveryReportFields,
    _decode_PerRecipientDeliveryReportFields,
    _encode_PerRecipientDeliveryReportFields,
} from '../MTSAbstractService/PerRecipientDeliveryReportFields.ta.js';
import {
    PerRecipientNonDeliveryReportFields,
    _decode_PerRecipientNonDeliveryReportFields,
    _encode_PerRecipientNonDeliveryReportFields,
} from '../MTSAbstractService/PerRecipientNonDeliveryReportFields.ta.js';
export {
    PerRecipientNonDeliveryReportFields,
    _decode_PerRecipientNonDeliveryReportFields,
    _encode_PerRecipientNonDeliveryReportFields,
} from '../MTSAbstractService/PerRecipientNonDeliveryReportFields.ta.js';

/* START_OF_SYMBOL_DEFINITION PerRecipientReportFields_report_type */
/**
 * @summary PerRecipientReportFields_report_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientReportFields-report-type ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PerRecipientReportFields_report_type =
    | { delivery: PerRecipientDeliveryReportFields } /* CHOICE_ALT_ROOT */
    | {
          non_delivery: PerRecipientNonDeliveryReportFields;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PerRecipientReportFields_report_type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientReportFields_report_type */
let _cached_decoder_for_PerRecipientReportFields_report_type: $.ASN1Decoder<PerRecipientReportFields_report_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientReportFields_report_type */

/* START_OF_SYMBOL_DEFINITION _decode_PerRecipientReportFields_report_type */
/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientReportFields_report_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientReportFields_report_type} The decoded data structure.
 */
export function _decode_PerRecipientReportFields_report_type(el: _Element) {
    if (!_cached_decoder_for_PerRecipientReportFields_report_type) {
        _cached_decoder_for_PerRecipientReportFields_report_type = $._decode_inextensible_choice<PerRecipientReportFields_report_type>(
            {
                'CONTEXT 0': [
                    'delivery',
                    $._decode_implicit<PerRecipientDeliveryReportFields>(
                        () => _decode_PerRecipientDeliveryReportFields
                    ),
                ],
                'CONTEXT 1': [
                    'non_delivery',
                    $._decode_implicit<PerRecipientNonDeliveryReportFields>(
                        () => _decode_PerRecipientNonDeliveryReportFields
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_PerRecipientReportFields_report_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerRecipientReportFields_report_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientReportFields_report_type */
let _cached_encoder_for_PerRecipientReportFields_report_type: $.ASN1Encoder<PerRecipientReportFields_report_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientReportFields_report_type */

/* START_OF_SYMBOL_DEFINITION _encode_PerRecipientReportFields_report_type */
/**
 * @summary Encodes a(n) PerRecipientReportFields_report_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientReportFields_report_type, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientReportFields_report_type(
    value: PerRecipientReportFields_report_type,
    elGetter: $.ASN1Encoder<PerRecipientReportFields_report_type>
) {
    if (!_cached_encoder_for_PerRecipientReportFields_report_type) {
        _cached_encoder_for_PerRecipientReportFields_report_type = $._encode_choice<PerRecipientReportFields_report_type>(
            {
                delivery: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PerRecipientDeliveryReportFields,
                    $.BER
                ),
                non_delivery: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PerRecipientNonDeliveryReportFields,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PerRecipientReportFields_report_type(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_PerRecipientReportFields_report_type */

/* eslint-enable */
