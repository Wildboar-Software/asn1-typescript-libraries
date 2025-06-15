/* eslint-disable */
import {
    OPTIONAL,
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
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
import {
    PropertyList,
    _decode_PropertyList,
    _encode_PropertyList,
} from '../DefinitionASN1Module/PropertyList.ta.mjs';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
/**
 * @summary Attributes_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attributes-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Attributes_Item {
    constructor(
        /**
         * @summary `attributeLabel`.
         * @public
         * @readonly
         */
        readonly attributeLabel: TemplateLabel,
        /**
         * @summary `property`.
         * @public
         * @readonly
         */
        readonly property: PropertyList,
        /**
         * @summary `parameterLabel`.
         * @public
         * @readonly
         */
        readonly parameterLabel: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a Attributes_Item
     * @description
     *
     * This takes an `object` and converts it to a `Attributes_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Attributes_Item`.
     * @returns {Attributes_Item}
     */
    public static _from_object(
        _o: { [_K in keyof Attributes_Item]: Attributes_Item[_K] }
    ): Attributes_Item {
        return new Attributes_Item(
            _o.attributeLabel,
            _o.property,
            _o.parameterLabel
        );
    }
}

/**
 * @summary The Leading Root Component Types of Attributes_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attributes_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attributeLabel',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'property',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameterLabel',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of Attributes_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attributes_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Attributes_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attributes_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_Attributes_Item: $.ASN1Decoder<Attributes_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Attributes_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attributes_Item} The decoded data structure.
 */
export function _decode_Attributes_Item(el: _Element) {
    if (!_cached_decoder_for_Attributes_Item) {
        _cached_decoder_for_Attributes_Item = function (
            el: _Element
        ): Attributes_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeLabel!: TemplateLabel;
            let property!: PropertyList;
            let parameterLabel: OPTIONAL<TemplateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeLabel: (_el: _Element): void => {
                    attributeLabel = _decode_TemplateLabel(_el);
                },
                property: (_el: _Element): void => {
                    property = _decode_PropertyList(_el);
                },
                parameterLabel: (_el: _Element): void => {
                    parameterLabel = _decode_TemplateList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Attributes_Item,
                _extension_additions_list_spec_for_Attributes_Item,
                _root_component_type_list_2_spec_for_Attributes_Item,
                undefined
            );
            return new Attributes_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                attributeLabel,
                property,
                parameterLabel
            );
        };
    }
    return _cached_decoder_for_Attributes_Item(el);
}

let _cached_encoder_for_Attributes_Item: $.ASN1Encoder<Attributes_Item> | null = null;

/**
 * @summary Encodes a(n) Attributes_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attributes_Item, encoded as an ASN.1 Element.
 */
export function _encode_Attributes_Item(
    value: Attributes_Item,
    elGetter: $.ASN1Encoder<Attributes_Item>
) {
    if (!_cached_encoder_for_Attributes_Item) {
        _cached_encoder_for_Attributes_Item = function (
            value: Attributes_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TemplateLabel(
                            value.attributeLabel,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_PropertyList(
                            value.property,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.parameterLabel === undefined
                            ? undefined
                            : _encode_TemplateList(value.parameterLabel, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Attributes_Item(value, elGetter);
}


/* eslint-enable */
