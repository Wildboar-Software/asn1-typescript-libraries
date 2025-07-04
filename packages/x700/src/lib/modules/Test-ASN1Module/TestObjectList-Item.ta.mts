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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta.mjs';
/**
 * @summary TestObjectList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestObjectList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class TestObjectList_Item {
    constructor(
        /**
         * @summary `tOClass`.
         * @public
         * @readonly
         */
        readonly tOClass: OBJECT_IDENTIFIER,
        /**
         * @summary `tOInstance`.
         * @public
         * @readonly
         */
        readonly tOInstance: OPTIONAL<ObjectInstance>,
        /**
         * @summary `referenceTOInstance`.
         * @public
         * @readonly
         */
        readonly referenceTOInstance: OPTIONAL<ObjectInstance>,
        /**
         * @summary `initialAttributeList`.
         * @public
         * @readonly
         */
        readonly initialAttributeList: OPTIONAL<AttributeList>
    ) {}

    /**
     * @summary Restructures an object into a TestObjectList_Item
     * @description
     *
     * This takes an `object` and converts it to a `TestObjectList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TestObjectList_Item`.
     * @returns {TestObjectList_Item}
     */
    public static _from_object(
        _o: { [_K in keyof TestObjectList_Item]: TestObjectList_Item[_K] }
    ): TestObjectList_Item {
        return new TestObjectList_Item(
            _o.tOClass,
            _o.tOInstance,
            _o.referenceTOInstance,
            _o.initialAttributeList
        );
    }
}

/**
 * @summary The Leading Root Component Types of TestObjectList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TestObjectList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'tOClass',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'tOInstance',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'referenceTOInstance',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'initialAttributeList',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of TestObjectList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TestObjectList_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TestObjectList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TestObjectList_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_TestObjectList_Item: $.ASN1Decoder<TestObjectList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TestObjectList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestObjectList_Item} The decoded data structure.
 */
export function _decode_TestObjectList_Item(el: _Element): TestObjectList_Item {
    if (!_cached_decoder_for_TestObjectList_Item) {
        _cached_decoder_for_TestObjectList_Item = function (
            el: _Element
        ): TestObjectList_Item {
            let tOClass!: OBJECT_IDENTIFIER;
            let tOInstance: OPTIONAL<ObjectInstance>;
            let referenceTOInstance: OPTIONAL<ObjectInstance>;
            let initialAttributeList: OPTIONAL<AttributeList>;
            const callbacks: $.DecodingMap = {
                tOClass: (_el: _Element): void => {
                    tOClass = $._decodeObjectIdentifier(_el);
                },
                tOInstance: (_el: _Element): void => {
                    tOInstance = $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                referenceTOInstance: (_el: _Element): void => {
                    referenceTOInstance = $._decode_explicit<ObjectInstance>(
                        () => _decode_ObjectInstance
                    )(_el);
                },
                initialAttributeList: (_el: _Element): void => {
                    initialAttributeList = $._decode_implicit<AttributeList>(
                        () => _decode_AttributeList
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TestObjectList_Item,
                _extension_additions_list_spec_for_TestObjectList_Item,
                _root_component_type_list_2_spec_for_TestObjectList_Item,
                undefined
            );
            return new TestObjectList_Item (
                tOClass,
                tOInstance,
                referenceTOInstance,
                initialAttributeList
            );
        };
    }
    return _cached_decoder_for_TestObjectList_Item(el);
}

let _cached_encoder_for_TestObjectList_Item: $.ASN1Encoder<TestObjectList_Item> | null = null;

/**
 * @summary Encodes a(n) TestObjectList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestObjectList_Item, encoded as an ASN.1 Element.
 */
export function _encode_TestObjectList_Item(
    value: TestObjectList_Item,
    elGetter: $.ASN1Encoder<TestObjectList_Item>
): _Element {
    if (!_cached_encoder_for_TestObjectList_Item) {
        _cached_encoder_for_TestObjectList_Item = function (
            value: TestObjectList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.tOClass,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.tOInstance === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_ObjectInstance,
                                  $.BER
                              )(value.tOInstance, $.BER),
                        /* IF_ABSENT  */ value.referenceTOInstance === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ObjectInstance,
                                  $.BER
                              )(value.referenceTOInstance, $.BER),
                        /* IF_ABSENT  */ value.initialAttributeList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_AttributeList,
                                  $.BER
                              )(value.initialAttributeList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TestObjectList_Item(value, elGetter);
}


/* eslint-enable */
