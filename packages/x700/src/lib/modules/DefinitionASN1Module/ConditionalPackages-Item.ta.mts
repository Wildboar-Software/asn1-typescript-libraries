/* eslint-disable */
import {
    GraphicString,
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
/* START_OF_SYMBOL_DEFINITION ConditionalPackages_Item */
/**
 * @summary ConditionalPackages_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConditionalPackages-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ConditionalPackages_Item {
    constructor(
        /**
         * @summary `label`.
         * @public
         * @readonly
         */
        readonly label: TemplateLabel,
        /**
         * @summary `condition`.
         * @public
         * @readonly
         */
        readonly condition: GraphicString
    ) {}

    /**
     * @summary Restructures an object into a ConditionalPackages_Item
     * @description
     *
     * This takes an `object` and converts it to a `ConditionalPackages_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConditionalPackages_Item`.
     * @returns {ConditionalPackages_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof ConditionalPackages_Item]: ConditionalPackages_Item[_K];
        }
    ): ConditionalPackages_Item {
        return new ConditionalPackages_Item(_o.label, _o.condition);
    }
}
/* END_OF_SYMBOL_DEFINITION ConditionalPackages_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConditionalPackages_Item */
/**
 * @summary The Leading Root Component Types of ConditionalPackages_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConditionalPackages_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'label',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'condition',
        false,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConditionalPackages_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConditionalPackages_Item */
/**
 * @summary The Trailing Root Component Types of ConditionalPackages_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConditionalPackages_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConditionalPackages_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConditionalPackages_Item */
/**
 * @summary The Extension Addition Component Types of ConditionalPackages_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConditionalPackages_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConditionalPackages_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConditionalPackages_Item */
let _cached_decoder_for_ConditionalPackages_Item: $.ASN1Decoder<ConditionalPackages_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConditionalPackages_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ConditionalPackages_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ConditionalPackages_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConditionalPackages_Item} The decoded data structure.
 */
export function _decode_ConditionalPackages_Item(el: _Element) {
    if (!_cached_decoder_for_ConditionalPackages_Item) {
        _cached_decoder_for_ConditionalPackages_Item = function (
            el: _Element
        ): ConditionalPackages_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'ConditionalPackages-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'label';
            sequence[1].name = 'condition';
            let label!: TemplateLabel;
            let condition!: GraphicString;
            label = _decode_TemplateLabel(sequence[0]);
            condition = $._decodeGraphicString(sequence[1]);
            return new ConditionalPackages_Item(label, condition);
        };
    }
    return _cached_decoder_for_ConditionalPackages_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConditionalPackages_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConditionalPackages_Item */
let _cached_encoder_for_ConditionalPackages_Item: $.ASN1Encoder<ConditionalPackages_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConditionalPackages_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ConditionalPackages_Item */
/**
 * @summary Encodes a(n) ConditionalPackages_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConditionalPackages_Item, encoded as an ASN.1 Element.
 */
export function _encode_ConditionalPackages_Item(
    value: ConditionalPackages_Item,
    elGetter: $.ASN1Encoder<ConditionalPackages_Item>
) {
    if (!_cached_encoder_for_ConditionalPackages_Item) {
        _cached_encoder_for_ConditionalPackages_Item = function (
            value: ConditionalPackages_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TemplateLabel(
                            value.label,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeGraphicString(
                            value.condition,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConditionalPackages_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConditionalPackages_Item */

/* eslint-enable */
