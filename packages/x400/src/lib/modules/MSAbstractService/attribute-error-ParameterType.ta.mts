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
    attribute_error_ParameterType_problems_Item,
    _decode_attribute_error_ParameterType_problems_Item,
    _encode_attribute_error_ParameterType_problems_Item,
} from '../MSAbstractService/attribute-error-ParameterType-problems-Item.ta.mjs';
/**
 * @summary attribute_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attribute-error-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class attribute_error_ParameterType {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: attribute_error_ParameterType_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a attribute_error_ParameterType
     * @description
     *
     * This takes an `object` and converts it to a `attribute_error_ParameterType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `attribute_error_ParameterType`.
     * @returns {attribute_error_ParameterType}
     */
    public static _from_object(
        _o: {
            [_K in keyof attribute_error_ParameterType]: attribute_error_ParameterType[_K];
        }
    ): attribute_error_ParameterType {
        return new attribute_error_ParameterType(_o.problems);
    }
}

/**
 * @summary The Leading Root Component Types of attribute_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_attribute_error_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of attribute_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_attribute_error_ParameterType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of attribute_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_attribute_error_ParameterType: $.ComponentSpec[] = [];

let _cached_decoder_for_attribute_error_ParameterType: $.ASN1Decoder<attribute_error_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) attribute_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {attribute_error_ParameterType} The decoded data structure.
 */
export function _decode_attribute_error_ParameterType(el: _Element): attribute_error_ParameterType {
    if (!_cached_decoder_for_attribute_error_ParameterType) {
        _cached_decoder_for_attribute_error_ParameterType = function (
            el: _Element
        ): attribute_error_ParameterType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: attribute_error_ParameterType_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_explicit<
                        attribute_error_ParameterType_problems_Item[]
                    >(() =>
                        $._decodeSetOf<attribute_error_ParameterType_problems_Item>(
                            () =>
                                _decode_attribute_error_ParameterType_problems_Item
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_attribute_error_ParameterType,
                _extension_additions_list_spec_for_attribute_error_ParameterType,
                _root_component_type_list_2_spec_for_attribute_error_ParameterType,
                undefined
            );
            return new attribute_error_ParameterType /* SET_CONSTRUCTOR_CALL */(
                problems
            );
        };
    }
    return _cached_decoder_for_attribute_error_ParameterType(el);
}

let _cached_encoder_for_attribute_error_ParameterType: $.ASN1Encoder<attribute_error_ParameterType> | null = null;

/**
 * @summary Encodes a(n) attribute_error_ParameterType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The attribute_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_attribute_error_ParameterType(
    value: attribute_error_ParameterType,
    elGetter: $.ASN1Encoder<attribute_error_ParameterType>
): _Element {
    if (!_cached_encoder_for_attribute_error_ParameterType) {
        _cached_encoder_for_attribute_error_ParameterType = function (
            value: attribute_error_ParameterType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<attribute_error_ParameterType_problems_Item>(
                                    () =>
                                        _encode_attribute_error_ParameterType_problems_Item,
                                    $.BER
                                ),
                            $.BER
                        )(value.problems, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_attribute_error_ParameterType(value, elGetter);
}


/* eslint-enable */
