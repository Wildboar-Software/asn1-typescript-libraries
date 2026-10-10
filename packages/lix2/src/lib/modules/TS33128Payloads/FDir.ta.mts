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
const FDir_downlink: FDir = FDir.downlink; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary downlink
 * @constant
 * @type {number}
 */
export
const downlink: FDir = FDir.downlink; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) FDir
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FDir = $._decodeEnumerated;

/**
 * @summary Encodes a(n) FDir into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FDir, encoded as an ASN.1 Element.
 */
export const _encode_FDir = $._encodeEnumerated;


/* eslint-enable */
