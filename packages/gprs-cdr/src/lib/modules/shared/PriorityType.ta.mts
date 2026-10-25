/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PriorityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityType  ::=  ENUMERATED {
 *    low         ( 0 ),
 *    normal      ( 1 ),
 *    high        ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PriorityType {
    low = 0,
    normal = 1,
    high = 2,
}

/**
 * @summary PriorityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityType  ::=  ENUMERATED {
 *    low         ( 0 ),
 *    normal      ( 1 ),
 *    high        ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type PriorityType = _enum_for_PriorityType;

/**
 * @summary PriorityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PriorityType  ::=  ENUMERATED {
 *    low         ( 0 ),
 *    normal      ( 1 ),
 *    high        ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PriorityType: typeof _enum_for_PriorityType = _enum_for_PriorityType;

/**
 * @summary PriorityType_low
 * @constant
 * @type {number}
 */
export
const PriorityType_low: _enum_for_PriorityType.low = PriorityType.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: _enum_for_PriorityType.low = PriorityType.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityType_normal
 * @constant
 * @type {number}
 */
export
const PriorityType_normal: _enum_for_PriorityType.normal = PriorityType.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: _enum_for_PriorityType.normal = PriorityType.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PriorityType_high
 * @constant
 * @type {number}
 */
export
const PriorityType_high: _enum_for_PriorityType.high = PriorityType.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: _enum_for_PriorityType.high = PriorityType.high; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PriorityType: $.ASN1Decoder<PriorityType> = $._decodeEnumerated;

export
const _encode_PriorityType: $.ASN1Encoder<PriorityType> = $._encodeEnumerated;

/* eslint-enable */
