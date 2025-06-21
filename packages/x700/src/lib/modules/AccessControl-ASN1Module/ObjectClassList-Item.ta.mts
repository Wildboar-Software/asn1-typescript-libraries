/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
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
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectClass.ta.mjs';
/**
 * @summary ObjectClassList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ObjectClassList_Item {
    constructor(
        /**
         * @summary `objectClass`.
         * @public
         * @readonly
         */
        readonly objectClass: ObjectClass,
        /**
         * @summary `nameBinding`.
         * @public
         * @readonly
         */
        readonly nameBinding: OPTIONAL<OBJECT_IDENTIFIER>
    ) {}

    /**
     * @summary Restructures an object into a ObjectClassList_Item
     * @description
     *
     * This takes an `object` and converts it to a `ObjectClassList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectClassList_Item`.
     * @returns {ObjectClassList_Item}
     */
    public static _from_object(
        _o: { [_K in keyof ObjectClassList_Item]: ObjectClassList_Item[_K] }
    ): ObjectClassList_Item {
        return new ObjectClassList_Item(_o.objectClass, _o.nameBinding);
    }
}

/**
 * @summary The Leading Root Component Types of ObjectClassList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectClassList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'objectClass',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'nameBinding',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ObjectClassList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectClassList_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ObjectClassList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectClassList_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_ObjectClassList_Item: $.ASN1Decoder<ObjectClassList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassList_Item} The decoded data structure.
 */
export function _decode_ObjectClassList_Item(el: _Element) {
    if (!_cached_decoder_for_ObjectClassList_Item) {
        _cached_decoder_for_ObjectClassList_Item = function (
            el: _Element
        ): ObjectClassList_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let objectClass!: ObjectClass;
            let nameBinding: OPTIONAL<OBJECT_IDENTIFIER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                objectClass: (_el: _Element): void => {
                    objectClass = $._decode_explicit<ObjectClass>(
                        () => _decode_ObjectClass
                    )(_el);
                },
                nameBinding: (_el: _Element): void => {
                    nameBinding = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectClassList_Item,
                _extension_additions_list_spec_for_ObjectClassList_Item,
                _root_component_type_list_2_spec_for_ObjectClassList_Item,
                undefined
            );
            return new ObjectClassList_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                objectClass,
                nameBinding
            );
        };
    }
    return _cached_decoder_for_ObjectClassList_Item(el);
}

let _cached_encoder_for_ObjectClassList_Item: $.ASN1Encoder<ObjectClassList_Item> | null = null;

/**
 * @summary Encodes a(n) ObjectClassList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassList_Item, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassList_Item(
    value: ObjectClassList_Item,
    elGetter: $.ASN1Encoder<ObjectClassList_Item>
) {
    if (!_cached_encoder_for_ObjectClassList_Item) {
        _cached_encoder_for_ObjectClassList_Item = function (
            value: ObjectClassList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_ObjectClass,
                            $.BER
                        )(value.objectClass, $.BER),
                        /* IF_ABSENT  */ value.nameBinding === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeObjectIdentifier,
                                  $.BER
                              )(value.nameBinding, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ObjectClassList_Item(value, elGetter);
}


/* eslint-enable */
