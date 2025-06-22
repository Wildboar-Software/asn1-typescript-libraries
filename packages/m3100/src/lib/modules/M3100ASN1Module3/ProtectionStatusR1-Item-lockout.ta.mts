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
import * as $ from '@wildboar/asn1/functional';
import {
    SwitchStatus,
    _enum_for_SwitchStatus,
    _decode_SwitchStatus,
    _encode_SwitchStatus,
} from '../SDHProtASN1/SwitchStatus.ta.mjs';

/**
 * @summary ProtectionStatusR1_Item_lockout
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusR1-Item-lockout ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ProtectionStatusR1_Item_lockout =
    | { switchStatus: SwitchStatus } /* CHOICE_ALT_ROOT */
    | { releaseFailed: NULL } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ProtectionStatusR1_Item_lockout: $.ASN1Decoder<ProtectionStatusR1_Item_lockout> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusR1_Item_lockout
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusR1_Item_lockout} The decoded data structure.
 */
export function _decode_ProtectionStatusR1_Item_lockout(el: _Element) {
    if (!_cached_decoder_for_ProtectionStatusR1_Item_lockout) {
        _cached_decoder_for_ProtectionStatusR1_Item_lockout = $._decode_inextensible_choice<ProtectionStatusR1_Item_lockout>(
            {
                'CONTEXT 1': [
                    'switchStatus',
                    $._decode_implicit<SwitchStatus>(
                        () => _decode_SwitchStatus
                    ),
                ],
                'CONTEXT 2': [
                    'releaseFailed',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_ProtectionStatusR1_Item_lockout(el);
}


let _cached_encoder_for_ProtectionStatusR1_Item_lockout: $.ASN1Encoder<ProtectionStatusR1_Item_lockout> | null = null;


/**
 * @summary Encodes a(n) ProtectionStatusR1_Item_lockout into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusR1_Item_lockout, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusR1_Item_lockout(
    value: ProtectionStatusR1_Item_lockout,
    elGetter: $.ASN1Encoder<ProtectionStatusR1_Item_lockout>
) {
    if (!_cached_encoder_for_ProtectionStatusR1_Item_lockout) {
        _cached_encoder_for_ProtectionStatusR1_Item_lockout = $._encode_choice<ProtectionStatusR1_Item_lockout>(
            {
                switchStatus: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SwitchStatus,
                    $.BER
                ),
                releaseFailed: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProtectionStatusR1_Item_lockout(value, elGetter);
}


/* eslint-enable */
