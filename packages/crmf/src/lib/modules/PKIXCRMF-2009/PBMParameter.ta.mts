/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/AuthenticationFramework";


/**
 * @summary PBMParameter
 * @description
 *
 * Parameters for `id-PasswordBasedMAC`: salt, one-way function,
 * iteration count, and MAC algorithm
 * ([RFC 4211 §4.4](https://datatracker.ietf.org/doc/html/rfc4211#section-4.4)).
 *
 * Used to derive a MAC key from a shared password and compute a
 * check value (e.g. over a public key in `PKMACValue`).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBMParameter ::= SEQUENCE {
 *     salt                OCTET STRING,
 *     owf                 AlgorithmIdentifier{DIGEST-ALGORITHM,
 *                             {DigestAlgorithms}},
 *     -- AlgId for a One-Way Function (SHA-1 recommended)
 *     iterationCount      INTEGER,
 *     -- number of times the OWF is applied
 *     mac                 AlgorithmIdentifier{MAC-ALGORITHM,
 *                             {MACAlgorithms}}
 *     -- the MAC AlgId (e.g., DES-MAC, Triple-DES-MAC, or HMAC
 * }
 * ```
 *
 */
export class PBMParameter {
    constructor(
        /**
         * @summary `salt`.
         * @description
         *
         * Random value for MAC key computation; SHOULD be at least 8
         * octets ([RFC 4211 §4.4](https://datatracker.ietf.org/doc/html/rfc4211#section-4.4)).
         *
         * @public
         * @readonly
         */
        readonly salt: OCTET_STRING,
        /**
         * @summary `owf`.
         * @description
         *
         * One-way function for key derivation; all implementations MUST
         * support SHA-1 ([RFC 4211 §4.4](https://datatracker.ietf.org/doc/html/rfc4211#section-4.4)).
         *
         * @public
         * @readonly
         */
        readonly owf: AlgorithmIdentifier,
        /**
         * @summary `iterationCount`.
         * @description
         *
         * Hash iterations in key derivation; MUST be at least 100
         * (higher minima such as 1000 are often suggested)
         * ([RFC 4211 §4.4](https://datatracker.ietf.org/doc/html/rfc4211#section-4.4)).
         *
         * @public
         * @readonly
         */
        readonly iterationCount: INTEGER,
        /**
         * @summary `mac`.
         * @description
         *
         * MAC algorithm; all implementations MUST support HMAC-SHA1
         * ([RFC 4211 §4.4](https://datatracker.ietf.org/doc/html/rfc4211#section-4.4)).
         *
         * @public
         * @readonly
         */
        readonly mac: AlgorithmIdentifier
    ) {}

    /**
     * @summary Restructures an object into a PBMParameter
     * @description
     *
     * This takes an `object` and converts it to a `PBMParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PBMParameter`.
     * @returns {PBMParameter}
     */
    public static _from_object(
        _o: { [_K in keyof PBMParameter]: PBMParameter[_K] }
    ): PBMParameter {
        return new PBMParameter(_o.salt, _o.owf, _o.iterationCount, _o.mac);
    }
}


/**
 * @summary The Leading Root Component Types of PBMParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PBMParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "salt",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "owf",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "iterationCount",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "mac",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of PBMParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PBMParameter: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PBMParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PBMParameter: $.ComponentSpec[] = [];


let _cached_decoder_for_PBMParameter: $.ASN1Decoder<PBMParameter> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PBMParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBMParameter} The decoded data structure.
 */
export function _decode_PBMParameter(el: _Element): PBMParameter {
    if (!_cached_decoder_for_PBMParameter) {
        _cached_decoder_for_PBMParameter = function (
            el: _Element
        ): PBMParameter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    "PBMParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "salt";
            sequence[1].name = "owf";
            sequence[2].name = "iterationCount";
            sequence[3].name = "mac";
            let salt!: OCTET_STRING;
            let owf!: AlgorithmIdentifier;
            let iterationCount!: INTEGER;
            let mac!: AlgorithmIdentifier;
            salt = $._decodeOctetString(sequence[0]);
            owf = _decode_AlgorithmIdentifier(sequence[1]);
            iterationCount = $._decodeInteger(sequence[2]);
            mac = _decode_AlgorithmIdentifier(sequence[3]);
            return new PBMParameter(salt, owf, iterationCount, mac);
        };
    }
    return _cached_decoder_for_PBMParameter(el);
}


let _cached_encoder_for_PBMParameter: $.ASN1Encoder<PBMParameter> | null = null;


/**
 * @summary Encodes a(n) PBMParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBMParameter, encoded as an ASN.1 Element.
 */
export function _encode_PBMParameter(
    value: PBMParameter,
    elGetter: $.ASN1Encoder<PBMParameter>
): _Element {
    if (!_cached_encoder_for_PBMParameter) {
        _cached_encoder_for_PBMParameter = function (
            value: PBMParameter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeOctetString(
                            value.salt,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.owf,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.iterationCount,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.mac,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PBMParameter(value, elGetter);
}


/* eslint-enable */
