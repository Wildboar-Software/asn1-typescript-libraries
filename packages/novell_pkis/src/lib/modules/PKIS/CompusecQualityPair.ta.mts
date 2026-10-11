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
 * @summary CompusecQualityPair
 * @description
 *
 * A computer-security evaluation criterion and the rating under that
 * criterion. Display names: "Computer Security Criteria" and
 * "Computer Security Rating". §4.1.
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
         * @description
         *
         * Which evaluation scheme `compusecRating` uses. Coded
         * explicitly (a DEFAULT would have made it optional).
         *
         * | Value | Criterion |
         * | ---: | --- |
         * | 0 | Reserved. An encoding error. |
         * | 1 | TCSEC (Orange Book), NCSC. |
         * | 2 | ITSEC. |
         * | 3 | Common Criteria. |
         *
         * Other values are reserved. The first release uses TCSEC.
         * Numeric rankings for ITSEC and Common Criteria are not
         * assigned in this version; §4.1 says a later ranking would
         * balance functionality and assurance so it can be compared
         * with TCSEC. Appendix A's heading writes
         * `compusecCriteria(0)` for the TCSEC table.
         *
         * @public
         * @readonly
         */
        readonly compusecCriteria: INTEGER,
        /**
         * @summary `compusecRating`.
         * @description
         *
         * Rating under `compusecCriteria`. For TCSEC (criteria value 1)
         * the scale is Appendix A. Spacing between levels is arbitrary;
         * the number is a broad indicator. Higher is stronger. The
         * printed appendix marks first-release values in bold italics;
         * that emphasis is not repeated here.
         *
         * | Value | TCSEC rating |
         * | ---: | --- |
         * | 0 | Unknown. |
         * | 5 | Not evaluated. Security properties recognized inside the organization only. |
         * | 10 | D. Failed evaluation. |
         * | 15 | Not certified. Accredited by other enterprises. |
         * | 20 | Accredited by a site Trusted Facility Manual. Not formally evaluated. |
         * | 25 | Evaluated product, installed outside the TFM, enterprise-accredited. |
         * | 30 | Designed to meet C1. |
         * | 35 | C1, in formal evaluation, TFM, enterprise-accredited. |
         * | 40 | C1, evaluated, TFM, accredited by other enterprises. |
         * | 45 | Certified C1, continuous RAMP, enterprise-accredited. |
         * | 50 | Certified C1, EPL, TFM, enterprise-accredited. |
         * | 55 | Independently accredited C1. |
         * | 60 | Designed to meet C2. |
         * | 65 | C2, in formal evaluation, TFM, enterprise-accredited. |
         * | 70 | C2 previously evaluated, RAMP pending. Example: NetWare 5.0. |
         * | 75 | C2 evaluated, not installed per the TFM. Example: NetWare 4.11 with weaker clients. |
         * | 80 | C2 evaluated, TFM, accredited by other enterprises. |
         * | 85 | Certified C2, continuous RAMP. Example: NetWare 4.11, TFM, CISSP supervision. |
         * | 90 | Certified C2, EPL, TFM. |
         * | 95 | Independently accredited C2. |
         * | 100 | Designed to meet B1. |
         * | 105 | B1 previously evaluated, RAMP pending. |
         * | 110 | B1 evaluated, not installed per the TFM. |
         * | 115 | B1, in formal evaluation, TFM. |
         * | 120 | B1 evaluated, TFM, accredited by other enterprises. |
         * | 125 | Certified B1, continuous RAMP. |
         * | 130 | Certified B1, EPL, TFM. |
         * | 135 | Independently accredited B1. |
         * | 140 | Designed to meet B2. |
         * | 145 | B2 previously evaluated, RAMP pending. |
         * | 150 | B2 evaluated, not installed per the TFM. |
         * | 155 | B2, in formal evaluation, TFM. |
         * | 160 | B2 evaluated, TFM, accredited by other enterprises. |
         * | 165 | Certified B2, continuous RAMP. |
         * | 170 | Certified B2, EPL, TFM. |
         * | 175 | Independently accredited B2. |
         * | 180 | Designed to meet B3. |
         * | 185 | B3 previously evaluated, RAMP pending. |
         * | 190 | B3 evaluated, not installed per the TFM. |
         * | 195 | B3, in formal evaluation, TFM. |
         * | 200 | B3 evaluated, TFM. Used for Novell Operations certificates in the §4.5 chain. |
         * | 205 | Certified B3, continuous RAMP. |
         * | 210 | Certified B3, EPL, TFM. |
         * | 215 | Independently accredited B3. |
         * | 220 | Designed to meet A1. |
         * | 225 | A1 previously evaluated, RAMP pending. |
         * | 230 | A1 evaluated, not installed per the TFM. |
         * | 235 | A1, in formal evaluation, TFM. |
         * | 240 | A1 evaluated, TFM. |
         * | 245 | Certified A1, continuous RAMP. |
         * | 250 | Certified A1, EPL, TFM. |
         * | 255 | Independently accredited A1. |
         *
         * Other values are reserved. PKIS will not claim a TCSEC rating
         * above C2 for NetWare, and the installed configuration may be
         * lower. §4, §4.1.
         *
         * @public
         * @readonly
         */
        readonly compusecRating: INTEGER
    ) {
        assertIntegerRange(compusecCriteria, 0n, 255n, "CompusecQualityPair.compusecCriteria");
        assertIntegerRange(compusecRating, 0n, 255n, "CompusecQualityPair.compusecRating");
    }

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
    if (!_cached_encoder_for_CompusecQualityPair) { _cached_encoder_for_CompusecQualityPair = function (value: CompusecQualityPair): _Element {
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
