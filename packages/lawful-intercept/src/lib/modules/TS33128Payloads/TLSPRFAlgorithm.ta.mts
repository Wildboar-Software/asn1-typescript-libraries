/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLSPRFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSPRFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5246(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLSPRFAlgorithm {
    rfc5246 = 1,
}

/**
 * @summary TLSPRFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSPRFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5246(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLSPRFAlgorithm = _enum_for_TLSPRFAlgorithm;

/**
 * @summary TLSPRFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLSPRFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5246(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLSPRFAlgorithm: typeof _enum_for_TLSPRFAlgorithm = _enum_for_TLSPRFAlgorithm;

/**
 * @summary TLSPRFAlgorithm_rfc5246
 * @constant
 * @type {number}
 */
export
const TLSPRFAlgorithm_rfc5246: _enum_for_TLSPRFAlgorithm.rfc5246 = TLSPRFAlgorithm.rfc5246; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfc5246
 * @constant
 * @type {number}
 */
export
const rfc5246: _enum_for_TLSPRFAlgorithm.rfc5246 = TLSPRFAlgorithm.rfc5246; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TLSPRFAlgorithm: $.ASN1Decoder<TLSPRFAlgorithm> = $._decodeEnumerated;
export const _encode_TLSPRFAlgorithm: $.ASN1Encoder<TLSPRFAlgorithm> = $._encodeEnumerated;


/* eslint-enable */
