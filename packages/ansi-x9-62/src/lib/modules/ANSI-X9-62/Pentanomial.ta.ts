/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Pentanomial */
/**
 * @summary Pentanomial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pentanomial ::= SEQUENCE {
 * k1    INTEGER,
 * k2    INTEGER,
 * k3    INTEGER
 * }
 * ```
 *
 * @class
 */
export class Pentanomial {
    constructor(
        /**
         * @summary `k1`.
         * @public
         * @readonly
         */
        readonly k1: INTEGER,
        /**
         * @summary `k2`.
         * @public
         * @readonly
         */
        readonly k2: INTEGER,
        /**
         * @summary `k3`.
         * @public
         * @readonly
         */
        readonly k3: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a Pentanomial
     * @description
     *
     * This takes an `object` and converts it to a `Pentanomial`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Pentanomial`.
     * @returns {Pentanomial}
     */
    public static _from_object(
        _o: { [_K in keyof Pentanomial]: Pentanomial[_K] }
    ): Pentanomial {
        return new Pentanomial(_o.k1, _o.k2, _o.k3);
    }
}
/* END_OF_SYMBOL_DEFINITION Pentanomial */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Pentanomial */
/**
 * @summary The Leading Root Component Types of Pentanomial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Pentanomial: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "k1",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "k2",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "k3",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Pentanomial */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Pentanomial */
/**
 * @summary The Trailing Root Component Types of Pentanomial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Pentanomial: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Pentanomial */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Pentanomial */
/**
 * @summary The Extension Addition Component Types of Pentanomial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Pentanomial: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Pentanomial */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Pentanomial */
let _cached_decoder_for_Pentanomial: $.ASN1Decoder<Pentanomial> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Pentanomial */

/* START_OF_SYMBOL_DEFINITION _decode_Pentanomial */
/**
 * @summary Decodes an ASN.1 element into a(n) Pentanomial
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pentanomial} The decoded data structure.
 */
export function _decode_Pentanomial(el: _Element) {
    if (!_cached_decoder_for_Pentanomial) {
        _cached_decoder_for_Pentanomial = function (el: _Element): Pentanomial {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "Pentanomial contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "k1";
            sequence[1].name = "k2";
            sequence[2].name = "k3";
            let k1!: INTEGER;
            let k2!: INTEGER;
            let k3!: INTEGER;
            k1 = $._decodeInteger(sequence[0]);
            k2 = $._decodeInteger(sequence[1]);
            k3 = $._decodeInteger(sequence[2]);
            return new Pentanomial(k1, k2, k3);
        };
    }
    return _cached_decoder_for_Pentanomial(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Pentanomial */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Pentanomial */
let _cached_encoder_for_Pentanomial: $.ASN1Encoder<Pentanomial> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Pentanomial */

/* START_OF_SYMBOL_DEFINITION _encode_Pentanomial */
/**
 * @summary Encodes a(n) Pentanomial into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pentanomial, encoded as an ASN.1 Element.
 */
export function _encode_Pentanomial(
    value: Pentanomial,
    elGetter: $.ASN1Encoder<Pentanomial>
) {
    if (!_cached_encoder_for_Pentanomial) {
        _cached_encoder_for_Pentanomial = function (
            value: Pentanomial,
            elGetter: $.ASN1Encoder<Pentanomial>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.k1, $.BER),
                        /* REQUIRED   */ $._encodeInteger(value.k2, $.BER),
                        /* REQUIRED   */ $._encodeInteger(value.k3, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Pentanomial(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Pentanomial */

/* eslint-enable */
