/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary ValidationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidationParams ::= SEQUENCE {
 * seed        BIT STRING,
 * pgenCounter    INTEGER
 * }
 * ```
 *
 * @class
 */
export class ValidationParams {
    constructor(
        /**
         * @summary `seed`.
         * @public
         * @readonly
         */
        readonly seed: BIT_STRING,
        /**
         * @summary `pgenCounter`.
         * @public
         * @readonly
         */
        readonly pgenCounter: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a ValidationParams
     * @description
     *
     * This takes an `object` and converts it to a `ValidationParams`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ValidationParams`.
     * @returns {ValidationParams}
     */
    public static _from_object(
        _o: { [_K in keyof ValidationParams]: ValidationParams[_K] }
    ): ValidationParams {
        return new ValidationParams(_o.seed, _o.pgenCounter);
    }
}


/**
 * @summary The Leading Root Component Types of ValidationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ValidationParams: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "seed",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "pgenCounter",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of ValidationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValidationParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ValidationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValidationParams: $.ComponentSpec[] = [];


let _cached_decoder_for_ValidationParams: $.ASN1Decoder<ValidationParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ValidationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidationParams} The decoded data structure.
 */
export function _decode_ValidationParams(el: _Element) {
    if (!_cached_decoder_for_ValidationParams) {
        _cached_decoder_for_ValidationParams = function (
            el: _Element
        ): ValidationParams {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ValidationParams contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "seed";
            sequence[1].name = "pgenCounter";
            let seed!: BIT_STRING;
            let pgenCounter!: INTEGER;
            seed = $._decodeBitString(sequence[0]);
            pgenCounter = $._decodeInteger(sequence[1]);
            return new ValidationParams(seed, pgenCounter);
        };
    }
    return _cached_decoder_for_ValidationParams(el);
}


let _cached_encoder_for_ValidationParams: $.ASN1Encoder<ValidationParams> | null = null;


/**
 * @summary Encodes a(n) ValidationParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidationParams, encoded as an ASN.1 Element.
 */
export function _encode_ValidationParams(
    value: ValidationParams,
    elGetter: $.ASN1Encoder<ValidationParams>
) {
    if (!_cached_encoder_for_ValidationParams) {
        _cached_encoder_for_ValidationParams = function (
            value: ValidationParams        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeBitString(value.seed, $.DER),
                        /* REQUIRED   */ $._encodeInteger(
                            value.pgenCounter,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ValidationParams(value, elGetter);
}


/* eslint-enable */
