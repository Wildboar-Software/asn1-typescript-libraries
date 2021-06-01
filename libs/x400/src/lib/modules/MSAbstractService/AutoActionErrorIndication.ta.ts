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

/* START_OF_SYMBOL_DEFINITION AutoActionErrorIndication */
/**
 * @summary AutoActionErrorIndication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionErrorIndication  ::=  CHOICE {
 *   indication-only        [0]  NULL,
 *   auto-action-log-entry  [1]  SequenceNumber
 * }
 * ```
 */
export type AutoActionErrorIndication =
    | { indication_only: NULL } /* CHOICE_ALT_ROOT */
    | { auto_action_log_entry: SequenceNumber } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION AutoActionErrorIndication */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoActionErrorIndication */
let _cached_decoder_for_AutoActionErrorIndication: $.ASN1Decoder<AutoActionErrorIndication> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoActionErrorIndication */

/* START_OF_SYMBOL_DEFINITION _decode_AutoActionErrorIndication */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionErrorIndication
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionErrorIndication} The decoded data structure.
 */
export function _decode_AutoActionErrorIndication(el: _Element) {
    if (!_cached_decoder_for_AutoActionErrorIndication) {
        _cached_decoder_for_AutoActionErrorIndication = $._decode_inextensible_choice<AutoActionErrorIndication>(
            {
                'CONTEXT 0': [
                    'indication_only',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'auto_action_log_entry',
                    $._decode_implicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AutoActionErrorIndication(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoActionErrorIndication */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoActionErrorIndication */
let _cached_encoder_for_AutoActionErrorIndication: $.ASN1Encoder<AutoActionErrorIndication> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoActionErrorIndication */

/* START_OF_SYMBOL_DEFINITION _encode_AutoActionErrorIndication */
/**
 * @summary Encodes a(n) AutoActionErrorIndication into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionErrorIndication, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionErrorIndication(
    value: AutoActionErrorIndication,
    elGetter: $.ASN1Encoder<AutoActionErrorIndication>
) {
    if (!_cached_encoder_for_AutoActionErrorIndication) {
        _cached_encoder_for_AutoActionErrorIndication = $._encode_choice<AutoActionErrorIndication>(
            {
                indication_only: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                auto_action_log_entry: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SequenceNumber,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AutoActionErrorIndication(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoActionErrorIndication */

/* eslint-enable */
