/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VolumeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolumeUnit  ::=  ENUMERATED {
 *     octet(0),
 *     segment(1),
 *     message(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VolumeUnit {
    octet = 0,
    segment = 1,
    message = 2,
}

/**
 * @summary VolumeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolumeUnit  ::=  ENUMERATED {
 *     octet(0),
 *     segment(1),
 *     message(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VolumeUnit = _enum_for_VolumeUnit;

/**
 * @summary VolumeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VolumeUnit  ::=  ENUMERATED {
 *     octet(0),
 *     segment(1),
 *     message(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VolumeUnit = _enum_for_VolumeUnit;

/**
 * @summary VolumeUnit_octet
 * @constant
 * @type {number}
 */
export
const VolumeUnit_octet: VolumeUnit = VolumeUnit.octet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary octet
 * @constant
 * @type {number}
 */
export
const octet: VolumeUnit = VolumeUnit.octet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VolumeUnit_segment
 * @constant
 * @type {number}
 */
export
const VolumeUnit_segment: VolumeUnit = VolumeUnit.segment; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary segment
 * @constant
 * @type {number}
 */
export
const segment: VolumeUnit = VolumeUnit.segment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VolumeUnit_message
 * @constant
 * @type {number}
 */
export
const VolumeUnit_message: VolumeUnit = VolumeUnit.message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary message
 * @constant
 * @type {number}
 */
export
const message: VolumeUnit = VolumeUnit.message; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_VolumeUnit: $.ASN1Decoder<VolumeUnit> = $._decodeEnumerated;

export
const _encode_VolumeUnit: $.ASN1Encoder<VolumeUnit> = $._encodeEnumerated;

/* eslint-enable */
