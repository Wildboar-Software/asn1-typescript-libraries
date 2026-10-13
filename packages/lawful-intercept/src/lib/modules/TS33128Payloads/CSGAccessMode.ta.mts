/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CSGAccessMode {
    closedMode = 1,
    hybridMode = 2,
}

/**
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode_closedMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_closedMode: CSGAccessMode = CSGAccessMode.closedMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary closedMode
 * @constant
 * @type {number}
 */
export
const closedMode: CSGAccessMode = CSGAccessMode.closedMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGAccessMode_hybridMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_hybridMode: CSGAccessMode = CSGAccessMode.hybridMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridMode
 * @constant
 * @type {number}
 */
export
const hybridMode: CSGAccessMode = CSGAccessMode.hybridMode; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CSGAccessMode: $.ASN1Decoder<CSGAccessMode> = $._decodeEnumerated;
export const _encode_CSGAccessMode: $.ASN1Encoder<CSGAccessMode> = $._encodeEnumerated;


/* eslint-enable */
