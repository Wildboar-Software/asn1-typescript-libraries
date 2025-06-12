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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CorrelatedDeliveredReplies */
/**
 * @summary CorrelatedDeliveredReplies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CorrelatedDeliveredReplies  ::=  CHOICE {
 *   no-reply-received  [0]  NULL,
 *   received-replies   [1]  SEQUENCE OF SequenceNumber
 * }
 * ```
 */
export type CorrelatedDeliveredReplies =
    | { no_reply_received: NULL } /* CHOICE_ALT_ROOT */
    | { received_replies: SequenceNumber[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CorrelatedDeliveredReplies */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CorrelatedDeliveredReplies */
let _cached_decoder_for_CorrelatedDeliveredReplies: $.ASN1Decoder<CorrelatedDeliveredReplies> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CorrelatedDeliveredReplies */

/* START_OF_SYMBOL_DEFINITION _decode_CorrelatedDeliveredReplies */
/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatedDeliveredReplies
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CorrelatedDeliveredReplies} The decoded data structure.
 */
export function _decode_CorrelatedDeliveredReplies(el: _Element) {
    if (!_cached_decoder_for_CorrelatedDeliveredReplies) {
        _cached_decoder_for_CorrelatedDeliveredReplies = $._decode_inextensible_choice<CorrelatedDeliveredReplies>(
            {
                'CONTEXT 0': [
                    'no_reply_received',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'received_replies',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CorrelatedDeliveredReplies(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CorrelatedDeliveredReplies */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CorrelatedDeliveredReplies */
let _cached_encoder_for_CorrelatedDeliveredReplies: $.ASN1Encoder<CorrelatedDeliveredReplies> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CorrelatedDeliveredReplies */

/* START_OF_SYMBOL_DEFINITION _encode_CorrelatedDeliveredReplies */
/**
 * @summary Encodes a(n) CorrelatedDeliveredReplies into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatedDeliveredReplies, encoded as an ASN.1 Element.
 */
export function _encode_CorrelatedDeliveredReplies(
    value: CorrelatedDeliveredReplies,
    elGetter: $.ASN1Encoder<CorrelatedDeliveredReplies>
) {
    if (!_cached_encoder_for_CorrelatedDeliveredReplies) {
        _cached_encoder_for_CorrelatedDeliveredReplies = $._encode_choice<CorrelatedDeliveredReplies>(
            {
                no_reply_received: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                received_replies: $._encode_implicit(
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
    return _cached_encoder_for_CorrelatedDeliveredReplies(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CorrelatedDeliveredReplies */

/* eslint-enable */
