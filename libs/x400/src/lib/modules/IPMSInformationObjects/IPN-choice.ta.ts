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
    NonReceiptFields,
    _decode_NonReceiptFields,
    _encode_NonReceiptFields,
} from '../IPMSInformationObjects/NonReceiptFields.ta';
export {
    NonReceiptFields,
    _decode_NonReceiptFields,
    _encode_NonReceiptFields,
} from '../IPMSInformationObjects/NonReceiptFields.ta';
import {
    ReceiptFields,
    _decode_ReceiptFields,
    _encode_ReceiptFields,
} from '../IPMSInformationObjects/ReceiptFields.ta';
export {
    ReceiptFields,
    _decode_ReceiptFields,
    _encode_ReceiptFields,
} from '../IPMSInformationObjects/ReceiptFields.ta';
import {
    OtherNotificationTypeFields,
    _decode_OtherNotificationTypeFields,
    _encode_OtherNotificationTypeFields,
} from '../IPMSInformationObjects/OtherNotificationTypeFields.ta';
export {
    OtherNotificationTypeFields,
    _decode_OtherNotificationTypeFields,
    _encode_OtherNotificationTypeFields,
} from '../IPMSInformationObjects/OtherNotificationTypeFields.ta';

/* START_OF_SYMBOL_DEFINITION IPN_choice */
/**
 * @summary IPN_choice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPN-choice ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type IPN_choice =
    | { non_receipt_fields: NonReceiptFields } /* CHOICE_ALT_ROOT */
    | { receipt_fields: ReceiptFields } /* CHOICE_ALT_ROOT */
    | {
          other_notification_type_fields: OtherNotificationTypeFields;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION IPN_choice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPN_choice */
let _cached_decoder_for_IPN_choice: $.ASN1Decoder<IPN_choice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPN_choice */

/* START_OF_SYMBOL_DEFINITION _decode_IPN_choice */
/**
 * @summary Decodes an ASN.1 element into a(n) IPN_choice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPN_choice} The decoded data structure.
 */
export function _decode_IPN_choice(el: _Element) {
    if (!_cached_decoder_for_IPN_choice) {
        _cached_decoder_for_IPN_choice = $._decode_inextensible_choice<IPN_choice>(
            {
                'CONTEXT 0': [
                    'non_receipt_fields',
                    $._decode_implicit<NonReceiptFields>(
                        () => _decode_NonReceiptFields
                    ),
                ],
                'CONTEXT 1': [
                    'receipt_fields',
                    $._decode_implicit<ReceiptFields>(
                        () => _decode_ReceiptFields
                    ),
                ],
                'CONTEXT 2': [
                    'other_notification_type_fields',
                    $._decode_implicit<OtherNotificationTypeFields>(
                        () => _decode_OtherNotificationTypeFields
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_IPN_choice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPN_choice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPN_choice */
let _cached_encoder_for_IPN_choice: $.ASN1Encoder<IPN_choice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPN_choice */

/* START_OF_SYMBOL_DEFINITION _encode_IPN_choice */
/**
 * @summary Encodes a(n) IPN_choice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPN_choice, encoded as an ASN.1 Element.
 */
export function _encode_IPN_choice(
    value: IPN_choice,
    elGetter: $.ASN1Encoder<IPN_choice>
) {
    if (!_cached_encoder_for_IPN_choice) {
        _cached_encoder_for_IPN_choice = $._encode_choice<IPN_choice>(
            {
                non_receipt_fields: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_NonReceiptFields,
                    $.BER
                ),
                receipt_fields: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ReceiptFields,
                    $.BER
                ),
                other_notification_type_fields: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_OtherNotificationTypeFields,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IPN_choice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPN_choice */

/* eslint-enable */
