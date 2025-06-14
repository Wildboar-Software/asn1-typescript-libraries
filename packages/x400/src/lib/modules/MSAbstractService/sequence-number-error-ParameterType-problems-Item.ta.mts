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
    SequenceNumberProblem,
    _decode_SequenceNumberProblem,
    _encode_SequenceNumberProblem,
} from '../MSAbstractService/SequenceNumberProblem.ta.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/* START_OF_SYMBOL_DEFINITION sequence_number_error_ParameterType_problems_Item */
/**
 * @summary sequence_number_error_ParameterType_problems_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sequence-number-error-ParameterType-problems-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class sequence_number_error_ParameterType_problems_Item {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: SequenceNumberProblem,
        /**
         * @summary `sequence_number`.
         * @public
         * @readonly
         */
        readonly sequence_number: SequenceNumber
    ) {}

    /**
     * @summary Restructures an object into a sequence_number_error_ParameterType_problems_Item
     * @description
     *
     * This takes an `object` and converts it to a `sequence_number_error_ParameterType_problems_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `sequence_number_error_ParameterType_problems_Item`.
     * @returns {sequence_number_error_ParameterType_problems_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof sequence_number_error_ParameterType_problems_Item]: sequence_number_error_ParameterType_problems_Item[_K];
        }
    ): sequence_number_error_ParameterType_problems_Item {
        return new sequence_number_error_ParameterType_problems_Item(
            _o.problem,
            _o.sequence_number
        );
    }
}
/* END_OF_SYMBOL_DEFINITION sequence_number_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_sequence_number_error_ParameterType_problems_Item */
/**
 * @summary The Leading Root Component Types of sequence_number_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_sequence_number_error_ParameterType_problems_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'sequence-number',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_sequence_number_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_sequence_number_error_ParameterType_problems_Item */
/**
 * @summary The Trailing Root Component Types of sequence_number_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_sequence_number_error_ParameterType_problems_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_sequence_number_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_sequence_number_error_ParameterType_problems_Item */
/**
 * @summary The Extension Addition Component Types of sequence_number_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_sequence_number_error_ParameterType_problems_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_sequence_number_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_sequence_number_error_ParameterType_problems_Item */
let _cached_decoder_for_sequence_number_error_ParameterType_problems_Item: $.ASN1Decoder<sequence_number_error_ParameterType_problems_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_sequence_number_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _decode_sequence_number_error_ParameterType_problems_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) sequence_number_error_ParameterType_problems_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {sequence_number_error_ParameterType_problems_Item} The decoded data structure.
 */
export function _decode_sequence_number_error_ParameterType_problems_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_sequence_number_error_ParameterType_problems_Item
    ) {
        _cached_decoder_for_sequence_number_error_ParameterType_problems_Item = function (
            el: _Element
        ): sequence_number_error_ParameterType_problems_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: SequenceNumberProblem;
            let sequence_number!: SequenceNumber;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<SequenceNumberProblem>(
                        () => _decode_SequenceNumberProblem
                    )(_el);
                },
                'sequence-number': (_el: _Element): void => {
                    sequence_number = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_sequence_number_error_ParameterType_problems_Item,
                _extension_additions_list_spec_for_sequence_number_error_ParameterType_problems_Item,
                _root_component_type_list_2_spec_for_sequence_number_error_ParameterType_problems_Item,
                undefined
            );
            return new sequence_number_error_ParameterType_problems_Item /* SET_CONSTRUCTOR_CALL */(
                problem,
                sequence_number
            );
        };
    }
    return _cached_decoder_for_sequence_number_error_ParameterType_problems_Item(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_sequence_number_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_sequence_number_error_ParameterType_problems_Item */
let _cached_encoder_for_sequence_number_error_ParameterType_problems_Item: $.ASN1Encoder<sequence_number_error_ParameterType_problems_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_sequence_number_error_ParameterType_problems_Item */

/* START_OF_SYMBOL_DEFINITION _encode_sequence_number_error_ParameterType_problems_Item */
/**
 * @summary Encodes a(n) sequence_number_error_ParameterType_problems_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The sequence_number_error_ParameterType_problems_Item, encoded as an ASN.1 Element.
 */
export function _encode_sequence_number_error_ParameterType_problems_Item(
    value: sequence_number_error_ParameterType_problems_Item,
    elGetter: $.ASN1Encoder<sequence_number_error_ParameterType_problems_Item>
) {
    if (
        !_cached_encoder_for_sequence_number_error_ParameterType_problems_Item
    ) {
        _cached_encoder_for_sequence_number_error_ParameterType_problems_Item = function (
            value: sequence_number_error_ParameterType_problems_Item        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_SequenceNumberProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_SequenceNumber,
                            $.BER
                        )(value.sequence_number, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_sequence_number_error_ParameterType_problems_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_sequence_number_error_ParameterType_problems_Item */

/* eslint-enable */
