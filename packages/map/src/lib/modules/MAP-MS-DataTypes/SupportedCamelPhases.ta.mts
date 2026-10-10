/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupportedCamelPhases
 * @description
 *
 * CAMEL phases supported by the node. A node shall mark all phases it supports.
 * Other bits shall be discarded. Must be present in Update Location if a CAMEL
 * phase other than phase 1 is supported.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.3.36H, 8.1.2.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedCamelPhases  ::=  BIT STRING {
 *     phase1 (0),
 *     phase2 (1),
 *     phase3 (2),
 *     phase4 (3)} (SIZE (1..16))
 * ```
 */
export
type SupportedCamelPhases = BIT_STRING;

/**
 * @summary SupportedCamelPhases_phase1
 * @constant
 */
export
const SupportedCamelPhases_phase1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary phase1
 * @constant
 */
export
const phase1: number = SupportedCamelPhases_phase1; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedCamelPhases_phase2
 * @constant
 */
export
const SupportedCamelPhases_phase2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary phase2
 * @constant
 */
export
const phase2: number = SupportedCamelPhases_phase2; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedCamelPhases_phase3
 * @constant
 */
export
const SupportedCamelPhases_phase3: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary phase3
 * @constant
 */
export
const phase3: number = SupportedCamelPhases_phase3; /* SHORT_NAMED_BIT */

/**
 * @summary SupportedCamelPhases_phase4
 * @constant
 */
export
const SupportedCamelPhases_phase4: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary phase4
 * @constant
 */
export
const phase4: number = SupportedCamelPhases_phase4; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedCamelPhases
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SupportedCamelPhases = (el: _Element): SupportedCamelPhases => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 16) {
        throw new ASN1SizeError("SupportedCamelPhases violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SupportedCamelPhases into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedCamelPhases, encoded as an ASN.1 Element.
 */
export const _encode_SupportedCamelPhases = $._encodeBitString;


/* eslint-enable */
