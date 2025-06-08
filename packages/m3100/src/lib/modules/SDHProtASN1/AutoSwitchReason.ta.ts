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

/* START_OF_SYMBOL_DEFINITION AutoSwitchReason */
/**
 * @summary AutoSwitchReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoSwitchReason  ::=  CHOICE {
 *   waitToRestore  [0]  NULL,
 *   signalDegrade  [1]  NULL,
 *   signalFail     [2]  NULL
 * }
 * ```
 */
export type AutoSwitchReason =
    | { waitToRestore: NULL } /* CHOICE_ALT_ROOT */
    | { signalDegrade: NULL } /* CHOICE_ALT_ROOT */
    | { signalFail: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSwitchReason */
let _cached_decoder_for_AutoSwitchReason: $.ASN1Decoder<AutoSwitchReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _decode_AutoSwitchReason */
/**
 * @summary Decodes an ASN.1 element into a(n) AutoSwitchReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoSwitchReason} The decoded data structure.
 */
export function _decode_AutoSwitchReason(el: _Element) {
    if (!_cached_decoder_for_AutoSwitchReason) {
        _cached_decoder_for_AutoSwitchReason = $._decode_inextensible_choice<AutoSwitchReason>(
            {
                'CONTEXT 0': [
                    'waitToRestore',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'signalDegrade',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 2': [
                    'signalFail',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_AutoSwitchReason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSwitchReason */
let _cached_encoder_for_AutoSwitchReason: $.ASN1Encoder<AutoSwitchReason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AutoSwitchReason */

/* START_OF_SYMBOL_DEFINITION _encode_AutoSwitchReason */
/**
 * @summary Encodes a(n) AutoSwitchReason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoSwitchReason, encoded as an ASN.1 Element.
 */
export function _encode_AutoSwitchReason(
    value: AutoSwitchReason,
    elGetter: $.ASN1Encoder<AutoSwitchReason>
) {
    if (!_cached_encoder_for_AutoSwitchReason) {
        _cached_encoder_for_AutoSwitchReason = $._encode_choice<AutoSwitchReason>(
            {
                waitToRestore: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                signalDegrade: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
                signalFail: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AutoSwitchReason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AutoSwitchReason */

/* eslint-enable */
