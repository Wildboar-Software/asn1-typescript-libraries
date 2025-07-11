/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ECDSA_Sig_Value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECDSA-Sig-Value ::= SEQUENCE {
 * r    INTEGER,
 * s    INTEGER
 * }
 * ```
 *
 */
export class ECDSA_Sig_Value {
    constructor(
        /**
         * @summary `r`.
         * @public
         * @readonly
         */
        readonly r: INTEGER,
        /**
         * @summary `s`.
         * @public
         * @readonly
         */
        readonly s: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a ECDSA_Sig_Value
     * @description
     *
     * This takes an `object` and converts it to a `ECDSA_Sig_Value`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECDSA_Sig_Value`.
     * @returns {ECDSA_Sig_Value}
     */
    public static _from_object(
        _o: { [_K in keyof ECDSA_Sig_Value]: ECDSA_Sig_Value[_K] }
    ): ECDSA_Sig_Value {
        return new ECDSA_Sig_Value(_o.r, _o.s);
    }
}

/**
 * @summary The Leading Root Component Types of ECDSA_Sig_Value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ECDSA_Sig_Value: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "r",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "s",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ECDSA_Sig_Value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ECDSA_Sig_Value: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ECDSA_Sig_Value
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ECDSA_Sig_Value: $.ComponentSpec[] = [];

let _cached_decoder_for_ECDSA_Sig_Value: $.ASN1Decoder<ECDSA_Sig_Value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECDSA_Sig_Value
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDSA_Sig_Value} The decoded data structure.
 */
export function _decode_ECDSA_Sig_Value(el: _Element): ECDSA_Sig_Value {
    if (!_cached_decoder_for_ECDSA_Sig_Value) {
        _cached_decoder_for_ECDSA_Sig_Value = function (
            el: _Element
        ): ECDSA_Sig_Value {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ECDSA-Sig-Value contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "r";
            sequence[1].name = "s";
            let r!: INTEGER;
            let s!: INTEGER;
            r = $._decodeInteger(sequence[0]);
            s = $._decodeInteger(sequence[1]);
            return new ECDSA_Sig_Value(r, s);
        };
    }
    return _cached_decoder_for_ECDSA_Sig_Value(el);
}

let _cached_encoder_for_ECDSA_Sig_Value: $.ASN1Encoder<ECDSA_Sig_Value> | null = null;

/**
 * @summary Encodes a(n) ECDSA_Sig_Value into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDSA_Sig_Value, encoded as an ASN.1 Element.
 */
export function _encode_ECDSA_Sig_Value(
    value: ECDSA_Sig_Value,
    elGetter: $.ASN1Encoder<ECDSA_Sig_Value>
): _Element {
    if (!_cached_encoder_for_ECDSA_Sig_Value) {
        _cached_encoder_for_ECDSA_Sig_Value = function (
            value: ECDSA_Sig_Value        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.r, $.DER),
                        /* REQUIRED   */ $._encodeInteger(value.s, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ECDSA_Sig_Value(value, elGetter);
}


/* eslint-enable */
