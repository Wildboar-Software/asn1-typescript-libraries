/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CryptoQualityPair
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CryptoQualityPair ::= SEQUENCE {
 *  cryptoModuleCriteria INTEGER(0..255),
 *   -- The default should be 1, but DEFAULT implies OPTIONAL, which
 *   -- is not the intent. So the value has to be coded explicitly.
 *   -- 1 = FIPS 140-1
 *   -- all others reserved
 *  cryptoModuleRating INTEGER (0..255)
 *   -- the cryptoModuleRating value is in accordance with
 *   -- the specified cryptoModuleCriteria for each pair
 *   -- FIPS 140-1 ratings definitions:
 *   -- 0 = Reserved (encoding error)
 *   -- 1 = unevaluated/unknown,
 *   -- all others—see Appendix B
 * }
 * ```
 * 
 * @class
 */
export
class CryptoQualityPair {
    constructor (
        /**
         * @summary `cryptoModuleCriteria`.
         * @public
         * @readonly
         */
        readonly cryptoModuleCriteria: INTEGER,
        /**
         * @summary `cryptoModuleRating`.
         * @public
         * @readonly
         */
        readonly cryptoModuleRating: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a CryptoQualityPair
     * @description
     * 
     * This takes an `object` and converts it to a `CryptoQualityPair`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CryptoQualityPair`.
     * @returns {CryptoQualityPair}
     */
    public static _from_object (_o: { [_K in keyof (CryptoQualityPair)]: (CryptoQualityPair)[_K] }): CryptoQualityPair {
        return new CryptoQualityPair(_o.cryptoModuleCriteria, _o.cryptoModuleRating);
    }


}

/**
 * @summary The Leading Root Component Types of CryptoQualityPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CryptoQualityPair: $.ComponentSpec[] = [
    new $.ComponentSpec("cryptoModuleCriteria", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("cryptoModuleRating", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CryptoQualityPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CryptoQualityPair: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CryptoQualityPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CryptoQualityPair: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CryptoQualityPair: $.ASN1Decoder<CryptoQualityPair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CryptoQualityPair
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CryptoQualityPair (el: _Element): CryptoQualityPair {
    if (!_cached_decoder_for_CryptoQualityPair) { _cached_decoder_for_CryptoQualityPair = function (el: _Element): CryptoQualityPair {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CryptoQualityPair contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cryptoModuleCriteria";
    sequence[1].name = "cryptoModuleRating";
    let cryptoModuleCriteria!: INTEGER;
    let cryptoModuleRating!: INTEGER;
    cryptoModuleCriteria = $._decodeInteger(sequence[0]);
    cryptoModuleRating = $._decodeInteger(sequence[1]);
    return new CryptoQualityPair(
        cryptoModuleCriteria,
        cryptoModuleRating,

    );
}; }
    return _cached_decoder_for_CryptoQualityPair(el);
}

let _cached_encoder_for_CryptoQualityPair: $.ASN1Encoder<CryptoQualityPair> | null = null;

/**
 * @summary Encodes a(n) CryptoQualityPair into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptoQualityPair, encoded as an ASN.1 Element.
 */
export
function _encode_CryptoQualityPair (value: CryptoQualityPair, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CryptoQualityPair) { _cached_encoder_for_CryptoQualityPair = function (value: CryptoQualityPair, elGetter: $.ASN1Encoder<CryptoQualityPair>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.cryptoModuleCriteria, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.cryptoModuleRating, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CryptoQualityPair(value, elGetter);
}


/* eslint-enable */
