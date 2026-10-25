/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MBMS2G3GIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMS2G3GIndicator  ::=  ENUMERATED {
 *    twoG               ( 0 ),
 *    threeG             ( 1 ),
 *    twoG-AND-threeG    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MBMS2G3GIndicator {
    twoG = 0,
    threeG = 1,
    twoG_AND_threeG = 2,
}

/**
 * @summary MBMS2G3GIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMS2G3GIndicator  ::=  ENUMERATED {
 *    twoG               ( 0 ),
 *    threeG             ( 1 ),
 *    twoG-AND-threeG    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MBMS2G3GIndicator = _enum_for_MBMS2G3GIndicator;

/**
 * @summary MBMS2G3GIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MBMS2G3GIndicator  ::=  ENUMERATED {
 *    twoG               ( 0 ),
 *    threeG             ( 1 ),
 *    twoG-AND-threeG    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MBMS2G3GIndicator = _enum_for_MBMS2G3GIndicator;

/**
 * @summary MBMS2G3GIndicator_twoG
 * @constant
 * @type {number}
 */
export
const MBMS2G3GIndicator_twoG = MBMS2G3GIndicator.twoG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary twoG
 * @constant
 * @type {number}
 */
export
const twoG = MBMS2G3GIndicator.twoG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMS2G3GIndicator_threeG
 * @constant
 * @type {number}
 */
export
const MBMS2G3GIndicator_threeG = MBMS2G3GIndicator.threeG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary threeG
 * @constant
 * @type {number}
 */
export
const threeG = MBMS2G3GIndicator.threeG; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MBMS2G3GIndicator_twoG_AND_threeG
 * @constant
 * @type {number}
 */
export
const MBMS2G3GIndicator_twoG_AND_threeG = MBMS2G3GIndicator.twoG_AND_threeG; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary twoG_AND_threeG
 * @constant
 * @type {number}
 */
export
const twoG_AND_threeG = MBMS2G3GIndicator.twoG_AND_threeG; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MBMS2G3GIndicator: $.ASN1Decoder<MBMS2G3GIndicator> = $._decodeEnumerated;

export
const _encode_MBMS2G3GIndicator: $.ASN1Encoder<MBMS2G3GIndicator> = $._encodeEnumerated;

/* eslint-enable */
