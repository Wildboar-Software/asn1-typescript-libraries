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
    AutoActionRequestProblem,
    _decode_AutoActionRequestProblem,
    _encode_AutoActionRequestProblem,
} from '../MSAbstractService/AutoActionRequestProblem.ta.mjs';
import {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
/**
 * @summary AutoActionRequestError_problems_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionRequestError-problems-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class AutoActionRequestError_problems_Item {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: AutoActionRequestProblem,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AutoActionType
    ) {}

    /**
     * @summary Restructures an object into a AutoActionRequestError_problems_Item
     * @description
     *
     * This takes an `object` and converts it to a `AutoActionRequestError_problems_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoActionRequestError_problems_Item`.
     * @returns {AutoActionRequestError_problems_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof AutoActionRequestError_problems_Item]: AutoActionRequestError_problems_Item[_K];
        }
    ): AutoActionRequestError_problems_Item {
        return new AutoActionRequestError_problems_Item(_o.problem, _o.type_);
    }
}

/**
 * @summary The Leading Root Component Types of AutoActionRequestError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoActionRequestError_problems_Item: $.ComponentSpec[] = [
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
];

/**
 * @summary The Trailing Root Component Types of AutoActionRequestError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoActionRequestError_problems_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AutoActionRequestError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoActionRequestError_problems_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_AutoActionRequestError_problems_Item: $.ASN1Decoder<AutoActionRequestError_problems_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionRequestError_problems_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionRequestError_problems_Item} The decoded data structure.
 */
export function _decode_AutoActionRequestError_problems_Item(el: _Element): AutoActionRequestError_problems_Item {
    if (!_cached_decoder_for_AutoActionRequestError_problems_Item) {
        _cached_decoder_for_AutoActionRequestError_problems_Item = function (
            el: _Element
        ): AutoActionRequestError_problems_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: AutoActionRequestProblem;
            let type_!: AutoActionType;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_implicit<AutoActionRequestProblem>(
                        () => _decode_AutoActionRequestProblem
                    )(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decode_implicit<AutoActionType>(
                        () => _decode_AutoActionType
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoActionRequestError_problems_Item,
                _extension_additions_list_spec_for_AutoActionRequestError_problems_Item,
                _root_component_type_list_2_spec_for_AutoActionRequestError_problems_Item,
                undefined
            );
            return new AutoActionRequestError_problems_Item /* SET_CONSTRUCTOR_CALL */(
                problem,
                type_
            );
        };
    }
    return _cached_decoder_for_AutoActionRequestError_problems_Item(el);
}

let _cached_encoder_for_AutoActionRequestError_problems_Item: $.ASN1Encoder<AutoActionRequestError_problems_Item> | null = null;

/**
 * @summary Encodes a(n) AutoActionRequestError_problems_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionRequestError_problems_Item, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionRequestError_problems_Item(
    value: AutoActionRequestError_problems_Item,
    elGetter: $.ASN1Encoder<AutoActionRequestError_problems_Item>
): _Element {
    if (!_cached_encoder_for_AutoActionRequestError_problems_Item) {
        _cached_encoder_for_AutoActionRequestError_problems_Item = function (
            value: AutoActionRequestError_problems_Item        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_AutoActionRequestProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_AutoActionType,
                            $.BER
                        )(value.type_, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AutoActionRequestError_problems_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
