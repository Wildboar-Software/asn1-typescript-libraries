/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION Scrypt_params */
/**
 * @summary Scrypt_params
 * @description
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
 * @class
 */
export
class Scrypt_params {
    constructor (
        /**
         * @summary `salt`.
         * @public
         * @readonly
         */
        readonly salt: OCTET_STRING,
        /**
         * @summary `costParameter`.
         * @public
         * @readonly
         */
        readonly costParameter: INTEGER,
        /**
         * @summary `blockSize`.
         * @public
         * @readonly
         */
        readonly blockSize: INTEGER,
        /**
         * @summary `parallelizationParameter`.
         * @public
         * @readonly
         */
        readonly parallelizationParameter: INTEGER,
        /**
         * @summary `keyLength`.
         * @public
         * @readonly
         */
        readonly keyLength: OPTIONAL<INTEGER>
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
/* END_OF_SYMBOL_DEFINITION Scrypt_params */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Scrypt_params */
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
    new $.ComponentSpec("salt", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("costParameter", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("blockSize", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("parallelizationParameter", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("keyLength", true, $.hasTag(_TagClass.universal, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Scrypt_params */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Scrypt_params */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Scrypt_params */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Scrypt_params */
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
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Scrypt_params */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Scrypt_params */
let _cached_decoder_for_Scrypt_params: $.ASN1Decoder<Scrypt_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Scrypt_params */

/* START_OF_SYMBOL_DEFINITION _decode_Scrypt_params */
/**
 * @summary Decodes an ASN.1 element into a(n) Scrypt_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scrypt_params} The decoded data structure.
 */
export
function _decode_Scrypt_params (el: _Element) {
    if (!_cached_decoder_for_Scrypt_params) { _cached_decoder_for_Scrypt_params = function (el: _Element): Scrypt_params {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let salt!: OCTET_STRING;
    let costParameter!: INTEGER;
    let blockSize!: INTEGER;
    let parallelizationParameter!: INTEGER;
    let keyLength: OPTIONAL<INTEGER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "salt": (_el: _Element): void => { salt = $._decodeOctetString(_el); },
        "costParameter": (_el: _Element): void => { costParameter = $._decodeInteger(_el); },
        "blockSize": (_el: _Element): void => { blockSize = $._decodeInteger(_el); },
        "parallelizationParameter": (_el: _Element): void => { parallelizationParameter = $._decodeInteger(_el); },
        "keyLength": (_el: _Element): void => { keyLength = $._decodeInteger(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Scrypt_params,
        _extension_additions_list_spec_for_Scrypt_params,
        _root_component_type_list_2_spec_for_Scrypt_params,
        undefined,
    );
    return new Scrypt_params( /* SEQUENCE_CONSTRUCTOR_CALL */
        salt,
        costParameter,
        blockSize,
        parallelizationParameter,
        keyLength
    );
}; }
    return _cached_decoder_for_Scrypt_params(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Scrypt_params */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Scrypt_params */
let _cached_encoder_for_Scrypt_params: $.ASN1Encoder<Scrypt_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Scrypt_params */

/* START_OF_SYMBOL_DEFINITION _encode_Scrypt_params */
/**
 * @summary Encodes a(n) Scrypt_params into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scrypt_params, encoded as an ASN.1 Element.
 */
export
function _encode_Scrypt_params (value: Scrypt_params, elGetter: $.ASN1Encoder<Scrypt_params>) {
    if (!_cached_encoder_for_Scrypt_params) { _cached_encoder_for_Scrypt_params = function (value: Scrypt_params, elGetter: $.ASN1Encoder<Scrypt_params>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.salt, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.costParameter, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.blockSize, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.parallelizationParameter, $.BER),
            /* IF_ABSENT  */ ((value.keyLength === undefined) ? undefined : $._encodeInteger(value.keyLength, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Scrypt_params(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Scrypt_params */

/* eslint-enable */
