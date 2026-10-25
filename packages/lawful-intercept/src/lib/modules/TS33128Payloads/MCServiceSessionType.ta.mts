/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceSessionType  ::=  ENUMERATED
 * {
 *     private(1),
 *     group(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MCServiceSessionType {
    private_ = 1,
    group = 2,
}

/**
 * @summary MCServiceSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceSessionType  ::=  ENUMERATED
 * {
 *     private(1),
 *     group(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MCServiceSessionType = _enum_for_MCServiceSessionType;

/**
 * @summary MCServiceSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceSessionType  ::=  ENUMERATED
 * {
 *     private(1),
 *     group(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MCServiceSessionType: typeof _enum_for_MCServiceSessionType = _enum_for_MCServiceSessionType;

/**
 * @summary MCServiceSessionType_private_
 * @constant
 * @type {number}
 */
export
const MCServiceSessionType_private_: _enum_for_MCServiceSessionType.private_ = MCServiceSessionType.private_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary private_
 * @constant
 * @type {number}
 */
export
const private_: _enum_for_MCServiceSessionType.private_ = MCServiceSessionType.private_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceSessionType_group
 * @constant
 * @type {number}
 */
export
const MCServiceSessionType_group: _enum_for_MCServiceSessionType.group = MCServiceSessionType.group; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary group
 * @constant
 * @type {number}
 */
export
const group: _enum_for_MCServiceSessionType.group = MCServiceSessionType.group; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MCServiceSessionType: $.ASN1Decoder<MCServiceSessionType> = $._decodeEnumerated;
export const _encode_MCServiceSessionType: $.ASN1Encoder<MCServiceSessionType> = $._encodeEnumerated;


/* eslint-enable */
