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
 * @summary DeleteArgument_items
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteArgument-items ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DeleteArgument_items =
    | { selector: Selector } /* CHOICE_ALT_ROOT */
    | { sequence_numbers: SequenceNumber[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeleteArgument_items: $.ASN1Decoder<DeleteArgument_items> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteArgument_items
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteArgument_items} The decoded data structure.
 */
export function _decode_DeleteArgument_items(el: _Element) {
    if (!_cached_decoder_for_DeleteArgument_items) {
        _cached_decoder_for_DeleteArgument_items = $._decode_inextensible_choice<DeleteArgument_items>(
            {
                'CONTEXT 1': [
                    'selector',
                    $._decode_implicit<Selector>(() => _decode_Selector),
                ],
                'CONTEXT 2': [
                    'sequence_numbers',
                    $._decode_implicit<SequenceNumber[]>(() =>
                        $._decodeSetOf<SequenceNumber>(
                            () => _decode_SequenceNumber
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_DeleteArgument_items(el);
}

let _cached_encoder_for_DeleteArgument_items: $.ASN1Encoder<DeleteArgument_items> | null = null;

/**
 * @summary Encodes a(n) DeleteArgument_items into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteArgument_items, encoded as an ASN.1 Element.
 */
export function _encode_DeleteArgument_items(
    value: DeleteArgument_items,
    elGetter: $.ASN1Encoder<DeleteArgument_items>
) {
    if (!_cached_encoder_for_DeleteArgument_items) {
        _cached_encoder_for_DeleteArgument_items = $._encode_choice<DeleteArgument_items>(
            {
                selector: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Selector,
                    $.BER
                ),
                sequence_numbers: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<SequenceNumber>(
                            () => _encode_SequenceNumber,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DeleteArgument_items(value, elGetter);
}


/* eslint-enable */
