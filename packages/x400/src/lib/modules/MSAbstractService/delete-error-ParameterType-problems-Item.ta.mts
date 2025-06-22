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
    DeleteProblem,
    _decode_DeleteProblem,
    _encode_DeleteProblem,
} from '../MSAbstractService/DeleteProblem.ta.mjs';
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.mjs';
/**
 * @summary delete_error_ParameterType_problems_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delete-error-ParameterType-problems-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class delete_error_ParameterType_problems_Item {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: DeleteProblem,
        /**
         * @summary `sequence_number`.
         * @public
         * @readonly
         */
        readonly sequence_number: SequenceNumber
    ) {}

    /**
     * @summary Restructures an object into a delete_error_ParameterType_problems_Item
     * @description
     *
     * This takes an `object` and converts it to a `delete_error_ParameterType_problems_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `delete_error_ParameterType_problems_Item`.
     * @returns {delete_error_ParameterType_problems_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof delete_error_ParameterType_problems_Item]: delete_error_ParameterType_problems_Item[_K];
        }
    ): delete_error_ParameterType_problems_Item {
        return new delete_error_ParameterType_problems_Item(
            _o.problem,
            _o.sequence_number
        );
    }
}

/**
 * @summary The Leading Root Component Types of delete_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_delete_error_ParameterType_problems_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'sequence-number',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of delete_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_delete_error_ParameterType_problems_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of delete_error_ParameterType_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_delete_error_ParameterType_problems_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_delete_error_ParameterType_problems_Item: $.ASN1Decoder<delete_error_ParameterType_problems_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) delete_error_ParameterType_problems_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {delete_error_ParameterType_problems_Item} The decoded data structure.
 */
export function _decode_delete_error_ParameterType_problems_Item(el: _Element) {
    if (!_cached_decoder_for_delete_error_ParameterType_problems_Item) {
        _cached_decoder_for_delete_error_ParameterType_problems_Item = function (
            el: _Element
        ): delete_error_ParameterType_problems_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: DeleteProblem;
            let sequence_number!: SequenceNumber;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<DeleteProblem>(
                        () => _decode_DeleteProblem
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
                _root_component_type_list_1_spec_for_delete_error_ParameterType_problems_Item,
                _extension_additions_list_spec_for_delete_error_ParameterType_problems_Item,
                _root_component_type_list_2_spec_for_delete_error_ParameterType_problems_Item,
                undefined
            );
            return new delete_error_ParameterType_problems_Item /* SET_CONSTRUCTOR_CALL */(
                problem,
                sequence_number
            );
        };
    }
    return _cached_decoder_for_delete_error_ParameterType_problems_Item(el);
}

let _cached_encoder_for_delete_error_ParameterType_problems_Item: $.ASN1Encoder<delete_error_ParameterType_problems_Item> | null = null;

/**
 * @summary Encodes a(n) delete_error_ParameterType_problems_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The delete_error_ParameterType_problems_Item, encoded as an ASN.1 Element.
 */
export function _encode_delete_error_ParameterType_problems_Item(
    value: delete_error_ParameterType_problems_Item,
    elGetter: $.ASN1Encoder<delete_error_ParameterType_problems_Item>
) {
    if (!_cached_encoder_for_delete_error_ParameterType_problems_Item) {
        _cached_encoder_for_delete_error_ParameterType_problems_Item = function (
            value: delete_error_ParameterType_problems_Item        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_DeleteProblem,
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
    return _cached_encoder_for_delete_error_ParameterType_problems_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
