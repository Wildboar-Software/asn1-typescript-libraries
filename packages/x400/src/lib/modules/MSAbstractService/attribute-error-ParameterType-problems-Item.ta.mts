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
    AttributeProblem,
    _decode_AttributeProblem,
    _encode_AttributeProblem,
} from '../MSAbstractService/AttributeProblem.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";


/**
 * @summary attribute_error_ParameterType_problems_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attribute-error-ParameterType-problems-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class attribute_error_ParameterType_problems_Item {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: AttributeProblem,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a attribute_error_ParameterType_problems_Item
     * @description
     *
     * This takes an `object` and converts it to a `attribute_error_ParameterType_problems_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `attribute_error_ParameterType_problems_Item`.
     * @returns {attribute_error_ParameterType_problems_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof attribute_error_ParameterType_problems_Item]: attribute_error_ParameterType_problems_Item[_K];
        }
    ): attribute_error_ParameterType_problems_Item {
        return new attribute_error_ParameterType_problems_Item(
            _o.problem,
            _o.type_,
            _o.value
        );
    }
}

/**
 * @summary The Leading Root Component Types of attribute_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_attribute_error_ParameterType_problems_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'value',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of attribute_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_attribute_error_ParameterType_problems_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of attribute_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_attribute_error_ParameterType_problems_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_attribute_error_ParameterType_problems_Item: $.ASN1Decoder<attribute_error_ParameterType_problems_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) attribute_error_ParameterType_problems_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {attribute_error_ParameterType_problems_Item} The decoded data structure.
 */
export function _decode_attribute_error_ParameterType_problems_Item(
    el: _Element
): attribute_error_ParameterType_problems_Item {
    if (!_cached_decoder_for_attribute_error_ParameterType_problems_Item) {
        _cached_decoder_for_attribute_error_ParameterType_problems_Item = function (
            el: _Element
        ): attribute_error_ParameterType_problems_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: AttributeProblem;
            let type_!: AttributeType;
            let value: OPTIONAL<_Element>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<AttributeProblem>(
                        () => _decode_AttributeProblem
                    )(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
                value: (_el: _Element): void => {
                    value = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_attribute_error_ParameterType_problems_Item,
                _extension_additions_list_spec_for_attribute_error_ParameterType_problems_Item,
                _root_component_type_list_2_spec_for_attribute_error_ParameterType_problems_Item,
                undefined
            );
            return new attribute_error_ParameterType_problems_Item /* SET_CONSTRUCTOR_CALL */(
                problem,
                type_,
                value
            );
        };
    }
    return _cached_decoder_for_attribute_error_ParameterType_problems_Item(el);
}

let _cached_encoder_for_attribute_error_ParameterType_problems_Item: $.ASN1Encoder<attribute_error_ParameterType_problems_Item> | null = null;

/**
 * @summary Encodes a(n) attribute_error_ParameterType_problems_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The attribute_error_ParameterType_problems_Item, encoded as an ASN.1 Element.
 */
export function _encode_attribute_error_ParameterType_problems_Item(
    value: attribute_error_ParameterType_problems_Item,
    elGetter: $.ASN1Encoder<attribute_error_ParameterType_problems_Item>
): _Element {
    if (!_cached_encoder_for_attribute_error_ParameterType_problems_Item) {
        _cached_encoder_for_attribute_error_ParameterType_problems_Item = function (
            value: attribute_error_ParameterType_problems_Item        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_AttributeProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_AttributeType,
                            $.BER
                        )(value.type_, $.BER),
                        /* IF_ABSENT  */ value.value === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.value, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_attribute_error_ParameterType_problems_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
