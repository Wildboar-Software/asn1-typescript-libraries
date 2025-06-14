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
    sequence_number_error_ParameterType_problems_Item,
    _decode_sequence_number_error_ParameterType_problems_Item,
    _encode_sequence_number_error_ParameterType_problems_Item,
} from '../MSAbstractService/sequence-number-error-ParameterType-problems-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION sequence_number_error_ParameterType */
/**
 * @summary sequence_number_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sequence-number-error-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class sequence_number_error_ParameterType {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: sequence_number_error_ParameterType_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a sequence_number_error_ParameterType
     * @description
     *
     * This takes an `object` and converts it to a `sequence_number_error_ParameterType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `sequence_number_error_ParameterType`.
     * @returns {sequence_number_error_ParameterType}
     */
    public static _from_object(
        _o: {
            [_K in keyof sequence_number_error_ParameterType]: sequence_number_error_ParameterType[_K];
        }
    ): sequence_number_error_ParameterType {
        return new sequence_number_error_ParameterType(_o.problems);
    }
}
/* END_OF_SYMBOL_DEFINITION sequence_number_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_sequence_number_error_ParameterType */
/**
 * @summary The Leading Root Component Types of sequence_number_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_sequence_number_error_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_sequence_number_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_sequence_number_error_ParameterType */
/**
 * @summary The Trailing Root Component Types of sequence_number_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_sequence_number_error_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_sequence_number_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_sequence_number_error_ParameterType */
/**
 * @summary The Extension Addition Component Types of sequence_number_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_sequence_number_error_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_sequence_number_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_sequence_number_error_ParameterType */
let _cached_decoder_for_sequence_number_error_ParameterType: $.ASN1Decoder<sequence_number_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_sequence_number_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_sequence_number_error_ParameterType */
/**
 * @summary Decodes an ASN.1 element into a(n) sequence_number_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {sequence_number_error_ParameterType} The decoded data structure.
 */
export function _decode_sequence_number_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_sequence_number_error_ParameterType) {
        _cached_decoder_for_sequence_number_error_ParameterType = function (
            el: _Element
        ): sequence_number_error_ParameterType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: sequence_number_error_ParameterType_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_explicit<
                        sequence_number_error_ParameterType_problems_Item[]
                    >(() =>
                        $._decodeSetOf<sequence_number_error_ParameterType_problems_Item>(
                            () =>
                                _decode_sequence_number_error_ParameterType_problems_Item
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_sequence_number_error_ParameterType,
                _extension_additions_list_spec_for_sequence_number_error_ParameterType,
                _root_component_type_list_2_spec_for_sequence_number_error_ParameterType,
                undefined
            );
            return new sequence_number_error_ParameterType /* SET_CONSTRUCTOR_CALL */(
                problems
            );
        };
    }
    return _cached_decoder_for_sequence_number_error_ParameterType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_sequence_number_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_sequence_number_error_ParameterType */
let _cached_encoder_for_sequence_number_error_ParameterType: $.ASN1Encoder<sequence_number_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_sequence_number_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_sequence_number_error_ParameterType */
/**
 * @summary Encodes a(n) sequence_number_error_ParameterType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The sequence_number_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_sequence_number_error_ParameterType(
    value: sequence_number_error_ParameterType,
    elGetter: $.ASN1Encoder<sequence_number_error_ParameterType>
) {
    if (!_cached_encoder_for_sequence_number_error_ParameterType) {
        _cached_encoder_for_sequence_number_error_ParameterType = function (
            value: sequence_number_error_ParameterType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () =>
                                $._encodeSetOf<sequence_number_error_ParameterType_problems_Item>(
                                    () =>
                                        _encode_sequence_number_error_ParameterType_problems_Item,
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
    return _cached_encoder_for_sequence_number_error_ParameterType(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_sequence_number_error_ParameterType */

/* eslint-enable */
