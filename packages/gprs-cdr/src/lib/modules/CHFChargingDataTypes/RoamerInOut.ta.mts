/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED {
 *    roamerInBound     ( 0 ),
 *    roamerOutBound    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RoamerInOut {
    roamerInBound = 0,
    roamerOutBound = 1,
}

/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED {
 *    roamerInBound     ( 0 ),
 *    roamerOutBound    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type RoamerInOut = _enum_for_RoamerInOut;

/**
 * @summary RoamerInOut
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamerInOut  ::=  ENUMERATED {
 *    roamerInBound     ( 0 ),
 *    roamerOutBound    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const RoamerInOut = _enum_for_RoamerInOut;

/**
 * @summary RoamerInOut_roamerInBound
 * @constant
 * @type {number}
 */
export
const RoamerInOut_roamerInBound: RoamerInOut = RoamerInOut.roamerInBound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamerInBound
 * @constant
 * @type {number}
 */
export
const roamerInBound: RoamerInOut = RoamerInOut.roamerInBound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RoamerInOut_roamerOutBound
 * @constant
 * @type {number}
 */
export
const RoamerInOut_roamerOutBound: RoamerInOut = RoamerInOut.roamerOutBound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary roamerOutBound
 * @constant
 * @type {number}
 */
export
const roamerOutBound: RoamerInOut = RoamerInOut.roamerOutBound; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_RoamerInOut: $.ASN1Decoder<RoamerInOut> = $._decodeEnumerated;

export
const _encode_RoamerInOut: $.ASN1Encoder<RoamerInOut> = $._encodeEnumerated;

/* eslint-enable */
