/* eslint-disable */
import {
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
    Selector,
    _decode_Selector,
    _encode_Selector,
} from '../MSAbstractService/Selector.ta.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary ModifyArgument_entries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyArgument-entries ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifyArgument_entries =
    | { selector: Selector } /* CHOICE_ALT_ROOT */
    | { specific_entries: SequenceNumber[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ModifyArgument_entries: $.ASN1Decoder<ModifyArgument_entries> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyArgument_entries
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyArgument_entries} The decoded data structure.
 */
export function _decode_ModifyArgument_entries(el: _Element): ModifyArgument_entries {
    if (!_cached_decoder_for_ModifyArgument_entries) {
        _cached_decoder_for_ModifyArgument_entries = $._decode_inextensible_choice<ModifyArgument_entries>(
            {
                'CONTEXT 1': [
                    'selector',
                    $._decode_implicit<Selector>(() => _decode_Selector),
                ],
                'CONTEXT 2': [
                    'specific_entries',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSequenceOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifyArgument_entries(el);
}

let _cached_encoder_for_ModifyArgument_entries: $.ASN1Encoder<ModifyArgument_entries> | null = null;

/**
 * @summary Encodes a(n) ModifyArgument_entries into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyArgument_entries, encoded as an ASN.1 Element.
 */
export function _encode_ModifyArgument_entries(
    value: ModifyArgument_entries,
    elGetter: $.ASN1Encoder<ModifyArgument_entries>
): _Element {
    if (!_cached_encoder_for_ModifyArgument_entries) {
        _cached_encoder_for_ModifyArgument_entries = $._encode_choice<ModifyArgument_entries>(
            {
                selector: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Selector,
                    $.BER
                ),
                specific_entries: $._encode_implicit(
                    _TagClass.context,
                    2,
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
    return _cached_encoder_for_ModifyArgument_entries(value, elGetter);
}


/* eslint-enable */
