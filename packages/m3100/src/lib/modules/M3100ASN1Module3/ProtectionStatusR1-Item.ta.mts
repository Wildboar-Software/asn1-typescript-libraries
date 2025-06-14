/* eslint-disable */
import {
    NULL,
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
    ProtectionStatusR1_Item_manualSwitch,
    _decode_ProtectionStatusR1_Item_manualSwitch,
    _encode_ProtectionStatusR1_Item_manualSwitch,
} from '../M3100ASN1Module3/ProtectionStatusR1-Item-manualSwitch.ta.mjs';
import {
    ProtectionStatusR1_Item_autoSwitch,
    _decode_ProtectionStatusR1_Item_autoSwitch,
    _encode_ProtectionStatusR1_Item_autoSwitch,
} from '../M3100ASN1Module3/ProtectionStatusR1-Item-autoSwitch.ta.mjs';
import {
    ProtectionStatusR1_Item_forcedSwitch,
    _decode_ProtectionStatusR1_Item_forcedSwitch,
    _encode_ProtectionStatusR1_Item_forcedSwitch,
} from '../M3100ASN1Module3/ProtectionStatusR1-Item-forcedSwitch.ta.mjs';
import {
    ProtectionStatusR1_Item_lockout,
    _decode_ProtectionStatusR1_Item_lockout,
    _encode_ProtectionStatusR1_Item_lockout,
} from '../M3100ASN1Module3/ProtectionStatusR1-Item-lockout.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ProtectionStatusR1_Item */
/**
 * @summary ProtectionStatusR1_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusR1-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ProtectionStatusR1_Item =
    | { noRequest: NULL } /* CHOICE_ALT_ROOT */
    | { doNotRevert: NULL } /* CHOICE_ALT_ROOT */
    | {
          manualSwitch: ProtectionStatusR1_Item_manualSwitch;
      } /* CHOICE_ALT_ROOT */
    | { autoSwitch: ProtectionStatusR1_Item_autoSwitch } /* CHOICE_ALT_ROOT */
    | {
          forcedSwitch: ProtectionStatusR1_Item_forcedSwitch;
      } /* CHOICE_ALT_ROOT */
    | { lockout: ProtectionStatusR1_Item_lockout } /* CHOICE_ALT_ROOT */
    | { releaseFailed: NULL } /* CHOICE_ALT_ROOT */
    | { resourceFailed: NULL } /* CHOICE_ALT_ROOT */
    | { lockedIn: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ProtectionStatusR1_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusR1_Item */
let _cached_decoder_for_ProtectionStatusR1_Item: $.ASN1Decoder<ProtectionStatusR1_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionStatusR1_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionStatusR1_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusR1_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusR1_Item} The decoded data structure.
 */
export function _decode_ProtectionStatusR1_Item(el: _Element) {
    if (!_cached_decoder_for_ProtectionStatusR1_Item) {
        _cached_decoder_for_ProtectionStatusR1_Item = $._decode_inextensible_choice<ProtectionStatusR1_Item>(
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
                    $._decode_implicit<ProtectionStatusR1_Item_manualSwitch>(
                        () => _decode_ProtectionStatusR1_Item_manualSwitch
                    ),
                ],
                'CONTEXT 3': [
                    'autoSwitch',
                    $._decode_implicit<ProtectionStatusR1_Item_autoSwitch>(
                        () => _decode_ProtectionStatusR1_Item_autoSwitch
                    ),
                ],
                'CONTEXT 4': [
                    'forcedSwitch',
                    $._decode_implicit<ProtectionStatusR1_Item_forcedSwitch>(
                        () => _decode_ProtectionStatusR1_Item_forcedSwitch
                    ),
                ],
                'CONTEXT 5': [
                    'lockout',
                    $._decode_explicit<ProtectionStatusR1_Item_lockout>(
                        () => _decode_ProtectionStatusR1_Item_lockout
                    ),
                ],
                'CONTEXT 6': [
                    'releaseFailed',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 7': [
                    'resourceFailed',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 8': [
                    'lockedIn',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_ProtectionStatusR1_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionStatusR1_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusR1_Item */
let _cached_encoder_for_ProtectionStatusR1_Item: $.ASN1Encoder<ProtectionStatusR1_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionStatusR1_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionStatusR1_Item */
/**
 * @summary Encodes a(n) ProtectionStatusR1_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusR1_Item, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusR1_Item(
    value: ProtectionStatusR1_Item,
    elGetter: $.ASN1Encoder<ProtectionStatusR1_Item>
) {
    if (!_cached_encoder_for_ProtectionStatusR1_Item) {
        _cached_encoder_for_ProtectionStatusR1_Item = $._encode_choice<ProtectionStatusR1_Item>(
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
                    () => _encode_ProtectionStatusR1_Item_manualSwitch,
                    $.BER
                ),
                autoSwitch: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ProtectionStatusR1_Item_autoSwitch,
                    $.BER
                ),
                forcedSwitch: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_ProtectionStatusR1_Item_forcedSwitch,
                    $.BER
                ),
                lockout: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_ProtectionStatusR1_Item_lockout,
                    $.BER
                ),
                releaseFailed: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => $._encodeNull,
                    $.BER
                ),
                resourceFailed: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => $._encodeNull,
                    $.BER
                ),
                lockedIn: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProtectionStatusR1_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionStatusR1_Item */

/* eslint-enable */
