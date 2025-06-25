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
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
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

let _cached_decoder_for_AutoActionErrorIndication: $.ASN1Decoder<AutoActionErrorIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionErrorIndication
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionErrorIndication} The decoded data structure.
 */
export function _decode_AutoActionErrorIndication(el: _Element): AutoActionErrorIndication {
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

let _cached_encoder_for_AutoActionErrorIndication: $.ASN1Encoder<AutoActionErrorIndication> | null = null;

/**
 * @summary Encodes a(n) AutoActionErrorIndication into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionErrorIndication, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionErrorIndication(
    value: AutoActionErrorIndication,
    elGetter: $.ASN1Encoder<AutoActionErrorIndication>
): _Element {
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


/* eslint-enable */
