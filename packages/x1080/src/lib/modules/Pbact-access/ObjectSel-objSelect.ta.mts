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
    TargetSelect,
    _decode_TargetSelect,
    _encode_TargetSelect,
} from '../Pbact-access/TargetSelect.ta.mjs';
import {
    ObjectSel_objSelect_objectNames_Item,
    _decode_ObjectSel_objSelect_objectNames_Item,
    _encode_ObjectSel_objSelect_objectNames_Item,
} from '../Pbact-access/ObjectSel-objSelect-objectNames-Item.ta.mjs';

/**
 * @summary ObjectSel_objSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectSel-objSelect ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ObjectSel_objSelect =
    | { allObj: TargetSelect } /* CHOICE_ALT_ROOT */
    | {
          objectNames: ObjectSel_objSelect_objectNames_Item[];
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ObjectSel_objSelect: $.ASN1Decoder<ObjectSel_objSelect> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectSel_objSelect
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectSel_objSelect} The decoded data structure.
 */
export function _decode_ObjectSel_objSelect(el: _Element): ObjectSel_objSelect {
    if (!_cached_decoder_for_ObjectSel_objSelect) {
        _cached_decoder_for_ObjectSel_objSelect = $._decode_extensible_choice<ObjectSel_objSelect>(
            {
                'CONTEXT 0': [
                    'allObj',
                    $._decode_implicit<TargetSelect>(
                        () => _decode_TargetSelect
                    ),
                ],
                'CONTEXT 1': [
                    'objectNames',
                    $._decode_implicit<ObjectSel_objSelect_objectNames_Item[]>(
                        () =>
                            $._decodeSequenceOf<ObjectSel_objSelect_objectNames_Item>(
                                () =>
                                    _decode_ObjectSel_objSelect_objectNames_Item
                            )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ObjectSel_objSelect(el);
}


let _cached_encoder_for_ObjectSel_objSelect: $.ASN1Encoder<ObjectSel_objSelect> | null = null;


/**
 * @summary Encodes a(n) ObjectSel_objSelect into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectSel_objSelect, encoded as an ASN.1 Element.
 */
export function _encode_ObjectSel_objSelect(
    value: ObjectSel_objSelect,
    elGetter: $.ASN1Encoder<ObjectSel_objSelect>
): _Element {
    if (!_cached_encoder_for_ObjectSel_objSelect) {
        _cached_encoder_for_ObjectSel_objSelect = $._encode_choice<ObjectSel_objSelect>(
            {
                allObj: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TargetSelect,
                    $.BER
                ),
                objectNames: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<ObjectSel_objSelect_objectNames_Item>(
                            () => _encode_ObjectSel_objSelect_objectNames_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ObjectSel_objSelect(value, elGetter);
}


/* eslint-enable */
