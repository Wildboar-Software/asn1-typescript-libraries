/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Wrap_Body
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Wrap-Body ::= SEQUENCE {int-cksum  BIT STRING,
 *                         data       BIT STRING
 * }
 * ```
 *
 */
export class Wrap_Body {
    constructor(
        /**
         * @summary `int_cksum`.
         * @public
         * @readonly
         */
        readonly int_cksum: BIT_STRING,
        /**
         * @summary `data`.
         * @public
         * @readonly
         */
        readonly data: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a Wrap_Body
     * @description
     *
     * This takes an `object` and converts it to a `Wrap_Body`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Wrap_Body`.
     * @returns {Wrap_Body}
     */
    public static _from_object(
        _o: { [_K in keyof Wrap_Body]: Wrap_Body[_K] }
    ): Wrap_Body {
        return new Wrap_Body(_o.int_cksum, _o.data);
    }
}

/**
 * @summary The Leading Root Component Types of Wrap_Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Wrap_Body: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "int-cksum",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "data",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of Wrap_Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Wrap_Body: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Wrap_Body
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Wrap_Body: $.ComponentSpec[] = [];

let _cached_decoder_for_Wrap_Body: $.ASN1Decoder<Wrap_Body> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Wrap_Body
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Wrap_Body} The decoded data structure.
 */
export function _decode_Wrap_Body(el: _Element): Wrap_Body {
    if (!_cached_decoder_for_Wrap_Body) {
        _cached_decoder_for_Wrap_Body = function (el: _Element): Wrap_Body {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Wrap-Body contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "int-cksum";
            sequence[1].name = "data";
            let int_cksum!: BIT_STRING;
            let data!: BIT_STRING;
            int_cksum = $._decodeBitString(sequence[0]);
            data = $._decodeBitString(sequence[1]);
            return new Wrap_Body(int_cksum, data);
        };
    }
    return _cached_decoder_for_Wrap_Body(el);
}

let _cached_encoder_for_Wrap_Body: $.ASN1Encoder<Wrap_Body> | null = null;

/**
 * @summary Encodes a(n) Wrap_Body into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Wrap_Body, encoded as an ASN.1 Element.
 */
export function _encode_Wrap_Body(
    value: Wrap_Body,
    elGetter: $.ASN1Encoder<Wrap_Body>
): _Element {
    if (!_cached_encoder_for_Wrap_Body) {
        _cached_encoder_for_Wrap_Body = function (
            value: Wrap_Body        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeBitString(
                            value.int_cksum,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(value.data, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Wrap_Body(value, elGetter);
}


/* eslint-enable */
