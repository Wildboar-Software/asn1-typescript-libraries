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
    FetchRestrictionProblem,
    _decode_FetchRestrictionProblem,
    _encode_FetchRestrictionProblem,
} from '../MSAbstractService/FetchRestrictionProblem.ta.mjs';
import {
    FetchRestrictionError_problems_Item_restriction,
    _decode_FetchRestrictionError_problems_Item_restriction,
    _encode_FetchRestrictionError_problems_Item_restriction,
} from '../MhsAcctAsn1Module/FetchRestrictionError-problems-Item-restriction.ta.mjs';
/**
 * @summary FetchRestrictionError_problems_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchRestrictionError-problems-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class FetchRestrictionError_problems_Item {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: FetchRestrictionProblem,
        /**
         * @summary `restriction`.
         * @public
         * @readonly
         */
        readonly restriction: FetchRestrictionError_problems_Item_restriction
    ) {}

    /**
     * @summary Restructures an object into a FetchRestrictionError_problems_Item
     * @description
     *
     * This takes an `object` and converts it to a `FetchRestrictionError_problems_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FetchRestrictionError_problems_Item`.
     * @returns {FetchRestrictionError_problems_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof FetchRestrictionError_problems_Item]: FetchRestrictionError_problems_Item[_K];
        }
    ): FetchRestrictionError_problems_Item {
        return new FetchRestrictionError_problems_Item(
            _o.problem,
            _o.restriction
        );
    }
}

/**
 * @summary The Leading Root Component Types of FetchRestrictionError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FetchRestrictionError_problems_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'restriction',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of FetchRestrictionError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FetchRestrictionError_problems_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FetchRestrictionError_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FetchRestrictionError_problems_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_FetchRestrictionError_problems_Item: $.ASN1Decoder<FetchRestrictionError_problems_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FetchRestrictionError_problems_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchRestrictionError_problems_Item} The decoded data structure.
 */
export function _decode_FetchRestrictionError_problems_Item(el: _Element) {
    if (!_cached_decoder_for_FetchRestrictionError_problems_Item) {
        _cached_decoder_for_FetchRestrictionError_problems_Item = function (
            el: _Element
        ): FetchRestrictionError_problems_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: FetchRestrictionProblem;
            let restriction!: FetchRestrictionError_problems_Item_restriction;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_implicit<FetchRestrictionProblem>(
                        () => _decode_FetchRestrictionProblem
                    )(_el);
                },
                restriction: (_el: _Element): void => {
                    restriction = _decode_FetchRestrictionError_problems_Item_restriction(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FetchRestrictionError_problems_Item,
                _extension_additions_list_spec_for_FetchRestrictionError_problems_Item,
                _root_component_type_list_2_spec_for_FetchRestrictionError_problems_Item,
                undefined
            );
            return new FetchRestrictionError_problems_Item /* SET_CONSTRUCTOR_CALL */(
                problem,
                restriction
            );
        };
    }
    return _cached_decoder_for_FetchRestrictionError_problems_Item(el);
}

let _cached_encoder_for_FetchRestrictionError_problems_Item: $.ASN1Encoder<FetchRestrictionError_problems_Item> | null = null;

/**
 * @summary Encodes a(n) FetchRestrictionError_problems_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchRestrictionError_problems_Item, encoded as an ASN.1 Element.
 */
export function _encode_FetchRestrictionError_problems_Item(
    value: FetchRestrictionError_problems_Item,
    elGetter: $.ASN1Encoder<FetchRestrictionError_problems_Item>
) {
    if (!_cached_encoder_for_FetchRestrictionError_problems_Item) {
        _cached_encoder_for_FetchRestrictionError_problems_Item = function (
            value: FetchRestrictionError_problems_Item        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            3,
                            () => _encode_FetchRestrictionProblem,
                            $.BER
                        )(value.problem, $.BER),
                        /* REQUIRED   */ _encode_FetchRestrictionError_problems_Item_restriction(
                            value.restriction,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FetchRestrictionError_problems_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
