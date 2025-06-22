/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AVMP_error,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../AVL-management/AVMP-error.ta.mjs";
/**
 * @summary AddAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class AddAvlErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AddAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `AddAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddAvlErr`.
     * @returns {AddAvlErr}
     */
    public static _from_object(
        _o: { [_K in keyof AddAvlErr]: AddAvlErr[_K] }
    ): AddAvlErr {
        return new AddAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}

/**
 * @summary The Leading Root Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddAvlErr: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AddAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddAvlErr: $.ComponentSpec[] = [];

let _cached_decoder_for_AddAvlErr: $.ASN1Decoder<AddAvlErr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlErr} The decoded data structure.
 */
export function _decode_AddAvlErr(el: _Element) {
    if (!_cached_decoder_for_AddAvlErr) {
        _cached_decoder_for_AddAvlErr = function (el: _Element): AddAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "AddAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new AddAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_AddAvlErr(el);
}

let _cached_encoder_for_AddAvlErr: $.ASN1Encoder<AddAvlErr> | null = null;

/**
 * @summary Encodes a(n) AddAvlErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlErr(
    value: AddAvlErr,
    elGetter: $.ASN1Encoder<AddAvlErr>
) {
    if (!_cached_encoder_for_AddAvlErr) {
        _cached_encoder_for_AddAvlErr = function (
            value: AddAvlErr        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AddAvlErr(value, elGetter);
}


/* eslint-enable */
