/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ValidationParms,
    _decode_ValidationParms,
    _encode_ValidationParms,
} from "../ANSI-X9-42/ValidationParms.ta.mjs";

/**
 * @summary DomainParameters
 * @description
 *
 * Galois field group parameters `(p, q, g)` for GF(p). Static versus
 * ephemeral use is a key-management-protocol matter and is not encoded
 * here. ANS X9.42-2003 §A.2.1, §7.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainParameters ::= SEQUENCE {  -- Galois field group parameters
 * p    INTEGER,    -- odd prime, p = jq + 1
 * g    INTEGER,    -- generator, g ^ q = 1 mod p
 * q    INTEGER,    -- prime factor of p-1
 * j    INTEGER OPTIONAL,    -- cofactor, j ? 2
 * validationParms ValidationParms OPTIONAL
 * }
 * ```
 *
 */
export class DomainParameters {
    constructor(
        /**
         * @summary `p`.
         * @description
         *
         * Odd prime defining GF(p); `p = jq + 1`. Bit length `L = 256n`
         * with `n ≥ 4` (so `p` is at least 1024 bits). ANS X9.42-2003
         * §7.1, §A.2.1.
         *
         * @public
         * @readonly
         */
        readonly p: INTEGER,
        /**
         * @summary `g`.
         * @description
         *
         * Generator of the multiplicative subgroup of order `q`
         * (`g^q ≡ 1 (mod p)`). Valid if `2 ≤ g ≤ p-2`. ANS X9.42-2003
         * §7.2, §A.2.1.
         *
         * @public
         * @readonly
         */
        readonly g: INTEGER,
        /**
         * @summary `q`.
         * @description
         *
         * Prime factor of `p-1`. Bit length `m ≥ 160`. ANS X9.42-2003
         * §7.1, §A.2.1.
         *
         * @public
         * @readonly
         */
        readonly q: INTEGER,
        /**
         * @summary `j`.
         * @description
         *
         * Cofactor with `p = jq + 1` and `j ≥ 2`. Optional aid for
         * verifying domain parameters; required when using the cofactor
         * method. ANS X9.42-2003 §A.2.1, §A.7.
         *
         * @public
         * @readonly
         */
        readonly j?: OPTIONAL<INTEGER>,
        /**
         * @summary `validationParms`.
         * @description
         *
         * `seed` and `pGenCounter` from prime generation (Annex B.1.2).
         * Both present or both absent. Lets a party validate that `p`
         * and `q` were generated as specified. ANS X9.42-2003 §7.1,
         * §7.2, §A.2.1.
         *
         * @public
         * @readonly
         */
        readonly validationParms?: OPTIONAL<ValidationParms>
    ) {}

    /**
     * @summary Restructures an object into a DomainParameters
     * @description
     *
     * This takes an `object` and converts it to a `DomainParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DomainParameters`.
     * @returns {DomainParameters}
     */
    public static _from_object(
        _o: { [_K in keyof DomainParameters]: DomainParameters[_K] }
    ): DomainParameters {
        return new DomainParameters(_o.p, _o.g, _o.q, _o.j, _o.validationParms);
    }
}


/**
 * @summary The Leading Root Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DomainParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "p",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "g",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "q",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "j",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "validationParms",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DomainParameters: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DomainParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DomainParameters: $.ComponentSpec[] = [];


let _cached_decoder_for_DomainParameters: $.ASN1Decoder<DomainParameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DomainParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainParameters} The decoded data structure.
 */
export function _decode_DomainParameters(el: _Element): DomainParameters {
    if (!_cached_decoder_for_DomainParameters) {
        _cached_decoder_for_DomainParameters = function (
            el: _Element
        ): DomainParameters {
            let p!: INTEGER;
            let g!: INTEGER;
            let q!: INTEGER;
            let j: OPTIONAL<INTEGER>;
            let validationParms: OPTIONAL<ValidationParms>;
            const callbacks: $.DecodingMap = {
                p: (_el: _Element): void => {
                    p = $._decodeInteger(_el);
                },
                g: (_el: _Element): void => {
                    g = $._decodeInteger(_el);
                },
                q: (_el: _Element): void => {
                    q = $._decodeInteger(_el);
                },
                j: (_el: _Element): void => {
                    j = $._decodeInteger(_el);
                },
                validationParms: (_el: _Element): void => {
                    validationParms = _decode_ValidationParms(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DomainParameters,
                _extension_additions_list_spec_for_DomainParameters,
                _root_component_type_list_2_spec_for_DomainParameters,
                undefined
            );
            return new DomainParameters (
                p,
                g,
                q,
                j,
                validationParms
            );
        };
    }
    return _cached_decoder_for_DomainParameters(el);
}


let _cached_encoder_for_DomainParameters: $.ASN1Encoder<DomainParameters> | null = null;


/**
 * @summary Encodes a(n) DomainParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainParameters, encoded as an ASN.1 Element.
 */
export function _encode_DomainParameters(
    value: DomainParameters,
    elGetter: $.ASN1Encoder<DomainParameters>
): _Element {
    if (!_cached_encoder_for_DomainParameters) {
        _cached_encoder_for_DomainParameters = function (
            value: DomainParameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.p, $.DER),
                        /* REQUIRED   */ $._encodeInteger(value.g, $.DER),
                        /* REQUIRED   */ $._encodeInteger(value.q, $.DER),
                        /* IF_ABSENT  */ value.j === undefined
                            ? undefined
                            : $._encodeInteger(value.j, $.DER),
                        /* IF_ABSENT  */ value.validationParms === undefined
                            ? undefined
                            : _encode_ValidationParms(
                                  value.validationParms,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_DomainParameters(value, elGetter);
}


/* eslint-enable */
