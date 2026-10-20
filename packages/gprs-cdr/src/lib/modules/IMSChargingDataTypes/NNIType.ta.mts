/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NNIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NNIType     ::=  ENUMERATED {
 *    non-roaming                 ( 0 ),
 *    roaming-without-loopback    ( 1 ),
 *    roaming-with-loopback       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NNIType {
    non_roaming = 0,
    roaming_without_loopback = 1,
    roaming_with_loopback = 2,
}

/**
 * @summary NNIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NNIType     ::=  ENUMERATED {
 *    non-roaming                 ( 0 ),
 *    roaming-without-loopback    ( 1 ),
 *    roaming-with-loopback       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type NNIType = _enum_for_NNIType;

/**
 * @summary NNIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NNIType     ::=  ENUMERATED {
 *    non-roaming                 ( 0 ),
 *    roaming-without-loopback    ( 1 ),
 *    roaming-with-loopback       ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const NNIType = _enum_for_NNIType;

/**
 * @summary NNIType_non_roaming
 * @constant
 * @type {number}
 */
export
const NNIType_non_roaming: NNIType = NNIType.non_roaming; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_roaming
 * @constant
 * @type {number}
 */
export
const non_roaming: NNIType = NNIType.non_roaming; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NNIType_roaming_without_loopback
 * @constant
 * @type {number}
 */
export
const NNIType_roaming_without_loopback: NNIType = NNIType.roaming_without_loopback; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roaming_without_loopback
 * @constant
 * @type {number}
 */
export
const roaming_without_loopback: NNIType = NNIType.roaming_without_loopback; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NNIType_roaming_with_loopback
 * @constant
 * @type {number}
 */
export
const NNIType_roaming_with_loopback: NNIType = NNIType.roaming_with_loopback; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roaming_with_loopback
 * @constant
 * @type {number}
 */
export
const roaming_with_loopback: NNIType = NNIType.roaming_with_loopback; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_NNIType: $.ASN1Decoder<NNIType> = $._decodeEnumerated;

export
const _encode_NNIType: $.ASN1Encoder<NNIType> = $._encodeEnumerated;

/* eslint-enable */
