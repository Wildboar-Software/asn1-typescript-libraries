/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Attestation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Attestation  ::=  ENUMERATED
 * {
 *     attestationA(1),
 *     attestationB(2),
 *     attestationC(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Attestation {
    attestationA = 1,
    attestationB = 2,
    attestationC = 3,
}

/**
 * @summary Attestation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Attestation  ::=  ENUMERATED
 * {
 *     attestationA(1),
 *     attestationB(2),
 *     attestationC(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Attestation = _enum_for_Attestation;

/**
 * @summary Attestation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Attestation  ::=  ENUMERATED
 * {
 *     attestationA(1),
 *     attestationB(2),
 *     attestationC(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Attestation = _enum_for_Attestation;

/**
 * @summary Attestation_attestationA
 * @constant
 * @type {number}
 */
export
const Attestation_attestationA: Attestation = Attestation.attestationA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attestationA
 * @constant
 * @type {number}
 */
export
const attestationA: Attestation = Attestation.attestationA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Attestation_attestationB
 * @constant
 * @type {number}
 */
export
const Attestation_attestationB: Attestation = Attestation.attestationB; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attestationB
 * @constant
 * @type {number}
 */
export
const attestationB: Attestation = Attestation.attestationB; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Attestation_attestationC
 * @constant
 * @type {number}
 */
export
const Attestation_attestationC: Attestation = Attestation.attestationC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attestationC
 * @constant
 * @type {number}
 */
export
const attestationC: Attestation = Attestation.attestationC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) Attestation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Attestation = $._decodeEnumerated;

/**
 * @summary Encodes a(n) Attestation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attestation, encoded as an ASN.1 Element.
 */
export const _encode_Attestation = $._encodeEnumerated;


/* eslint-enable */
