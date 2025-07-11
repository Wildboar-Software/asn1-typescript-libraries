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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/x500/InformationFramework';

/**
 * @summary ObjectSel_objSelect_objectNames_Item_object
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectSel-objSelect-objectNames-Item-object ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ObjectSel_objSelect_objectNames_Item_object =
    | { names: DistinguishedName[] } /* CHOICE_ALT_ROOT */
    | { subtree: DistinguishedName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ObjectSel_objSelect_objectNames_Item_object: $.ASN1Decoder<ObjectSel_objSelect_objectNames_Item_object> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectSel_objSelect_objectNames_Item_object
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectSel_objSelect_objectNames_Item_object} The decoded data structure.
 */
export function _decode_ObjectSel_objSelect_objectNames_Item_object(
    el: _Element
): ObjectSel_objSelect_objectNames_Item_object {
    if (!_cached_decoder_for_ObjectSel_objSelect_objectNames_Item_object) {
        _cached_decoder_for_ObjectSel_objSelect_objectNames_Item_object = $._decode_extensible_choice<ObjectSel_objSelect_objectNames_Item_object>(
            {
                'CONTEXT 1': [
                    'names',
                    $._decode_implicit<DistinguishedName[]>(() =>
                        $._decodeSequenceOf<DistinguishedName>(
                            () => _decode_DistinguishedName
                        )
                    ),
                ],
                'CONTEXT 2': [
                    'subtree',
                    $._decode_implicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ObjectSel_objSelect_objectNames_Item_object(el);
}


let _cached_encoder_for_ObjectSel_objSelect_objectNames_Item_object: $.ASN1Encoder<ObjectSel_objSelect_objectNames_Item_object> | null = null;


/**
 * @summary Encodes a(n) ObjectSel_objSelect_objectNames_Item_object into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectSel_objSelect_objectNames_Item_object, encoded as an ASN.1 Element.
 */
export function _encode_ObjectSel_objSelect_objectNames_Item_object(
    value: ObjectSel_objSelect_objectNames_Item_object,
    elGetter: $.ASN1Encoder<ObjectSel_objSelect_objectNames_Item_object>
): _Element {
    if (!_cached_encoder_for_ObjectSel_objSelect_objectNames_Item_object) {
        _cached_encoder_for_ObjectSel_objSelect_objectNames_Item_object = $._encode_choice<ObjectSel_objSelect_objectNames_Item_object>(
            {
                names: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<DistinguishedName>(
                            () => _encode_DistinguishedName,
                            $.BER
                        ),
                    $.BER
                ),
                subtree: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_DistinguishedName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ObjectSel_objSelect_objectNames_Item_object(
        value,
        elGetter
    );
}


/* eslint-enable */
