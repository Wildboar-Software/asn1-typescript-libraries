/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { algid_hmacWithSHA1 } from "../PKCS5v2-1/algid-hmacWithSHA1.va.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS5v2-1/AlgorithmIdentifier.ta.mjs";
import {
    PBKDF2_params_salt,
    _decode_PBKDF2_params_salt,
    _encode_PBKDF2_params_salt,
} from "../PKCS5v2-1/PBKDF2-params-salt.ta.mjs";

/**
 * @summary PBKDF2_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-params ::= SEQUENCE {
 *     salt CHOICE {
 *         specified OCTET STRING,
 *         otherSource AlgorithmIdentifier {{PBKDF2-SaltSources}}
 *     },
 *     iterationCount INTEGER (1..MAX),
 *     keyLength INTEGER (1..MAX) OPTIONAL,
 *     prf AlgorithmIdentifier {{PBKDF2-PRFs}} DEFAULT
 *     algid-hmacWithSHA1
 * }
 * ```
 *
 */
export class PBKDF2_params {
    constructor(
        /**
         * @summary `salt`.
         * @public
         * @readonly
         */
        readonly salt: PBKDF2_params_salt,
        /**
         * @summary `iterationCount`.
         * @public
         * @readonly
         */
        readonly iterationCount: INTEGER,
        /**
         * @summary `keyLength`.
         * @public
         * @readonly
         */
        readonly keyLength: OPTIONAL<INTEGER>,
        /**
         * @summary `prf`.
         * @public
         * @readonly
         */
        readonly prf: OPTIONAL<AlgorithmIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a PBKDF2_params
     * @description
     *
     * This takes an `object` and converts it to a `PBKDF2_params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PBKDF2_params`.
     * @returns {PBKDF2_params}
     */
    public static _from_object(
        _o: { [_K in keyof PBKDF2_params]: PBKDF2_params[_K] }
    ): PBKDF2_params {
        return new PBKDF2_params(
            _o.salt,
            _o.iterationCount,
            _o.keyLength,
            _o.prf
        );
    }

    /**
     * @summary Getter that returns the default value for `prf`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_prf(): AlgorithmIdentifier {
        return algid_hmacWithSHA1;
    }
}


/**
 * @summary The Leading Root Component Types of PBKDF2_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PBKDF2_params: $.ComponentSpec[] = [
    new $.ComponentSpec("salt", false, $.hasAnyTag),
    new $.ComponentSpec(
        "iterationCount",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "keyLength",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "prf",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of PBKDF2_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PBKDF2_params: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PBKDF2_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PBKDF2_params: $.ComponentSpec[] = [];


let _cached_decoder_for_PBKDF2_params: $.ASN1Decoder<PBKDF2_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PBKDF2_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBKDF2_params} The decoded data structure.
 */
export function _decode_PBKDF2_params(el: _Element): PBKDF2_params {
    if (!_cached_decoder_for_PBKDF2_params) {
        _cached_decoder_for_PBKDF2_params = function (
            el: _Element
        ): PBKDF2_params {
            let salt!: PBKDF2_params_salt;
            let iterationCount!: INTEGER;
            let keyLength: OPTIONAL<INTEGER>;
            let prf: OPTIONAL<AlgorithmIdentifier> =
                PBKDF2_params._default_value_for_prf;
            const callbacks: $.DecodingMap = {
                salt: (_el: _Element): void => {
                    salt = _decode_PBKDF2_params_salt(_el);
                },
                iterationCount: (_el: _Element): void => {
                    iterationCount = $._decodeInteger(_el);
                },
                keyLength: (_el: _Element): void => {
                    keyLength = $._decodeInteger(_el);
                },
                prf: (_el: _Element): void => {
                    prf = _decode_AlgorithmIdentifier(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PBKDF2_params,
                _extension_additions_list_spec_for_PBKDF2_params,
                _root_component_type_list_2_spec_for_PBKDF2_params,
                undefined
            );
            return new PBKDF2_params(
                salt,
                iterationCount,
                keyLength,
                prf
            );
        };
    }
    return _cached_decoder_for_PBKDF2_params(el);
}


let _cached_encoder_for_PBKDF2_params: $.ASN1Encoder<PBKDF2_params> | null = null;


/**
 * @summary Encodes a(n) PBKDF2_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBKDF2_params, encoded as an ASN.1 Element.
 */
export function _encode_PBKDF2_params(
    value: PBKDF2_params,
    elGetter: $.ASN1Encoder<PBKDF2_params>
): _Element {
    if (!_cached_encoder_for_PBKDF2_params) {
        _cached_encoder_for_PBKDF2_params = function (
            value: PBKDF2_params        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PBKDF2_params_salt(
                            value.salt,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.iterationCount,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.keyLength === undefined
                            ? undefined
                            : $._encodeInteger(value.keyLength, $.BER),
                        /* IF_DEFAULT */ value.prf === undefined ||
                        $.deepEq(
                            value.prf,
                            PBKDF2_params._default_value_for_prf
                        )
                            ? undefined
                            : _encode_AlgorithmIdentifier(value.prf, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PBKDF2_params(value, elGetter);
}


/* eslint-enable */
