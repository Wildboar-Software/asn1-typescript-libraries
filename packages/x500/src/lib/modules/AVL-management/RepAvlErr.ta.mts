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
 * @summary RepAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 */
export class RepAvlErr {
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
     * @summary Restructures an object into a RepAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `RepAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepAvlErr`.
     * @returns {RepAvlErr}
     */
    public static _from_object(
        _o: { [_K in keyof RepAvlErr]: RepAvlErr[_K] }
    ): RepAvlErr {
        return new RepAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}

/**
 * @summary The Leading Root Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RepAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RepAvlErr: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RepAvlErr: $.ComponentSpec[] = [];

let _cached_decoder_for_RepAvlErr: $.ASN1Decoder<RepAvlErr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepAvlErr} The decoded data structure.
 */
export function _decode_RepAvlErr(el: _Element): RepAvlErr {
    if (!_cached_decoder_for_RepAvlErr) {
        _cached_decoder_for_RepAvlErr = function (el: _Element): RepAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "RepAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new RepAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlErr(el);
}

let _cached_encoder_for_RepAvlErr: $.ASN1Encoder<RepAvlErr> | null = null;

/**
 * @summary Encodes a(n) RepAvlErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_RepAvlErr(
    value: RepAvlErr,
    elGetter: $.ASN1Encoder<RepAvlErr>
): _Element {
    if (!_cached_encoder_for_RepAvlErr) {
        _cached_encoder_for_RepAvlErr = function (
            value: RepAvlErr        ): _Element {
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
    return _cached_encoder_for_RepAvlErr(value, elGetter);
}


/* eslint-enable */
