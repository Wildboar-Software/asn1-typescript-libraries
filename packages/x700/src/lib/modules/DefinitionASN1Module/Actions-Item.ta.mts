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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TemplateLabel,
    _decode_TemplateLabel,
    _encode_TemplateLabel,
} from '../DefinitionASN1Module/TemplateLabel.ta.mjs';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
/**
 * @summary Actions_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Actions-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Actions_Item {
    constructor(
        /**
         * @summary `action`.
         * @public
         * @readonly
         */
        readonly action: TemplateLabel,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a Actions_Item
     * @description
     *
     * This takes an `object` and converts it to a `Actions_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Actions_Item`.
     * @returns {Actions_Item}
     */
    public static _from_object(
        _o: { [_K in keyof Actions_Item]: Actions_Item[_K] }
    ): Actions_Item {
        return new Actions_Item(_o.action, _o.parameter);
    }
}

/**
 * @summary The Leading Root Component Types of Actions_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Actions_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'action',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'parameter',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of Actions_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Actions_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Actions_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Actions_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_Actions_Item: $.ASN1Decoder<Actions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Actions_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Actions_Item} The decoded data structure.
 */
export function _decode_Actions_Item(el: _Element) {
    if (!_cached_decoder_for_Actions_Item) {
        _cached_decoder_for_Actions_Item = function (
            el: _Element
        ): Actions_Item {
            let action!: TemplateLabel;
            let parameter: OPTIONAL<TemplateList>;
            const callbacks: $.DecodingMap = {
                action: (_el: _Element): void => {
                    action = $._decode_implicit<TemplateLabel>(
                        () => _decode_TemplateLabel
                    )(_el);
                },
                parameter: (_el: _Element): void => {
                    parameter = $._decode_implicit<TemplateList>(
                        () => _decode_TemplateList
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Actions_Item,
                _extension_additions_list_spec_for_Actions_Item,
                _root_component_type_list_2_spec_for_Actions_Item,
                undefined
            );
            return new Actions_Item (
                action,
                parameter
            );
        };
    }
    return _cached_decoder_for_Actions_Item(el);
}

let _cached_encoder_for_Actions_Item: $.ASN1Encoder<Actions_Item> | null = null;

/**
 * @summary Encodes a(n) Actions_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Actions_Item, encoded as an ASN.1 Element.
 */
export function _encode_Actions_Item(
    value: Actions_Item,
    elGetter: $.ASN1Encoder<Actions_Item>
) {
    if (!_cached_encoder_for_Actions_Item) {
        _cached_encoder_for_Actions_Item = function (
            value: Actions_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_TemplateLabel,
                            $.BER
                        )(value.action, $.BER),
                        /* IF_ABSENT  */ value.parameter === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_TemplateList,
                                  $.BER
                              )(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Actions_Item(value, elGetter);
}


/* eslint-enable */
