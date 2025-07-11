/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ValidationParms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidationParms ::= SEQUENCE {
 *   seed         BIT STRING,
 *   pgenCounter  INTEGER,
 *   ... }
 * ```
 *
 */
export class ValidationParms {
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
        readonly pgenCounter: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ValidationParms
     * @description
     *
     * This takes an `object` and converts it to a `ValidationParms`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ValidationParms`.
     * @returns {ValidationParms}
     */
    public static _from_object(
        _o: { [_K in keyof ValidationParms]: ValidationParms[_K] }
    ): ValidationParms {
        return new ValidationParms(
            _o.seed,
            _o.pgenCounter,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of ValidationParms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ValidationParms: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of ValidationParms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ValidationParms: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ValidationParms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ValidationParms: $.ComponentSpec[] = [];

let _cached_decoder_for_ValidationParms: $.ASN1Decoder<ValidationParms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValidationParms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidationParms} The decoded data structure.
 */
export function _decode_ValidationParms(el: _Element): ValidationParms {
    if (!_cached_decoder_for_ValidationParms) {
        _cached_decoder_for_ValidationParms = function (
            el: _Element
        ): ValidationParms {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ValidationParms contained only " +
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
            return new ValidationParms(seed, pgenCounter, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ValidationParms(el);
}

let _cached_encoder_for_ValidationParms: $.ASN1Encoder<ValidationParms> | null = null;

/**
 * @summary Encodes a(n) ValidationParms into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidationParms, encoded as an ASN.1 Element.
 */
export function _encode_ValidationParms(
    value: ValidationParms,
    elGetter: $.ASN1Encoder<ValidationParms>
): _Element {
    if (!_cached_encoder_for_ValidationParms) {
        _cached_encoder_for_ValidationParms = function (
            value: ValidationParms        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeBitString(
                                value.seed,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.pgenCounter,
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
    return _cached_encoder_for_ValidationParms(value, elGetter);
}


/* eslint-enable */
