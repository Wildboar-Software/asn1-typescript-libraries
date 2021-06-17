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
    ProtectionStatus_Item_manualSwitch,
    _decode_ProtectionStatus_Item_manualSwitch,
    _encode_ProtectionStatus_Item_manualSwitch,
} from '../SDHProtASN1/ProtectionStatus-Item-manualSwitch.ta';
export {
    ProtectionStatus_Item_manualSwitch,
    _decode_ProtectionStatus_Item_manualSwitch,
    _encode_ProtectionStatus_Item_manualSwitch,
} from '../SDHProtASN1/ProtectionStatus-Item-manualSwitch.ta';
import {
    ProtectionStatus_Item_autoSwitch,
    _decode_ProtectionStatus_Item_autoSwitch,
    _encode_ProtectionStatus_Item_autoSwitch,
} from '../SDHProtASN1/ProtectionStatus-Item-autoSwitch.ta';
export {
    ProtectionStatus_Item_autoSwitch,
    _decode_ProtectionStatus_Item_autoSwitch,
    _encode_ProtectionStatus_Item_autoSwitch,
} from '../SDHProtASN1/ProtectionStatus-Item-autoSwitch.ta';
import {
    ProtectionStatus_Item_forcedSwitch,
    _decode_ProtectionStatus_Item_forcedSwitch,
    _encode_ProtectionStatus_Item_forcedSwitch,
} from '../SDHProtASN1/ProtectionStatus-Item-forcedSwitch.ta';
export {
    ProtectionStatus_Item_forcedSwitch,
    _decode_ProtectionStatus_Item_forcedSwitch,
    _encode_ProtectionStatus_Item_forcedSwitch,
} from '../SDHProtASN1/ProtectionStatus-Item-forcedSwitch.ta';
import {
    ProtectionStatus_Item_lockout,
    _decode_ProtectionStatus_Item_lockout,
    _encode_ProtectionStatus_Item_lockout,
} from '../SDHProtASN1/ProtectionStatus-Item-lockout.ta';
export {
    ProtectionStatus_Item_lockout,
    _decode_ProtectionStatus_Item_lockout,
    _encode_ProtectionStatus_Item_lockout,
} from '../SDHProtASN1/ProtectionStatus-Item-lockout.ta';

/* START_OF_SYMBOL_DEFINITION ProtectionStatus_Item */
/**
 * @summary ProtectionStatus_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatus-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ProtectionStatus_Item =
    | { noRequest: NULL } /* CHOICE_ALT_ROOT */
    | { doNotRevert: NULL } /* CHOICE_ALT_ROOT */
    | { manualSwitch: ProtectionStatus_Item_manualSwitch } /* CHOICE_ALT_ROOT */
    | { autoSwitch: ProtectionStatus_Item_autoSwitch } /* CHOICE_ALT_ROOT */
    | { forcedSwitch: ProtectionStatus_Item_forcedSwitch } /* CHOICE_ALT_ROOT */
    | { lockout: ProtectionStatus_Item_lockout } /* CHOICE_ALT_ROOT */
    | { releaseFailed: NULL } /* CHOICE_ALT_ROOT */
    | { protectionFailCondApsInvalid: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { protectionFailCondChannelMismatch: BOOLEAN } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ProtectionStatus_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatus_Item */
let _cached_decoder_for_ProtectionStatus_Item: $.ASN1Decoder<ProtectionStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatus_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionStatus_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatus_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatus_Item} The decoded data structure.
 */
export function _decode_ProtectionStatus_Item(el: _Element) {
    if (!_cached_decoder_for_ProtectionStatus_Item) {
        _cached_decoder_for_ProtectionStatus_Item = $._decode_inextensible_choice<ProtectionStatus_Item>(
            {
                'CONTEXT 0': [
                    'noRequest',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'doNotRevert',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 2': [
                    'manualSwitch',
                    $._decode_implicit<ProtectionStatus_Item_manualSwitch>(
                        () => _decode_ProtectionStatus_Item_manualSwitch
                    ),
                ],
                'CONTEXT 3': [
                    'autoSwitch',
                    $._decode_implicit<ProtectionStatus_Item_autoSwitch>(
                        () => _decode_ProtectionStatus_Item_autoSwitch
                    ),
                ],
                'CONTEXT 4': [
                    'forcedSwitch',
                    $._decode_implicit<ProtectionStatus_Item_forcedSwitch>(
                        () => _decode_ProtectionStatus_Item_forcedSwitch
                    ),
                ],
                'CONTEXT 5': [
                    'lockout',
                    $._decode_implicit<ProtectionStatus_Item_lockout>(
                        () => _decode_ProtectionStatus_Item_lockout
                    ),
                ],
                'CONTEXT 6': [
                    'releaseFailed',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 7': [
                    'protectionFailCondApsInvalid',
                    $._decode_implicit<BOOLEAN>(() => $._decodeBoolean),
                ],
                'CONTEXT 8': [
                    'protectionFailCondChannelMismatch',
                    $._decode_implicit<BOOLEAN>(() => $._decodeBoolean),
                ],
            }
        );
    }
    return _cached_decoder_for_ProtectionStatus_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionStatus_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatus_Item */
let _cached_encoder_for_ProtectionStatus_Item: $.ASN1Encoder<ProtectionStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatus_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionStatus_Item */
/**
 * @summary Encodes a(n) ProtectionStatus_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatus_Item, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatus_Item(
    value: ProtectionStatus_Item,
    elGetter: $.ASN1Encoder<ProtectionStatus_Item>
) {
    if (!_cached_encoder_for_ProtectionStatus_Item) {
        _cached_encoder_for_ProtectionStatus_Item = $._encode_choice<ProtectionStatus_Item>(
            {
                noRequest: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                doNotRevert: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeNull,
                    $.BER
                ),
                manualSwitch: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ProtectionStatus_Item_manualSwitch,
                    $.BER
                ),
                autoSwitch: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ProtectionStatus_Item_autoSwitch,
                    $.BER
                ),
                forcedSwitch: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_ProtectionStatus_Item_forcedSwitch,
                    $.BER
                ),
                lockout: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_ProtectionStatus_Item_lockout,
                    $.BER
                ),
                releaseFailed: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => $._encodeNull,
                    $.BER
                ),
                protectionFailCondApsInvalid: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => $._encodeBoolean,
                    $.BER
                ),
                protectionFailCondChannelMismatch: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => $._encodeBoolean,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProtectionStatus_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionStatus_Item */

/* eslint-enable */
