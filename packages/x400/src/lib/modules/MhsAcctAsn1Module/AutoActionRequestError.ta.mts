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
    AutoActionRequestError_problems_Item,
    _decode_AutoActionRequestError_problems_Item,
    _encode_AutoActionRequestError_problems_Item,
} from '../MhsAcctAsn1Module/AutoActionRequestError-problems-Item.ta.mjs';
/**
 * @summary AutoActionRequestError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionRequestError ::= SET {
 *   problems
 *     [0]  SET SIZE (1..ub-auto-registrations) OF
 *            SET {problem  [0]  AutoActionRequestProblem,
 *                 type     [1]  AutoActionType}
 * }
 * ```
 *
 * @class
 */
export class AutoActionRequestError {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: AutoActionRequestError_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a AutoActionRequestError
     * @description
     *
     * This takes an `object` and converts it to a `AutoActionRequestError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AutoActionRequestError`.
     * @returns {AutoActionRequestError}
     */
    public static _from_object(
        _o: { [_K in keyof AutoActionRequestError]: AutoActionRequestError[_K] }
    ): AutoActionRequestError {
        return new AutoActionRequestError(_o.problems);
    }
}

/**
 * @summary The Leading Root Component Types of AutoActionRequestError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AutoActionRequestError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of AutoActionRequestError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AutoActionRequestError: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AutoActionRequestError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AutoActionRequestError: $.ComponentSpec[] = [];

let _cached_decoder_for_AutoActionRequestError: $.ASN1Decoder<AutoActionRequestError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoActionRequestError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoActionRequestError} The decoded data structure.
 */
export function _decode_AutoActionRequestError(el: _Element): AutoActionRequestError {
    if (!_cached_decoder_for_AutoActionRequestError) {
        _cached_decoder_for_AutoActionRequestError = function (
            el: _Element
        ): AutoActionRequestError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: AutoActionRequestError_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_implicit<
                        AutoActionRequestError_problems_Item[]
                    >(() =>
                        $._decodeSetOf<AutoActionRequestError_problems_Item>(
                            () => _decode_AutoActionRequestError_problems_Item
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AutoActionRequestError,
                _extension_additions_list_spec_for_AutoActionRequestError,
                _root_component_type_list_2_spec_for_AutoActionRequestError,
                undefined
            );
            return new AutoActionRequestError /* SET_CONSTRUCTOR_CALL */(
                problems
            );
        };
    }
    return _cached_decoder_for_AutoActionRequestError(el);
}

let _cached_encoder_for_AutoActionRequestError: $.ASN1Encoder<AutoActionRequestError> | null = null;

/**
 * @summary Encodes a(n) AutoActionRequestError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoActionRequestError, encoded as an ASN.1 Element.
 */
export function _encode_AutoActionRequestError(
    value: AutoActionRequestError,
    elGetter: $.ASN1Encoder<AutoActionRequestError>
): _Element {
    if (!_cached_encoder_for_AutoActionRequestError) {
        _cached_encoder_for_AutoActionRequestError = function (
            value: AutoActionRequestError        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<AutoActionRequestError_problems_Item>(
                                    () =>
                                        _encode_AutoActionRequestError_problems_Item,
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
    return _cached_encoder_for_AutoActionRequestError(value, elGetter);
}


/* eslint-enable */
