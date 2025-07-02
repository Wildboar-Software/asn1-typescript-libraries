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
    AttributeError_problems_Item,
    _decode_AttributeError_problems_Item,
    _encode_AttributeError_problems_Item,
} from '../MhsAcctAsn1Module/AttributeError-problems-Item.ta.mjs';
/**
 * @summary AttributeError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeError ::= SET {
 *   problems
 *     [0]  SET SIZE (1..ub-per-entry) OF
 *            SET {problem  [0]  AttributeProblem,
 *                 type     [1]  AttributeType}
 * }
 * ```
 *
 */
export class AttributeError {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: AttributeError_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a AttributeError
     * @description
     *
     * This takes an `object` and converts it to a `AttributeError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeError`.
     * @returns {AttributeError}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeError]: AttributeError[_K] }
    ): AttributeError {
        return new AttributeError(_o.problems);
    }
}

/**
 * @summary The Leading Root Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeError: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AttributeError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeError: $.ComponentSpec[] = [];

let _cached_decoder_for_AttributeError: $.ASN1Decoder<AttributeError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeError} The decoded data structure.
 */
export function _decode_AttributeError(el: _Element): AttributeError {
    if (!_cached_decoder_for_AttributeError) {
        _cached_decoder_for_AttributeError = function (
            el: _Element
        ): AttributeError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: AttributeError_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_implicit<
                        AttributeError_problems_Item[]
                    >(() =>
                        $._decodeSetOf<AttributeError_problems_Item>(
                            () => _decode_AttributeError_problems_Item
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeError,
                _extension_additions_list_spec_for_AttributeError,
                _root_component_type_list_2_spec_for_AttributeError,
                undefined
            );
            return new AttributeError /* SET_CONSTRUCTOR_CALL */(problems);
        };
    }
    return _cached_decoder_for_AttributeError(el);
}

let _cached_encoder_for_AttributeError: $.ASN1Encoder<AttributeError> | null = null;

/**
 * @summary Encodes a(n) AttributeError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeError, encoded as an ASN.1 Element.
 */
export function _encode_AttributeError(
    value: AttributeError,
    elGetter: $.ASN1Encoder<AttributeError>
): _Element {
    if (!_cached_encoder_for_AttributeError) {
        _cached_encoder_for_AttributeError = function (
            value: AttributeError        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<AttributeError_problems_Item>(
                                    () => _encode_AttributeError_problems_Item,
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
    return _cached_encoder_for_AttributeError(value, elGetter);
}


/* eslint-enable */
