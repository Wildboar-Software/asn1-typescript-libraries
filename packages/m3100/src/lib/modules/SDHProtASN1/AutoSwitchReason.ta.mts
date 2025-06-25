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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


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


let _cached_decoder_for_AutoSwitchReason: $.ASN1Decoder<AutoSwitchReason> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AutoSwitchReason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoSwitchReason} The decoded data structure.
 */
export function _decode_AutoSwitchReason(el: _Element): AutoSwitchReason {
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


let _cached_encoder_for_AutoSwitchReason: $.ASN1Encoder<AutoSwitchReason> | null = null;


/**
 * @summary Encodes a(n) AutoSwitchReason into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoSwitchReason, encoded as an ASN.1 Element.
 */
export function _encode_AutoSwitchReason(
    value: AutoSwitchReason,
    elGetter: $.ASN1Encoder<AutoSwitchReason>
): _Element {
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


/* eslint-enable */
