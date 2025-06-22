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
import * as $ from '@wildboar/asn1/functional';
import {
    FetchRestrictionError_problems_Item,
    _decode_FetchRestrictionError_problems_Item,
    _encode_FetchRestrictionError_problems_Item,
} from '../MhsAcctAsn1Module/FetchRestrictionError-problems-Item.ta.mjs';
/**
 * @summary FetchRestrictionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FetchRestrictionError ::= SET {
 *   problems
 *     [0]  SET SIZE (1..ub-default-registrations) OF
 *            SET {problem      [3]  FetchRestrictionProblem,
 *                 restriction
 *                   CHOICE {content-type    [0]  ContentType,
 *                           eit             [1]  MS-EITs,
 *                           content-length  [2]  ContentLength}}
 * }
 * ```
 *
 * @class
 */
export class FetchRestrictionError {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: FetchRestrictionError_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a FetchRestrictionError
     * @description
     *
     * This takes an `object` and converts it to a `FetchRestrictionError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FetchRestrictionError`.
     * @returns {FetchRestrictionError}
     */
    public static _from_object(
        _o: { [_K in keyof FetchRestrictionError]: FetchRestrictionError[_K] }
    ): FetchRestrictionError {
        return new FetchRestrictionError(_o.problems);
    }
}

/**
 * @summary The Leading Root Component Types of FetchRestrictionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FetchRestrictionError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of FetchRestrictionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FetchRestrictionError: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FetchRestrictionError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FetchRestrictionError: $.ComponentSpec[] = [];

let _cached_decoder_for_FetchRestrictionError: $.ASN1Decoder<FetchRestrictionError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FetchRestrictionError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FetchRestrictionError} The decoded data structure.
 */
export function _decode_FetchRestrictionError(el: _Element) {
    if (!_cached_decoder_for_FetchRestrictionError) {
        _cached_decoder_for_FetchRestrictionError = function (
            el: _Element
        ): FetchRestrictionError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: FetchRestrictionError_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_implicit<
                        FetchRestrictionError_problems_Item[]
                    >(() =>
                        $._decodeSetOf<FetchRestrictionError_problems_Item>(
                            () => _decode_FetchRestrictionError_problems_Item
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FetchRestrictionError,
                _extension_additions_list_spec_for_FetchRestrictionError,
                _root_component_type_list_2_spec_for_FetchRestrictionError,
                undefined
            );
            return new FetchRestrictionError /* SET_CONSTRUCTOR_CALL */(
                problems
            );
        };
    }
    return _cached_decoder_for_FetchRestrictionError(el);
}

let _cached_encoder_for_FetchRestrictionError: $.ASN1Encoder<FetchRestrictionError> | null = null;

/**
 * @summary Encodes a(n) FetchRestrictionError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FetchRestrictionError, encoded as an ASN.1 Element.
 */
export function _encode_FetchRestrictionError(
    value: FetchRestrictionError,
    elGetter: $.ASN1Encoder<FetchRestrictionError>
) {
    if (!_cached_encoder_for_FetchRestrictionError) {
        _cached_encoder_for_FetchRestrictionError = function (
            value: FetchRestrictionError        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<FetchRestrictionError_problems_Item>(
                                    () =>
                                        _encode_FetchRestrictionError_problems_Item,
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
    return _cached_encoder_for_FetchRestrictionError(value, elGetter);
}


/* eslint-enable */
