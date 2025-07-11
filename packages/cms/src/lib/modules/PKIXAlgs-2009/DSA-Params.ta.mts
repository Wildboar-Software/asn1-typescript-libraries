/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary DSA_Params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSA-Params ::= SEQUENCE {
 * p  INTEGER,
 * q  INTEGER,
 * g  INTEGER
 * }
 * ```
 *
 */
export class DSA_Params {
    constructor(
        /**
         * @summary `p`.
         * @public
         * @readonly
         */
        readonly p: INTEGER,
        /**
         * @summary `q`.
         * @public
         * @readonly
         */
        readonly q: INTEGER,
        /**
         * @summary `g`.
         * @public
         * @readonly
         */
        readonly g: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a DSA_Params
     * @description
     *
     * This takes an `object` and converts it to a `DSA_Params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DSA_Params`.
     * @returns {DSA_Params}
     */
    public static _from_object(
        _o: { [_K in keyof DSA_Params]: DSA_Params[_K] }
    ): DSA_Params {
        return new DSA_Params(_o.p, _o.q, _o.g);
    }
}


/**
 * @summary The Leading Root Component Types of DSA_Params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DSA_Params: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "p",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "q",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "g",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of DSA_Params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DSA_Params: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DSA_Params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DSA_Params: $.ComponentSpec[] = [];


let _cached_decoder_for_DSA_Params: $.ASN1Decoder<DSA_Params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DSA_Params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSA_Params} The decoded data structure.
 */
export function _decode_DSA_Params(el: _Element): DSA_Params {
    if (!_cached_decoder_for_DSA_Params) {
        _cached_decoder_for_DSA_Params = function (el: _Element): DSA_Params {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "DSA-Params contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "p";
            sequence[1].name = "q";
            sequence[2].name = "g";
            let p!: INTEGER;
            let q!: INTEGER;
            let g!: INTEGER;
            p = $._decodeInteger(sequence[0]);
            q = $._decodeInteger(sequence[1]);
            g = $._decodeInteger(sequence[2]);
            return new DSA_Params(p, q, g);
        };
    }
    return _cached_decoder_for_DSA_Params(el);
}


let _cached_encoder_for_DSA_Params: $.ASN1Encoder<DSA_Params> | null = null;


/**
 * @summary Encodes a(n) DSA_Params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSA_Params, encoded as an ASN.1 Element.
 */
export function _encode_DSA_Params(
    value: DSA_Params,
    elGetter: $.ASN1Encoder<DSA_Params>
): _Element {
    if (!_cached_encoder_for_DSA_Params) {
        _cached_encoder_for_DSA_Params = function (
            value: DSA_Params        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.p, $.DER),
                        /* REQUIRED   */ $._encodeInteger(value.q, $.DER),
                        /* REQUIRED   */ $._encodeInteger(value.g, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_DSA_Params(value, elGetter);
}


/* eslint-enable */
