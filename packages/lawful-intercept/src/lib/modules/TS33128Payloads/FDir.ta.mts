/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FDir
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDir  ::=  ENUMERATED
 * {
 *     downlink(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FDir {
    downlink = 1,
}

/**
 * @summary FDir
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDir  ::=  ENUMERATED
 * {
 *     downlink(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FDir = _enum_for_FDir;

/**
 * @summary FDir
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FDir  ::=  ENUMERATED
 * {
 *     downlink(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FDir = _enum_for_FDir;

/**
 * @summary FDir_downlink
 * @constant
 * @type {number}
 */
export
const FDir_downlink = FDir.downlink satisfies FDir; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downlink
 * @constant
 * @type {number}
 */
export
const downlink = FDir.downlink satisfies FDir; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FDir: $.ASN1Decoder<FDir> = $._decodeEnumerated;
export const _encode_FDir: $.ASN1Encoder<FDir> = $._encodeEnumerated;


/* eslint-enable */
