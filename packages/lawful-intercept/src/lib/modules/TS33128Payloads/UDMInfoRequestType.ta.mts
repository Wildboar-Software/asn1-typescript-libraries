/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMInfoRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMInfoRequestType  ::=  ENUMERATED
 * {
 *     hSS(1),
 *     aUSF(2),
 *     other(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMInfoRequestType {
    hSS = 1,
    aUSF = 2,
    other = 3,
}

/**
 * @summary UDMInfoRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMInfoRequestType  ::=  ENUMERATED
 * {
 *     hSS(1),
 *     aUSF(2),
 *     other(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMInfoRequestType = _enum_for_UDMInfoRequestType;

/**
 * @summary UDMInfoRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMInfoRequestType  ::=  ENUMERATED
 * {
 *     hSS(1),
 *     aUSF(2),
 *     other(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMInfoRequestType: typeof _enum_for_UDMInfoRequestType = _enum_for_UDMInfoRequestType;

/**
 * @summary UDMInfoRequestType_hSS
 * @constant
 * @type {number}
 */
export
const UDMInfoRequestType_hSS: _enum_for_UDMInfoRequestType.hSS = UDMInfoRequestType.hSS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hSS
 * @constant
 * @type {number}
 */
export
const hSS: _enum_for_UDMInfoRequestType.hSS = UDMInfoRequestType.hSS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMInfoRequestType_aUSF
 * @constant
 * @type {number}
 */
export
const UDMInfoRequestType_aUSF: _enum_for_UDMInfoRequestType.aUSF = UDMInfoRequestType.aUSF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aUSF
 * @constant
 * @type {number}
 */
export
const aUSF: _enum_for_UDMInfoRequestType.aUSF = UDMInfoRequestType.aUSF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMInfoRequestType_other
 * @constant
 * @type {number}
 */
export
const UDMInfoRequestType_other: _enum_for_UDMInfoRequestType.other = UDMInfoRequestType.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: _enum_for_UDMInfoRequestType.other = UDMInfoRequestType.other; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UDMInfoRequestType: $.ASN1Decoder<UDMInfoRequestType> = $._decodeEnumerated;
export const _encode_UDMInfoRequestType: $.ASN1Encoder<UDMInfoRequestType> = $._encodeEnumerated;


/* eslint-enable */
