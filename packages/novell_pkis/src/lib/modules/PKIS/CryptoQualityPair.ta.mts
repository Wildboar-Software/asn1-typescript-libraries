/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { assertIntegerRange } from "../../assertIntegerRange.mjs";



/**
 * @summary CryptoQualityPair
 * @description
 *
 * A cryptographic-module evaluation criterion and the rating under that
 * criterion. Display names: "Crypto Module Criteria" and "Crypto
 * Module Rating". FIPS 140-1 is the only unclassified criteria the
 * document treats as accepted. Extra levels exist here because of
 * "designed to meet" claims and because FIPS 140-1 covers FIPS
 * algorithms (DSA, DES) and not, for example, RSA. §4.2.
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
         * @description
         *
         * Which module-evaluation scheme `cryptoModuleRating` uses.
         * Coded explicitly. The ASN.1 assigns 1 to FIPS 140-1 and
         * reserves every other value. Appendix B's heading writes
         * `cryptoModuleCriteria(0)` for that same FIPS 140-1 table.
         *
         * @public
         * @readonly
         */
        readonly cryptoModuleCriteria: INTEGER,
        /**
         * @summary `cryptoModuleRating`.
         * @description
         *
         * Rating under `cryptoModuleCriteria`. Appendix B is the FIPS
         * 140-1 scale. The ASN.1 comment says 0 is reserved (an
         * encoding error) and 1 is unevaluated/unknown. Appendix B
         * assigns 0 to unevaluated/unknown and does not define 1.
         * NICI had not been evaluated against FIPS 140-1, so its
         * rating is 10. §4.
         *
         * | Value | FIPS 140-1 rating (Appendix B) |
         * | ---: | --- |
         * | 0 | Unevaluated. Unknown. No claims. |
         * | 5 | Unevaluated. Unmodified commercial toolkit binary. |
         * | 10 | Unevaluated. Vendor-inspected or enhanced commercial source. |
         * | 25 | Claimed designed to meet level 1, except the FIPS-algorithm restriction. |
         * | 30 | Claimed designed to meet level 1. |
         * | 35 | Evaluated at level 1 except the FIPS-algorithm restriction; changed since, without reevaluation. |
         * | 40 | Evaluated at level 1; changed since, without reevaluation. |
         * | 45 | Evaluated at level 1, except the FIPS-algorithm restriction. |
         * | 50 | Evaluated at level 1. |
         * | 75 | Claimed designed to meet level 2, except the FIPS-algorithm restriction. |
         * | 80 | Claimed designed to meet level 2. |
         * | 85 | Evaluated at level 2 except the FIPS-algorithm restriction; changed since. |
         * | 90 | Evaluated at level 2; changed since. |
         * | 95 | Evaluated at level 2, except the FIPS-algorithm restriction. |
         * | 100 | Evaluated at level 2. |
         * | 125 | Claimed designed to meet level 3, except the FIPS-algorithm restriction. |
         * | 130 | Claimed designed to meet level 3. |
         * | 135 | Evaluated at level 3 except the FIPS-algorithm restriction; changed since. |
         * | 140 | Evaluated at level 3; changed since. |
         * | 145 | Evaluated at level 3, except the FIPS-algorithm restriction. |
         * | 150 | Evaluated at level 3. |
         * | 175 | Claimed designed to meet level 4, except the FIPS-algorithm restriction. |
         * | 180 | Claimed designed to meet level 4. |
         * | 185 | Evaluated at level 4 except the FIPS-algorithm restriction; changed since. |
         * | 190 | Evaluated at level 4; changed since. |
         * | 195 | Evaluated at level 4, except the FIPS-algorithm restriction. |
         * | 200 | Evaluated at level 4. |
         *
         * Other values are reserved.
         *
         * @public
         * @readonly
         */
        readonly cryptoModuleRating: INTEGER
    ) {
        assertIntegerRange(cryptoModuleCriteria, 0n, 255n, "CryptoQualityPair.cryptoModuleCriteria");
        assertIntegerRange(cryptoModuleRating, 0n, 255n, "CryptoQualityPair.cryptoModuleRating");
    }

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
    if (!_cached_encoder_for_CryptoQualityPair) { _cached_encoder_for_CryptoQualityPair = function (value: CryptoQualityPair): _Element {
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
