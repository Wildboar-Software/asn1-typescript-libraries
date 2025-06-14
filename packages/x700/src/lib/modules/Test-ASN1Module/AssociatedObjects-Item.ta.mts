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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    AssociatedObjects_Item_associatedObjectInfo,
    _decode_AssociatedObjects_Item_associatedObjectInfo,
    _encode_AssociatedObjects_Item_associatedObjectInfo,
} from '../Test-ASN1Module/AssociatedObjects-Item-associatedObjectInfo.ta.mjs';
/* START_OF_SYMBOL_DEFINITION AssociatedObjects_Item */
/**
 * @summary AssociatedObjects_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociatedObjects-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AssociatedObjects_Item {
    constructor(
        /**
         * @summary `associatedObject`.
         * @public
         * @readonly
         */
        readonly associatedObject: ObjectInstance,
        /**
         * @summary `associatedObjectInfo`.
         * @public
         * @readonly
         */
        readonly associatedObjectInfo: AssociatedObjects_Item_associatedObjectInfo
    ) {}

    /**
     * @summary Restructures an object into a AssociatedObjects_Item
     * @description
     *
     * This takes an `object` and converts it to a `AssociatedObjects_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AssociatedObjects_Item`.
     * @returns {AssociatedObjects_Item}
     */
    public static _from_object(
        _o: { [_K in keyof AssociatedObjects_Item]: AssociatedObjects_Item[_K] }
    ): AssociatedObjects_Item {
        return new AssociatedObjects_Item(
            _o.associatedObject,
            _o.associatedObjectInfo
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AssociatedObjects_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AssociatedObjects_Item */
/**
 * @summary The Leading Root Component Types of AssociatedObjects_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AssociatedObjects_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'associatedObject',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'associatedObjectInfo',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AssociatedObjects_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AssociatedObjects_Item */
/**
 * @summary The Trailing Root Component Types of AssociatedObjects_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AssociatedObjects_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AssociatedObjects_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AssociatedObjects_Item */
/**
 * @summary The Extension Addition Component Types of AssociatedObjects_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AssociatedObjects_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AssociatedObjects_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociatedObjects_Item */
let _cached_decoder_for_AssociatedObjects_Item: $.ASN1Decoder<AssociatedObjects_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociatedObjects_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AssociatedObjects_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AssociatedObjects_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociatedObjects_Item} The decoded data structure.
 */
export function _decode_AssociatedObjects_Item(el: _Element) {
    if (!_cached_decoder_for_AssociatedObjects_Item) {
        _cached_decoder_for_AssociatedObjects_Item = function (
            el: _Element
        ): AssociatedObjects_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AssociatedObjects-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'associatedObject';
            sequence[1].name = 'associatedObjectInfo';
            let associatedObject!: ObjectInstance;
            let associatedObjectInfo!: AssociatedObjects_Item_associatedObjectInfo;
            associatedObject = _decode_ObjectInstance(sequence[0]);
            associatedObjectInfo = _decode_AssociatedObjects_Item_associatedObjectInfo(
                sequence[1]
            );
            return new AssociatedObjects_Item(
                associatedObject,
                associatedObjectInfo
            );
        };
    }
    return _cached_decoder_for_AssociatedObjects_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssociatedObjects_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociatedObjects_Item */
let _cached_encoder_for_AssociatedObjects_Item: $.ASN1Encoder<AssociatedObjects_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociatedObjects_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AssociatedObjects_Item */
/**
 * @summary Encodes a(n) AssociatedObjects_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociatedObjects_Item, encoded as an ASN.1 Element.
 */
export function _encode_AssociatedObjects_Item(
    value: AssociatedObjects_Item,
    elGetter: $.ASN1Encoder<AssociatedObjects_Item>
) {
    if (!_cached_encoder_for_AssociatedObjects_Item) {
        _cached_encoder_for_AssociatedObjects_Item = function (
            value: AssociatedObjects_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.associatedObject,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AssociatedObjects_Item_associatedObjectInfo(
                            value.associatedObjectInfo,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AssociatedObjects_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssociatedObjects_Item */

/* eslint-enable */
