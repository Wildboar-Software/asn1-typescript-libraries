/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DirectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DirectionType {
    toTarget = 0,
    fromTarget = 1,
    unknown = 2,
}

/**
 * @summary DirectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DirectionType = _enum_for_DirectionType;

/**
 * @summary DirectionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectionType  ::=  ENUMERATED {
 *     toTarget,
 *     fromTarget,
 *     unknown
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DirectionType = _enum_for_DirectionType;

/**
 * @summary DirectionType_toTarget
 * @constant
 * @type {number}
 */
export
const DirectionType_toTarget: DirectionType = DirectionType.toTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toTarget
 * @constant
 * @type {number}
 */
export
const toTarget: DirectionType = DirectionType.toTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DirectionType_fromTarget
 * @constant
 * @type {number}
 */
export
const DirectionType_fromTarget: DirectionType = DirectionType.fromTarget; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fromTarget
 * @constant
 * @type {number}
 */
export
const fromTarget: DirectionType = DirectionType.fromTarget; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DirectionType_unknown
 * @constant
 * @type {number}
 */
export
const DirectionType_unknown: DirectionType = DirectionType.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: DirectionType = DirectionType.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_DirectionType: $.ASN1Decoder<DirectionType> = $._decodeEnumerated;
export const _encode_DirectionType: $.ASN1Encoder<DirectionType> = $._encodeEnumerated;


/* eslint-enable */
