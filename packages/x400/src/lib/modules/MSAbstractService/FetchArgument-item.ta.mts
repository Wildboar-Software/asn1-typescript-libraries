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
 * @summary FetchArgument_item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchArgument-item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FetchArgument_item =
    | { search: Selector } /* CHOICE_ALT_ROOT */
    | { precise: SequenceNumber } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FetchArgument_item: $.ASN1Decoder<FetchArgument_item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FetchArgument_item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchArgument_item} The decoded data structure.
 */
export function _decode_FetchArgument_item(el: _Element): FetchArgument_item {
    if (!_cached_decoder_for_FetchArgument_item) {
        _cached_decoder_for_FetchArgument_item = $._decode_inextensible_choice<FetchArgument_item>(
            {
                'CONTEXT 1': [
                    'search',
                    $._decode_implicit<Selector>(() => _decode_Selector),
                ],
                'CONTEXT 2': [
                    'precise',
                    $._decode_implicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FetchArgument_item(el);
}

let _cached_encoder_for_FetchArgument_item: $.ASN1Encoder<FetchArgument_item> | null = null;

/**
 * @summary Encodes a(n) FetchArgument_item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchArgument_item, encoded as an ASN.1 Element.
 */
export function _encode_FetchArgument_item(
    value: FetchArgument_item,
    elGetter: $.ASN1Encoder<FetchArgument_item>
): _Element {
    if (!_cached_encoder_for_FetchArgument_item) {
        _cached_encoder_for_FetchArgument_item = $._encode_choice<FetchArgument_item>(
            {
                search: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Selector,
                    $.BER
                ),
                precise: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_SequenceNumber,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FetchArgument_item(value, elGetter);
}


/* eslint-enable */
