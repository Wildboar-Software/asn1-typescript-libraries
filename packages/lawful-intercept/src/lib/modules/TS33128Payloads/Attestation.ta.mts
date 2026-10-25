/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Attestation
 * @description
 * 
 * Indicates the attestation level as defined in RFC 8588 [71] clause 4 for the
 * "shaken" PASSporT. The different values of attestation level are A = Full
 * Attestation, B= Partial Attestation, C = Gateway Attestation. For "div"
 * PASSporT where "attestation" is not available, the placeholder value "Not
 * available" shall be used.
 *
 * 3GPP TS 33.128, clause 7.11.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates the attestation level as defined in RFC 8588 [71] clause 4 for the
 * "shaken" PASSporT. The different values of attestation level are A = Full
 * Attestation, B= Partial Attestation, C = Gateway Attestation. For "div"
 * PASSporT where "attestation" is not available, the placeholder value "Not
 * available" shall be used.
 *
 * 3GPP TS 33.128, clause 7.11.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates the attestation level as defined in RFC 8588 [71] clause 4 for the
 * "shaken" PASSporT. The different values of attestation level are A = Full
 * Attestation, B= Partial Attestation, C = Gateway Attestation. For "div"
 * PASSporT where "attestation" is not available, the placeholder value "Not
 * available" shall be used.
 *
 * 3GPP TS 33.128, clause 7.11.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const Attestation_attestationA = Attestation.attestationA; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attestationA
 * @constant
 * @type {number}
 */
export
const attestationA = Attestation.attestationA; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Attestation_attestationB
 * @constant
 * @type {number}
 */
export
const Attestation_attestationB = Attestation.attestationB; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attestationB
 * @constant
 * @type {number}
 */
export
const attestationB = Attestation.attestationB; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Attestation_attestationC
 * @constant
 * @type {number}
 */
export
const Attestation_attestationC = Attestation.attestationC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attestationC
 * @constant
 * @type {number}
 */
export
const attestationC = Attestation.attestationC; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Attestation: $.ASN1Decoder<Attestation> = $._decodeEnumerated;
export const _encode_Attestation: $.ASN1Encoder<Attestation> = $._encodeEnumerated;


/* eslint-enable */
