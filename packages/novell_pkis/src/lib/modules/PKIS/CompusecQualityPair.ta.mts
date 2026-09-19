/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CompusecQualityPair
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompusecQualityPair ::= SEQUENCE {
 *  compusecCriteria INTEGER(0..255),
 *   -- The default should be 1, but DEFAULT implies OPTIONAL, which
 *   -- is not the intent. So the value has to be coded explicitly.
 *   -- 0= Reserved (encoding error)
 *   -- 1= Trusted Computer Security Evaluation Criteria (TCSEC)
 *   -- 2= International Trusted Security Evaluation Criteria (ITSEC)
 *   -- 3= Common Criteria
 *   -- all others reserved
 *  compusecRating INTEGER (0..255)
 *   -- the compusecRating is in accordance with the specified
 *   -- compusecCriteria for each pair in the sequence
 *   -- Defined values for ratings for components and systems formally
 *   -- evaluated in accordance with the Trusted Computer Security
 *   -- Evaluation Criteria and the Trusted Network Interpretation
 *   -- (Red Book) are provided in Appendix A.
 * }
 * ```
 * 
 * @class
 */
export
class CompusecQualityPair {
    constructor (
        /**
         * @summary `compusecCriteria`.
         * @public
         * @readonly
         */
        readonly compusecCriteria: INTEGER,
        /**
         * @summary `compusecRating`.
         * @public
         * @readonly
         */
        readonly compusecRating: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a CompusecQualityPair
     * @description
     * 
     * This takes an `object` and converts it to a `CompusecQualityPair`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompusecQualityPair`.
     * @returns {CompusecQualityPair}
     */
    public static _from_object (_o: { [_K in keyof (CompusecQualityPair)]: (CompusecQualityPair)[_K] }): CompusecQualityPair {
        return new CompusecQualityPair(_o.compusecCriteria, _o.compusecRating);
    }


}

/**
 * @summary The Leading Root Component Types of CompusecQualityPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompusecQualityPair: $.ComponentSpec[] = [
    new $.ComponentSpec("compusecCriteria", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("compusecRating", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CompusecQualityPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompusecQualityPair: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompusecQualityPair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompusecQualityPair: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompusecQualityPair: $.ASN1Decoder<CompusecQualityPair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompusecQualityPair
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompusecQualityPair (el: _Element): CompusecQualityPair {
    if (!_cached_decoder_for_CompusecQualityPair) { _cached_decoder_for_CompusecQualityPair = function (el: _Element): CompusecQualityPair {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CompusecQualityPair contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "compusecCriteria";
    sequence[1].name = "compusecRating";
    let compusecCriteria!: INTEGER;
    let compusecRating!: INTEGER;
    compusecCriteria = $._decodeInteger(sequence[0]);
    compusecRating = $._decodeInteger(sequence[1]);
    return new CompusecQualityPair(
        compusecCriteria,
        compusecRating,

    );
}; }
    return _cached_decoder_for_CompusecQualityPair(el);
}

let _cached_encoder_for_CompusecQualityPair: $.ASN1Encoder<CompusecQualityPair> | null = null;

/**
 * @summary Encodes a(n) CompusecQualityPair into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompusecQualityPair, encoded as an ASN.1 Element.
 */
export
function _encode_CompusecQualityPair (value: CompusecQualityPair, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompusecQualityPair) { _cached_encoder_for_CompusecQualityPair = function (value: CompusecQualityPair, elGetter: $.ASN1Encoder<CompusecQualityPair>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.compusecCriteria, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.compusecRating, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompusecQualityPair(value, elGetter);
}


/* eslint-enable */
