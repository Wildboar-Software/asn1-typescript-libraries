/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PositioningMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PositioningMode {
    uEBased = 1,
    uEAssisted = 2,
    conventional = 3,
}

/**
 * @summary PositioningMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PositioningMode = _enum_for_PositioningMode;

/**
 * @summary PositioningMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PositioningMode = _enum_for_PositioningMode;

/**
 * @summary PositioningMode_uEBased
 * @constant
 * @type {number}
 */
export
const PositioningMode_uEBased: PositioningMode = PositioningMode.uEBased; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEBased
 * @constant
 * @type {number}
 */
export
const uEBased: PositioningMode = PositioningMode.uEBased; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMode_uEAssisted
 * @constant
 * @type {number}
 */
export
const PositioningMode_uEAssisted: PositioningMode = PositioningMode.uEAssisted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEAssisted
 * @constant
 * @type {number}
 */
export
const uEAssisted: PositioningMode = PositioningMode.uEAssisted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMode_conventional
 * @constant
 * @type {number}
 */
export
const PositioningMode_conventional: PositioningMode = PositioningMode.conventional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conventional
 * @constant
 * @type {number}
 */
export
const conventional: PositioningMode = PositioningMode.conventional; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_PositioningMode: $.ASN1Decoder<PositioningMode> = $._decodeEnumerated;

export const _encode_PositioningMode: $.ASN1Encoder<PositioningMode> = $._encodeEnumerated;

/* eslint-enable */
