/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { BasisTypes } from "../ANSI-X9-62/BasisTypes.osa";
export { CHARACTERISTIC_TWO } from "../ANSI-X9-62/CHARACTERISTIC-TWO.oca";

/* START_OF_SYMBOL_DEFINITION Characteristic_two */
/**
 * @summary Characteristic_two
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Characteristic-two ::= SEQUENCE {
 * m                INTEGER, -- Field size is 2^m
 * basis        CHARACTERISTIC-TWO.&id({BasisTypes}),
 * parameters        CHARACTERISTIC-TWO.&Type({BasisTypes}{@basis})
 * }
 * ```
 *
 * @class
 */
export class Characteristic_two {
    constructor(
        /**
         * @summary `m`.
         * @public
         * @readonly
         */
        readonly m: INTEGER,
        /**
         * @summary `basis`.
         * @public
         * @readonly
         */
        readonly basis: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: _Element
    ) {}

    /**
     * @summary Restructures an object into a Characteristic_two
     * @description
     *
     * This takes an `object` and converts it to a `Characteristic_two`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Characteristic_two`.
     * @returns {Characteristic_two}
     */
    public static _from_object(
        _o: { [_K in keyof Characteristic_two]: Characteristic_two[_K] }
    ): Characteristic_two {
        return new Characteristic_two(_o.m, _o.basis, _o.parameters);
    }
}
/* END_OF_SYMBOL_DEFINITION Characteristic_two */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Characteristic_two */
/**
 * @summary The Leading Root Component Types of Characteristic_two
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Characteristic_two: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "m",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "basis",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameters", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Characteristic_two */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Characteristic_two */
/**
 * @summary The Trailing Root Component Types of Characteristic_two
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Characteristic_two: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Characteristic_two */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Characteristic_two */
/**
 * @summary The Extension Addition Component Types of Characteristic_two
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Characteristic_two: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Characteristic_two */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Characteristic_two */
let _cached_decoder_for_Characteristic_two: $.ASN1Decoder<Characteristic_two> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Characteristic_two */

/* START_OF_SYMBOL_DEFINITION _decode_Characteristic_two */
/**
 * @summary Decodes an ASN.1 element into a(n) Characteristic_two
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Characteristic_two} The decoded data structure.
 */
export function _decode_Characteristic_two(el: _Element) {
    if (!_cached_decoder_for_Characteristic_two) {
        _cached_decoder_for_Characteristic_two = function (
            el: _Element
        ): Characteristic_two {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "Characteristic-two contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "m";
            sequence[1].name = "basis";
            sequence[2].name = "parameters";
            let m!: INTEGER;
            let basis!: OBJECT_IDENTIFIER;
            let parameters!: _Element;
            m = $._decodeInteger(sequence[0]);
            basis = $._decodeObjectIdentifier(sequence[1]);
            parameters = $._decodeAny(sequence[2]);
            return new Characteristic_two(m, basis, parameters);
        };
    }
    return _cached_decoder_for_Characteristic_two(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Characteristic_two */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Characteristic_two */
let _cached_encoder_for_Characteristic_two: $.ASN1Encoder<Characteristic_two> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Characteristic_two */

/* START_OF_SYMBOL_DEFINITION _encode_Characteristic_two */
/**
 * @summary Encodes a(n) Characteristic_two into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Characteristic_two, encoded as an ASN.1 Element.
 */
export function _encode_Characteristic_two(
    value: Characteristic_two,
    elGetter: $.ASN1Encoder<Characteristic_two>
) {
    if (!_cached_encoder_for_Characteristic_two) {
        _cached_encoder_for_Characteristic_two = function (
            value: Characteristic_two,
            elGetter: $.ASN1Encoder<Characteristic_two>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.m, $.BER),
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.basis,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Characteristic_two(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Characteristic_two */

/* eslint-enable */
