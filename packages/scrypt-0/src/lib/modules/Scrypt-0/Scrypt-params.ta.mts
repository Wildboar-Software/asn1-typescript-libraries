/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Scrypt_params
 * @description
 *
 * Parameters for the scrypt password-based KDF when carried in an
 * `AlgorithmIdentifier` with algorithm `id-scrypt`. Same abstraction
 * level as PKCS #5 `PBKDF2-params`: `id-scrypt` may be used where
 * `id-PBKDF2` is used, with these parameters corresponding to
 * `PBKDF2-params` (RFC 7914 §7). Intended applications include
 * PKCS #8 and other key-management syntax.
 *
 * ASN.1 constrains each INTEGER field to `(1..MAX)`. Algorithmic
 * bounds on N, r, p, and dkLen are in RFC 7914 §2 and §6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scrypt-params ::= SEQUENCE {
 *     salt                        OCTET STRING,
 *     costParameter               INTEGER (1..MAX),
 *     blockSize                   INTEGER (1..MAX),
 *     parallelizationParameter    INTEGER (1..MAX),
 *     keyLength                   INTEGER (1..MAX) OPTIONAL }
 * ```
 *
 */
export
class Scrypt_params {
    constructor (
        /**
         * @summary `salt`.
         * @description
         *
         * Salt value (octet string). RFC 7914 §2: normally uniquely and
         * randomly generated (see RFC 4086).
         *
         * @public
         * @readonly
         */
        readonly salt: OCTET_STRING,
        /**
         * @summary `costParameter`.
         * @description
         *
         * CPU/Memory cost parameter N (RFC 7914 §7). Per §2 / §6: must be
         * larger than 1, a power of 2, and less than `2^(128 * r / 8)`
         * where `r` is `blockSize`.
         *
         * @public
         * @readonly
         */
        readonly costParameter: INTEGER,
        /**
         * @summary `blockSize`.
         * @description
         *
         * Block size parameter r (RFC 7914 §7). Affects memory and the
         * bounds on N and p (RFC 7914 §2).
         *
         * @public
         * @readonly
         */
        readonly blockSize: INTEGER,
        /**
         * @summary `parallelizationParameter`.
         * @description
         *
         * Parallelization parameter p (RFC 7914 §7). Per §2 / §6: a
         * positive integer less than or equal to
         * `((2^32 - 1) * 32) / (128 * r)` where `r` is `blockSize`.
         * Independent `SMix` runs; large p raises CPU cost without
         * raising memory (RFC 7914 §2).
         *
         * @public
         * @readonly
         */
        readonly parallelizationParameter: INTEGER,
        /**
         * @summary `keyLength`.
         * @description
         *
         * Optional intended length in octets of the derived key (dkLen).
         *
         * > The maximum key length allowed depends on the implementation;
         * > it is expected that implementation profiles may further
         * > constrain the bounds. This field only provides convenience;
         * > the key length is not cryptographically protected.
         *
         * (RFC 7914 §7.) Per §2 / §6, dkLen is a positive integer less
         * than or equal to `(2^32 - 1) * 32`.
         *
         * @public
         * @readonly
         */
        readonly keyLength?: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a Scrypt_params
     * @description
     *
     * This takes an `object` and converts it to a `Scrypt_params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Scrypt_params`.
     * @returns {Scrypt_params}
     */
    public static _from_object (_o: { [_K in keyof (Scrypt_params)]: (Scrypt_params)[_K] }): Scrypt_params {
        return new Scrypt_params(_o.salt, _o.costParameter, _o.blockSize, _o.parallelizationParameter, _o.keyLength);
    }


}


/**
 * @summary The Leading Root Component Types of Scrypt_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Scrypt_params: $.ComponentSpec[] = [
    new $.ComponentSpec("salt", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("costParameter", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("blockSize", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("parallelizationParameter", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("keyLength", true, $.hasTag(_TagClass.universal, 2))
];


/**
 * @summary The Trailing Root Component Types of Scrypt_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Scrypt_params: $.ComponentSpec[] = [

];


/**
 * @summary The Extension Addition Component Types of Scrypt_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_Scrypt_params: $.ComponentSpec[] = [

];


let _cached_decoder_for_Scrypt_params: $.ASN1Decoder<Scrypt_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Scrypt_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scrypt_params} The decoded data structure.
 */
export
function _decode_Scrypt_params (el: _Element): Scrypt_params {
    if (!_cached_decoder_for_Scrypt_params) { _cached_decoder_for_Scrypt_params = function (el: _Element): Scrypt_params {
    let salt!: OCTET_STRING;
    let costParameter!: INTEGER;
    let blockSize!: INTEGER;
    let parallelizationParameter!: INTEGER;
    let keyLength: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "salt": (_el: _Element): void => { salt = $._decodeOctetString(_el); },
        "costParameter": (_el: _Element): void => { costParameter = $._decodeInteger(_el); },
        "blockSize": (_el: _Element): void => { blockSize = $._decodeInteger(_el); },
        "parallelizationParameter": (_el: _Element): void => { parallelizationParameter = $._decodeInteger(_el); },
        "keyLength": (_el: _Element): void => { keyLength = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Scrypt_params,
        _extension_additions_list_spec_for_Scrypt_params,
        _root_component_type_list_2_spec_for_Scrypt_params,
        undefined,
    );
    return new Scrypt_params(
        salt,
        costParameter,
        blockSize,
        parallelizationParameter,
        keyLength
    );
}; }
    return _cached_decoder_for_Scrypt_params(el);
}


let _cached_encoder_for_Scrypt_params: $.ASN1Encoder<Scrypt_params> | null = null;


/**
 * @summary Encodes a(n) Scrypt_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scrypt_params, encoded as an ASN.1 Element.
 */
export
function _encode_Scrypt_params (value: Scrypt_params, elGetter: $.ASN1Encoder<Scrypt_params>): _Element {
    if (!_cached_encoder_for_Scrypt_params) { _cached_encoder_for_Scrypt_params = function (value: Scrypt_params): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.salt, $.DER),
            /* REQUIRED   */ $._encodeInteger(value.costParameter, $.DER),
            /* REQUIRED   */ $._encodeInteger(value.blockSize, $.DER),
            /* REQUIRED   */ $._encodeInteger(value.parallelizationParameter, $.DER),
            /* IF_ABSENT  */ ((value.keyLength === undefined) ? undefined : $._encodeInteger(value.keyLength, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_Scrypt_params(value, elGetter);
}


/* eslint-enable */
