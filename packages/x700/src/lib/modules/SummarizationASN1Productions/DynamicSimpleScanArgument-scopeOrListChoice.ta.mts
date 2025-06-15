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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
    _decode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
    _encode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
} from '../SummarizationASN1Productions/DynamicSimpleScanArgument-scopeOrListChoice-scopedSelection.ta.mjs';
import {
    ObjectList,
    _decode_ObjectList,
    _encode_ObjectList,
} from '../SummarizationASN1Productions/ObjectList.ta.mjs';
/**
 * @summary DynamicSimpleScanArgument_scopeOrListChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DynamicSimpleScanArgument-scopeOrListChoice ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DynamicSimpleScanArgument_scopeOrListChoice =
    | {
          scopedSelection: DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection;
      } /* CHOICE_ALT_ROOT */
    | { objectList: ObjectList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice: $.ASN1Decoder<DynamicSimpleScanArgument_scopeOrListChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DynamicSimpleScanArgument_scopeOrListChoice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DynamicSimpleScanArgument_scopeOrListChoice} The decoded data structure.
 */
export function _decode_DynamicSimpleScanArgument_scopeOrListChoice(
    el: _Element
) {
    if (!_cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice) {
        _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice = $._decode_inextensible_choice<DynamicSimpleScanArgument_scopeOrListChoice>(
            {
                'CONTEXT 2': [
                    'scopedSelection',
                    $._decode_implicit<DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection>(
                        () =>
                            _decode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection
                    ),
                ],
                'CONTEXT 3': [
                    'objectList',
                    $._decode_implicit<ObjectList>(() => _decode_ObjectList),
                ],
            }
        );
    }
    return _cached_decoder_for_DynamicSimpleScanArgument_scopeOrListChoice(el);
}

let _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice: $.ASN1Encoder<DynamicSimpleScanArgument_scopeOrListChoice> | null = null;

/**
 * @summary Encodes a(n) DynamicSimpleScanArgument_scopeOrListChoice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DynamicSimpleScanArgument_scopeOrListChoice, encoded as an ASN.1 Element.
 */
export function _encode_DynamicSimpleScanArgument_scopeOrListChoice(
    value: DynamicSimpleScanArgument_scopeOrListChoice,
    elGetter: $.ASN1Encoder<DynamicSimpleScanArgument_scopeOrListChoice>
) {
    if (!_cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice) {
        _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice = $._encode_choice<DynamicSimpleScanArgument_scopeOrListChoice>(
            {
                scopedSelection: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        _encode_DynamicSimpleScanArgument_scopeOrListChoice_scopedSelection,
                    $.BER
                ),
                objectList: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ObjectList,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DynamicSimpleScanArgument_scopeOrListChoice(
        value,
        elGetter
    );
}


/* eslint-enable */
