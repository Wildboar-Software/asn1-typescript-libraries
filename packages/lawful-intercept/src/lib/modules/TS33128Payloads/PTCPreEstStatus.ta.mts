/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * Indicates if the pre-established session is established (setup completed),
 * modified, or released.
 *
 * 3GPP TS 33.128, clause 7.5.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCPreEstStatus {
    established = 1,
    modified = 2,
    released = 3,
}

/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * Indicates if the pre-established session is established (setup completed),
 * modified, or released.
 *
 * 3GPP TS 33.128, clause 7.5.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCPreEstStatus = _enum_for_PTCPreEstStatus;

/**
 * @summary PTCPreEstStatus
 * @description
 * 
 * Indicates if the pre-established session is established (setup completed),
 * modified, or released.
 *
 * 3GPP TS 33.128, clause 7.5.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPreEstStatus   ::=  ENUMERATED
 * {
 *     established(1),
 *     modified(2),
 *     released(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCPreEstStatus: typeof _enum_for_PTCPreEstStatus = _enum_for_PTCPreEstStatus;

/**
 * @summary PTCPreEstStatus_established
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_established: _enum_for_PTCPreEstStatus.established = PTCPreEstStatus.established; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @constant
 * @type {number}
 */
export
const established: _enum_for_PTCPreEstStatus.established = PTCPreEstStatus.established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPreEstStatus_modified
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_modified: _enum_for_PTCPreEstStatus.modified = PTCPreEstStatus.modified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modified
 * @constant
 * @type {number}
 */
export
const modified: _enum_for_PTCPreEstStatus.modified = PTCPreEstStatus.modified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCPreEstStatus_released
 * @constant
 * @type {number}
 */
export
const PTCPreEstStatus_released: _enum_for_PTCPreEstStatus.released = PTCPreEstStatus.released; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @constant
 * @type {number}
 */
export
const released: _enum_for_PTCPreEstStatus.released = PTCPreEstStatus.released; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCPreEstStatus: $.ASN1Decoder<PTCPreEstStatus> = $._decodeEnumerated;
export const _encode_PTCPreEstStatus: $.ASN1Encoder<PTCPreEstStatus> = $._encodeEnumerated;


/* eslint-enable */
