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
    DeleteError_problems_Item,
    _decode_DeleteError_problems_Item,
    _encode_DeleteError_problems_Item,
} from '../MhsAcctAsn1Module/DeleteError-problems-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DeleteError */
/**
 * @summary DeleteError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteError ::= SET {
 *   problems
 *     [0]  SET SIZE (1..ub-messages) OF
 *            SET {problem          [0]  DeleteProblem,
 *                 sequence-number  [1]  SequenceNumber}
 * }
 * ```
 *
 * @class
 */
export class DeleteError {
    constructor(
        /**
         * @summary `problems`.
         * @public
         * @readonly
         */
        readonly problems: DeleteError_problems_Item[]
    ) {}

    /**
     * @summary Restructures an object into a DeleteError
     * @description
     *
     * This takes an `object` and converts it to a `DeleteError`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteError`.
     * @returns {DeleteError}
     */
    public static _from_object(
        _o: { [_K in keyof DeleteError]: DeleteError[_K] }
    ): DeleteError {
        return new DeleteError(_o.problems);
    }
}
/* END_OF_SYMBOL_DEFINITION DeleteError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteError */
/**
 * @summary The Leading Root Component Types of DeleteError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteError: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problems',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteError */
/**
 * @summary The Trailing Root Component Types of DeleteError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteError */
/**
 * @summary The Extension Addition Component Types of DeleteError
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteError: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteError */
let _cached_decoder_for_DeleteError: $.ASN1Decoder<DeleteError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteError */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteError} The decoded data structure.
 */
export function _decode_DeleteError(el: _Element) {
    if (!_cached_decoder_for_DeleteError) {
        _cached_decoder_for_DeleteError = function (el: _Element): DeleteError {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problems!: DeleteError_problems_Item[];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problems: (_el: _Element): void => {
                    problems = $._decode_implicit<DeleteError_problems_Item[]>(
                        () =>
                            $._decodeSetOf<DeleteError_problems_Item>(
                                () => _decode_DeleteError_problems_Item
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteError,
                _extension_additions_list_spec_for_DeleteError,
                _root_component_type_list_2_spec_for_DeleteError,
                undefined
            );
            return new DeleteError /* SET_CONSTRUCTOR_CALL */(problems);
        };
    }
    return _cached_decoder_for_DeleteError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteError */
let _cached_encoder_for_DeleteError: $.ASN1Encoder<DeleteError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteError */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteError */
/**
 * @summary Encodes a(n) DeleteError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteError, encoded as an ASN.1 Element.
 */
export function _encode_DeleteError(
    value: DeleteError,
    elGetter: $.ASN1Encoder<DeleteError>
) {
    if (!_cached_encoder_for_DeleteError) {
        _cached_encoder_for_DeleteError = function (
            value: DeleteError        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<DeleteError_problems_Item>(
                                    () => _encode_DeleteError_problems_Item,
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
    return _cached_encoder_for_DeleteError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteError */

/* eslint-enable */
