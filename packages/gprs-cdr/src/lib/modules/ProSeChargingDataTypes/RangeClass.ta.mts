/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RangeClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RangeClass  ::=  ENUMERATED {
 *    reserved            ( 0 ),
 *    fiftyMeter          ( 1 ),
 *    onehundredMeter     ( 2 ),
 *    twohundredMeter     ( 3 ),
 *    fivehundredMeter    ( 4 ),
 *    onethousandMeter    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RangeClass {
    reserved = 0,
    fiftyMeter = 1,
    onehundredMeter = 2,
    twohundredMeter = 3,
    fivehundredMeter = 4,
    onethousandMeter = 5,
}

/**
 * @summary RangeClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RangeClass  ::=  ENUMERATED {
 *    reserved            ( 0 ),
 *    fiftyMeter          ( 1 ),
 *    onehundredMeter     ( 2 ),
 *    twohundredMeter     ( 3 ),
 *    fivehundredMeter    ( 4 ),
 *    onethousandMeter    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type RangeClass = _enum_for_RangeClass;

/**
 * @summary RangeClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RangeClass  ::=  ENUMERATED {
 *    reserved            ( 0 ),
 *    fiftyMeter          ( 1 ),
 *    onehundredMeter     ( 2 ),
 *    twohundredMeter     ( 3 ),
 *    fivehundredMeter    ( 4 ),
 *    onethousandMeter    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const RangeClass = _enum_for_RangeClass;

/**
 * @summary RangeClass_reserved
 * @constant
 * @type {number}
 */
export
const RangeClass_reserved: RangeClass = RangeClass.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: RangeClass = RangeClass.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_fiftyMeter
 * @constant
 * @type {number}
 */
export
const RangeClass_fiftyMeter: RangeClass = RangeClass.fiftyMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fiftyMeter
 * @constant
 * @type {number}
 */
export
const fiftyMeter: RangeClass = RangeClass.fiftyMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_onehundredMeter
 * @constant
 * @type {number}
 */
export
const RangeClass_onehundredMeter: RangeClass = RangeClass.onehundredMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onehundredMeter
 * @constant
 * @type {number}
 */
export
const onehundredMeter: RangeClass = RangeClass.onehundredMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_twohundredMeter
 * @constant
 * @type {number}
 */
export
const RangeClass_twohundredMeter: RangeClass = RangeClass.twohundredMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary twohundredMeter
 * @constant
 * @type {number}
 */
export
const twohundredMeter: RangeClass = RangeClass.twohundredMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_fivehundredMeter
 * @constant
 * @type {number}
 */
export
const RangeClass_fivehundredMeter: RangeClass = RangeClass.fivehundredMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fivehundredMeter
 * @constant
 * @type {number}
 */
export
const fivehundredMeter: RangeClass = RangeClass.fivehundredMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RangeClass_onethousandMeter
 * @constant
 * @type {number}
 */
export
const RangeClass_onethousandMeter: RangeClass = RangeClass.onethousandMeter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onethousandMeter
 * @constant
 * @type {number}
 */
export
const onethousandMeter: RangeClass = RangeClass.onethousandMeter; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_RangeClass: $.ASN1Decoder<RangeClass> = $._decodeEnumerated;

export
const _encode_RangeClass: $.ASN1Encoder<RangeClass> = $._encodeEnumerated;

/* eslint-enable */
