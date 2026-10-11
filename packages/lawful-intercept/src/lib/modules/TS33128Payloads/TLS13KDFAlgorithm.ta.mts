/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLS13KDFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13KDFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5869(1)     -- HKDF
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TLS13KDFAlgorithm {
    rfc5869 = 1,
}

/**
 * @summary TLS13KDFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13KDFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5869(1)     -- HKDF
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TLS13KDFAlgorithm = _enum_for_TLS13KDFAlgorithm;

/**
 * @summary TLS13KDFAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13KDFAlgorithm  ::=  ENUMERATED
 * {
 *     rfc5869(1)     -- HKDF
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TLS13KDFAlgorithm = _enum_for_TLS13KDFAlgorithm;

/**
 * @summary TLS13KDFAlgorithm_rfc5869
 * @constant
 * @type {number}
 */
export
const TLS13KDFAlgorithm_rfc5869: TLS13KDFAlgorithm = TLS13KDFAlgorithm.rfc5869; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfc5869
 * @constant
 * @type {number}
 */
export
const rfc5869: TLS13KDFAlgorithm = TLS13KDFAlgorithm.rfc5869; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_TLS13KDFAlgorithm: $.ASN1Decoder<TLS13KDFAlgorithm> = $._decodeEnumerated;

export const _encode_TLS13KDFAlgorithm: $.ASN1Encoder<TLS13KDFAlgorithm> = $._encodeEnumerated;


/* eslint-enable */
